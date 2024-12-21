import { Hono } from "https://deno.land/x/hono@v4.3.11/mod.ts";
import { setupRoutes } from "@/routes/index.ts";

const app = new Hono();
setupRoutes(app);

if (import.meta.main) {
  Deno.serve({ port: 3000 }, app.fetch);
}

export default app;