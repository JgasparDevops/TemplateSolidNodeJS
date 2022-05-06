'use strict'

import express from 'express'
import { errStatus001, handleError } from '../../utils'
const app = express.Router()

app.get('/', (req, res) => {
  try {
    res.status(200).end()
  } catch (err) {
    return handleError({
      status: 500,
      message: errStatus001,
      errorDetail: err.message
    }, {}, res)
  }
})

export default app
