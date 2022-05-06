'use strict'
import expressLoader from './express'
import mongooseLoader from './mongodb'

async function loaders (app) {
  await mongooseLoader()
  console.info('MongoDB Initialized')

  await expressLoader(app)
  console.info('Express Initialized')
}

export default loaders
