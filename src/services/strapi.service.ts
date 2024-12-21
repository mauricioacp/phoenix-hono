import { config } from "../config/index.ts";
import { StrapiResponse } from "../types/strapi.ts";
import { DataService } from "../services/interfaces/dataService.ts";

export class StrapiService implements DataService {
  private readonly baseUrl: string;
  private readonly token: string;

  constructor() {
    this.baseUrl = config.STRAPI_URL;
    this.token = config.STRAPI_API_TOKEN;
  }

  async fetch(endpoint: string): Promise<Record<string, unknown>[]> {
    console.log(this.baseUrl);
    console.log(Deno.env.get("STRAPI_URL"));
    
    
    console.log(`${this.baseUrl}/api/${endpoint}`);
    
    const response = await fetch(`${this.baseUrl}/api/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Strapi API Error: ${response.statusText}`);
    }

    const data: StrapiResponse = await response.json();
    return data.data;
  }

  upload(): Promise<void> {
    throw new Error("Upload not implemented for Strapi service");
  }
}
