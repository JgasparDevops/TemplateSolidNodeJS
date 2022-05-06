'use strict'

import { errGeneric } from './'

const handleError = (err, others, res) => {
  console.error('err: ', JSON.stringify(err))
  console.error('errorDetail: ', JSON.stringify(err.errorDetail))
  const { errorDetail } = err
  return res.status(err.status || 500).json({
    error: {
      message: err.message || errGeneric,
      errorDetail
    },
    ...others
  })
}

export default handleError
