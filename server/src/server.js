import app from "./app.js";
import { PORT } from "./config/env.config.js";
import mongodbConnection from "./db/mongodb.connection.js";

mongodbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(" - - - - - - Server is running - - - - - - - ");
    });
  })
  .catch(() => {
    console.log("- - - - - - - connection failed - - - - ");
  });
