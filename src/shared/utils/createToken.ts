/* eslint-disable prettier/prettier */
import jwt from 'jsonwebtoken'

const {JWT_SECRET_KEY, JWT_EXPIRE_TIME} = process.env;
const createToken = (payload: number): string =>
  jwt.sign({ userId: payload }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE_TIME,
  })

module.exports = createToken