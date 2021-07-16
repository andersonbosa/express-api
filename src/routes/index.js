const routes = require('express').Router()
const { searchInterface } = require('./search')

routes.use('/search', searchInterface)
// routes.use('/hero', heroInterface)

module.exports = { routes }
