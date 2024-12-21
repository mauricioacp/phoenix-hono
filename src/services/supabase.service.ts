import { createClient } from "https://esm.sh/@supabase/supabase-js@2.44.2";
import { config } from "../config/index.ts";
import { DataService } from "../services/interfaces/dataService.ts";

export class SupabaseService implements DataService {
  private readonly client;

  constructor() {
    // this.client = createClient(config.SUPABASE_URL, config.SUPABASE_API_KEY);
    this.client = {}
  }

  fetch(): Promise<Record<string, unknown>[]> {
    throw new Error("Fetch not implemented for Supabase service");
  }

  async upload(
    tableName: string,
    data: Record<string, unknown>[],
  ): Promise<void> {
    const { error } = await this.client.from(tableName).insert(data);

    if (error) {
      throw new Error(`Supabase Error: ${error.message}`);
    }
  }
}
