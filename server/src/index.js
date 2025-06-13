// src/index.js
import app from "./app.js";
import { PORT } from "./config/env.config.js";
import connectToMongoDB from "./db/mongodb.connection.js";

connectToMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("✅ Server is up and running on port", PORT);
    });
  })
  .catch(() => {
    console.error("❌ Failed to connect to MongoDB");
  });
