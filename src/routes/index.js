const routes = require('express').Router()
const { readCacheFile } = require('../database')
const { isSearchQueryValid, searchWhitelisted } = require('../utils')

/**
 * @param {import('express').Request} _request
 * @param {import('express').Response} _response
 * @param {import('express').NextFunction} _next
 */
async function searchInterface (_request, _response, _next) {
  const { q: searchQuery } = _request.query

  /** @BusinessRule - If the search has less than 3 characters, return an error with Status 400*/
  if (!isSearchQueryValid(searchQuery)) {
    return _response
      .sendStatus(400)
  }

  /** @BusinessRule Search on cache */
  const cacheWhiteList = ['name', 'appearance', 'biography', 'work']
  const cacheObject = readCacheFile() || {}
  const searchResults = await searchWhitelisted(cacheWhiteList, searchQuery, cacheObject) || []
  if (searchResults.length) {
    return _response
      .json([...searchResults])
  }

  /** @BusinessRule - If no superhero is found, return status 204  */
  return _response
    .sendStatus(204)
}

routes.use('/search', searchInterface)
// routes.use('/hero', heroInterface)

module.exports = { routes }
