const routes = require('express').Router()
const { searchInterface } = require('./search')
const { heroInterface } = require('./hero')

routes.use('/search', searchInterface)
routes.use('/hero/:slug', heroInterface)

module.exports = { routes }
