export interface DataService {
  fetch(endpoint: string): Promise<Record<string, unknown>[]>;
  upload(tableName: string, data: Record<string, unknown>[]): Promise<void>;
}
