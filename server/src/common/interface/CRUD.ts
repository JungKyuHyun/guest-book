export interface CRUD<T = any> {
  list: (limit: number, page: number) => Promise<T>;
  create: (resource: any) => Promise<boolean>;
  putById: (id: string, resource: any) => Promise<string>;
  readById: (id: string) => Promise<any>;
  deleteById: (id: string) => Promise<string>;
}
