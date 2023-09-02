/* eslint-disable prettier/prettier */
// @desc    this class is responsible about operation errors (errors that i can predict)
class ApiError extends Error {
  status: number

  constructor(message: string, statusCode: number) {
    super()
    this.status = statusCode
    this.message = message
  }
}

export default ApiError
