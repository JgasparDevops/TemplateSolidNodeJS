'use strict'
import express from 'express'
import Status from './status/status.router'

const app = express.Router()

app.use('/status', Status)

export default app
