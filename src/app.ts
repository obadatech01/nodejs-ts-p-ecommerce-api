import express, { Application } from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'

const { PORT } = process.env
const app: Application = express()
app.use(compression())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('port', PORT || 4000)

export { app }
