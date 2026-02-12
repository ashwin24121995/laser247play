import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import type { User } from "../drizzle/schema";

function createMockContext(): { ctx: TrpcContext; cookies: Map<string, string> } {
  const cookies = new Map<string, string>();

  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      cookie: (name: string, value: string) => {
        cookies.set(name, value);
      },
      clearCookie: (name: string) => {
        cookies.delete(name);
      },
    } as TrpcContext["res"],
  };

  return { ctx, cookies };
}

describe("auth.register", () => {
  it("should reject registration for users under 18", async () => {
    const { ctx } = createMockContext();
    const caller = appRouter.createCaller(ctx);

    // Date of birth for someone who is 17 years old
    const under18Date = new Date();
    under18Date.setFullYear(under18Date.getFullYear() - 17);

    await expect(
      caller.auth.register({
        email: "under18@example.com",
        password: "password123",
        name: "Under Age",
        dateOfBirth: under18Date.toISOString().split("T")[0],
      })
    ).rejects.toThrow();
  });

  it("should allow registration for users 18 and older", async () => {
    const { ctx, cookies } = createMockContext();
    const caller = appRouter.createCaller(ctx);

    // Date of birth for someone who is exactly 18 years old
    const over18Date = new Date();
    over18Date.setFullYear(over18Date.getFullYear() - 18);

    const result = await caller.auth.register({
      email: `test${Date.now()}@example.com`, // Unique email
      password: "password123",
      name: "Test User",
      dateOfBirth: over18Date.toISOString().split("T")[0],
    });

    expect(result.success).toBe(true);
    expect(result.user).toBeDefined();
    expect(result.user.email).toContain("@example.com");
    expect(cookies.size).toBeGreaterThan(0); // Session cookie should be set
  });

  it("should reject duplicate email registration", async () => {
    const { ctx } = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const over18Date = new Date();
    over18Date.setFullYear(over18Date.getFullYear() - 20);
    const email = `duplicate${Date.now()}@example.com`;

    // First registration
    await caller.auth.register({
      email,
      password: "password123",
      name: "First User",
      dateOfBirth: over18Date.toISOString().split("T")[0],
    });

    // Second registration with same email should fail
    await expect(
      caller.auth.register({
        email,
        password: "password456",
        name: "Second User",
        dateOfBirth: over18Date.toISOString().split("T")[0],
      })
    ).rejects.toThrow("Email already registered");
  });
});
