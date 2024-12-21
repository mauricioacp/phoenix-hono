import { Hono } from "@hono"
import { TransferController } from "../controllers/transfer.controller.ts";
import { StrapiService } from "../services/strapi.service.ts";
import { SupabaseService } from "../services/supabase.service.ts";
import { errorHandler } from "../middleware/error.middleware.ts";

export function setupRoutes(app: Hono) {
  const strapiService = new StrapiService();
  const supabaseService = new SupabaseService();
  const transferController = new TransferController(
    strapiService,
    supabaseService,
  );

  app.use("*", errorHandler);
  app.get("/health", (c) => c.json({ status: "ok" }));
  app.post(
    "/transfer/:contentType/:tableName",
    (c) => transferController.transfer(c),
  );

  return app;
}
