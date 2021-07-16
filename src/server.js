const express = require('express')
const { routes } = require('./routes/index')
const { setupServerCache, cacheMiddleware } = require('./database/index')


/** @ServerInstance */
const Api = express()


/** @Middlewares */
Api.use(express.json())
Api.use(cacheMiddleware)


/** @Routes */
Api.use(routes)


const API_PORT = process.env.PORT || 3000
Api.listen(API_PORT, async err => {

  setupServerCache()

  if (err) {
    console.log(`\r # ☠️ Error:${err}`)
  } else {
    console.log(`\r # ✅ API endpoint: localhost:${API_PORT}`)
  }
})

