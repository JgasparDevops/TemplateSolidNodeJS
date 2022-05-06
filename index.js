'use strict'
import 'dotenv/config'
import loaders from './loaders'
import express from 'express'
import { serverPort } from './config'

async function startServer () {
  const app = express()
  await loaders(app)
  app.listen(serverPort, err => {
    if (err) {
      console.error(err)
      return
    }
    console.info(`Your server is running in port ${serverPort}!`)
  })
}

startServer()
