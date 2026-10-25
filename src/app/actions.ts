"use server";

import { cookies } from "next/headers";
import { ACCESS_COOKIE, ACCESS_MAX_AGE, accessToken, isCorrectPassword } from "@/lib/access";

/** Setting the cookie inside the action makes Next re-render the page, so the unlocked sections arrive in the same response. */
export async function unlockPortfolio(password: string): Promise<{ ok: boolean }> {
  if (!isCorrectPassword(password.trim())) return { ok: false };
  (await cookies()).set(ACCESS_COOKIE, await accessToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ACCESS_MAX_AGE,
  });
  return { ok: true };
}
