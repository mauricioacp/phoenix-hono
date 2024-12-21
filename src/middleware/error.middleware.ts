import { Context, Next } from "https://deno.land/x/hono@v4.3.11/mod.ts";

export async function errorHandler(c: Context, next: Next) {
  try {
    await next();
  } catch (err) {
    console.error("Error:", err);
    return c.json(
      {
        error: err instanceof Error ? err.message : "An unknown error occurred",
      },
      500,
    );
  }
}
