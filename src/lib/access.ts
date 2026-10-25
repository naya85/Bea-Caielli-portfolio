/** Password gate shared by the homepage, the unlock action and the middleware. */
export const ACCESS_COOKIE = "portfolio_access";
export const ACCESS_MAX_AGE = 60 * 60 * 24 * 30;

const password = () => process.env.PORTFOLIO_PASSWORD ?? "";

/** With no password configured the site stays open, so a missing env var never locks everyone out. */
export const isGateEnabled = () => password().length > 0;

/** The cookie stores a hash of the password, never the password itself; changing the password signs everyone out. */
export async function accessToken(): Promise<string> {
  const data = new TextEncoder().encode(`bea-portfolio:${password()}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function hasAccess(cookieValue: string | undefined): Promise<boolean> {
  if (!isGateEnabled()) return true;
  return cookieValue === (await accessToken());
}

export function isCorrectPassword(attempt: string): boolean {
  const expected = password();
  if (attempt.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= attempt.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}
