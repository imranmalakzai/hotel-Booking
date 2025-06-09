import dotenv from "dotenv";
dotenv.config({ path: `.env.${"development" || "production"}.local` });

export const {
  PORT,
  MONGODB_URI,
  DB_NAME,
  ALLOWED_CORS_ORIGIN,
  CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY,
  CLERK_WEBHOOKS_SECRET,
} = process.env;
