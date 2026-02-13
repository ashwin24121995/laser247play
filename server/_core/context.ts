import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { jwtVerify } from "jose";
import cookie from "cookie";
import { COOKIE_NAME } from "@shared/const";
import { getUserById } from "../db";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key");

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  try {
    // Parse cookies
    const cookies = cookie.parse(opts.req.headers.cookie || "");
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
    // Authentication is optional for public procedures
    user = null;
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
