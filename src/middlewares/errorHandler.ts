/* eslint-disable prettier/prettier */
import { Response, Request, NextFunction } from 'express'
import ApiError from '../shared/utils/apiError'

const ErrorHandler = (
  error: ApiError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const { status, message } = error

  if (error.name === 'ValidationError') return res.status(400).json({ message })
  res
    .status(status || 500)
    .json({
      message:
        status === 500 || typeof status === 'undefined'
          ? 'Internal Server Error, Please Try Again Later'
          : message,
    })
}
export default ErrorHandler
