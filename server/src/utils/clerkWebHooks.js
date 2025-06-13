import { User } from "../models/users.models.js";
import { Webhook } from "svix";
import asyncHandler from "./asyncHandler.js";
import { CLERK_WEBHOOKS_SECRET } from "../config/env.config.js";

const clerkWebHooks = asyncHandler(async (req, res) => {
  const whook = new Webhook(CLERK_WEBHOOKS_SECRET);

  const headers = {
    "svix-id": req.headers["svix-id"],
    "svix-timestamp": req.headers["svix-timestamp"],
    "svix-signature": req.headers["svix-signature"],
  };

  // Verify and parse event
  const { type, data } = await whook.verify(JSON.stringify(req.body), headers);
  console.log(type, data);
  // user data
  const userData = {
    _id: data.id,
    email: data.email_addresses[0].email_address,
    username: data.first_name + data.last_name,
    image: data.image_url,
  };

  //** now we are checking for the type  */
  switch (type) {
    case "user.created": {
      await User.create(userData);
      break;
    }
    case "user.updated": {
      await User.findByIdAndUpdate(data.id, userData);
      break;
    }
    case "user.delete": {
      await User.findByIdAndDelete(data.id);
      break;
    }
    default: {
      break;
    }
  }
  res.status(200).json({ success: true, message: "Webhooks Resived" });
});

export default clerkWebHooks;
