'use strict'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import { Routes } from '../api'

export default async (app) => {
  app.use(cors())
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(Routes)

  return app
}
