import { Request, Response, NextFunction } from 'express';

export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  HEAD = 'head',
  OPTIONS = 'options',
  PATCH = 'patch',
}

export type Handler = (
  req: Request,
  res: Response,
  next?: NextFunction
) => void;

export interface Route {
  method: HttpMethod;
  route: string;
  handler: Handler | ReadonlyArray<Handler>;
}

export type Routes = ReadonlyArray<Route>;
