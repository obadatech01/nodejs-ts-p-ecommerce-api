/* eslint-disable prettier/prettier */
import { Response, Request, NextFunction } from 'express'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AsyncHandler = (fn: any) => (
  req: Request,
  res: Response,
  next: NextFunction,
) =>
  Promise.resolve(fn(req, res, next)).catch(next)

export default AsyncHandler
