import type { Request, Response } from "express";
import { jwtVerify } from "jose";
import cookie from "cookie";
import { COOKIE_NAME } from "@shared/const";
import { getUserById } from "./db";
import type { User } from "../drizzle/schema";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key");

export type CustomContext = {
  req: Request;
  res: Response;
  user: User | null;
};

export async function createCustomContext({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<CustomContext> {
  let user: User | null = null;

  try {
    // Parse cookies
    const cookies = cookie.parse(req.headers.cookie || "");
    const token = cookies[COOKIE_NAME];

    if (token) {
      // Verify JWT token
      const { payload } = await jwtVerify(token, JWT_SECRET);
      const userId = payload.userId as number;

      if (userId) {
        // Get user from database
        const dbUser = await getUserById(userId);
        if (dbUser) {
          user = dbUser;
        }
      }
    }
  } catch (error) {
    // Token invalid or expired, user remains null
    console.log("[Auth] Token verification failed:", error);
  }

  return {
    req,
    res,
    user,
  };
}
