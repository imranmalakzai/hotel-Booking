import express from "express";
import { clerkMiddleware } from "@clerk/express";
import cookieParser from "cookie-parser";
import { ALLOWED_CORS_ORIGIN } from "./config/env.config.js";
import cors from "cors";
import errorHandlerMiddlewares from "./middlewares/ErrorHandler.middlewares.js";
import clerkWebHooks from "./utils/clerkWebHooks.js";

const app = express();

app.use(cors({ origin: ALLOWED_CORS_ORIGIN, credentials: true }));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: false }));

app.use(clerkMiddleware());

//**Api to listen to clerk webhooks */
app.use("/api/clerk", clerkWebHooks);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Api is working..." });
});

app.use(errorHandlerMiddlewares);

export default app;
