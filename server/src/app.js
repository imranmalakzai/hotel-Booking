// src/app.js
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ALLOWED_CORS_ORIGIN } from "./config/env.config.js";
import { clerkMiddleware } from "@clerk/express";
import errorHandler from "./middlewares/ErrorHandler.middlewares.js";
import clerkWebHooks from "./utils/clerkWebHooks.js";

const app = express();

app.use(cors({ origin: ALLOWED_CORS_ORIGIN, credentials: true }));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: false }));

// Clerk Middleware
app.use(clerkMiddleware());

// Clerk Webhook Listener
app.use("/api/clerk", clerkWebHooks);

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({ message: "✅ API is live and running." });
});

// Global Error Handler
app.use(errorHandler);

export default app;
