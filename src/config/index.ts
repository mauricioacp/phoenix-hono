import { Config } from "../types/config.ts";
import { load } from "@std/dotenv";

await load({ export: true });

export const config: Config = {
  STRAPI_URL: Deno.env.get("STRAPI_URL") || "",
  STRAPI_API_TOKEN: Deno.env.get("STRAPI_API_TOKEN") || "",
  SUPABASE_URL: Deno.env.get("SUPABASE_URL") || "",
  SUPABASE_API_KEY: Deno.env.get("SUPABASE_API_KEY") || "",
};
