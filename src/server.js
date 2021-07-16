const express = require('express')
require('express-async-errors')
const { routes } = require('./routes/index')
const { setupServerCache, cacheMiddleware } = require('./database/index')


/** @ServerInstance */
const Api = express()


/** @Middlewares */
Api.use(express.json())
// Api.use(cacheMiddleware)


/** @Routes */
Api.use(routes)


const API_PORT = process.env.PORT || 3000
Api.listen(API_PORT, async _error => {

  setupServerCache()

  if (_error) {
    console.log(`\r # ☠️ Error:${_error}`)
  } else {
    console.log(`\r # ✅ API endpoint: localhost:${API_PORT}`)
  }
})

