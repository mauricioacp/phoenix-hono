import { assertEquals } from "@std/assert";
import { Context, Hono } from "https://deno.land/x/hono@v4.3.11/mod.ts";
import { TransferController } from "@/controllers/transfer.controller.ts";

Deno.test("TransferController.transfer", async () => {
    // Mock services
    const mockSourceService = {
      fetch: async () => ([{ id: 1, name: "Test" }]),
    };
    
    const mockTargetService = {
      upload: async () => {},
    };
  
    const controller = new TransferController(
      mockSourceService as any,
      mockTargetService as any
    );
  
    // Mock Hono context
    const mockContext = {
      req: {
        param: () => ({ contentType: "articles", tableName: "posts" }),
      },
      json: (data: unknown) => new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      }),
    } as unknown as Context;
  
    const response = await controller.transfer(mockContext);
    
    const responseData = await response.json();
  
    assertEquals(responseData, {
      success: true,
      message: "Transferred 1 records successfully",
    });
  });