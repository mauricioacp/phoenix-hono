import { Context } from "@hono";
import { DataService } from "../services/interfaces/dataService.ts";
import { StrapiService } from "@/services/strapi.service.ts";
import {Agreement} from "../types/strapi.ts";

export class TransferController {
  constructor(
    private readonly sourceService: StrapiService,
    private readonly targetService: DataService,
  ) {}

  async transfer(c: Context): Promise<Response> {

    const { contentType, tableName } = c.req.param();

    const data = await this.sourceService.fetch(contentType);


    for (const agreement of data) {
      const agreemenAttr: Agreement = agreement.attributes;

    }

    // await this.targetService.upload(tableName, data);


    return c.json({
      success: true,
      message: `Transferred ${data.length} records successfully`,
    });
  }
}
