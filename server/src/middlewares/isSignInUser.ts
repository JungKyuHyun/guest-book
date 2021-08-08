import { Request, Response, NextFunction } from 'express';

export function isSignInUser(
  { body }: Request,
  res: Response,
  next?: NextFunction
) {
  if (body?.userId !== undefined) {
    return next?.();
  }
  res.status(404).send('사용자 정보가 없습니다.');
}
