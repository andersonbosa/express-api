const { readCacheFile } = require('../database')
const { isSearchQueryValid, searchWhitelisted } = require('../utils')

/**
 * @param {import('express').Request} _request
 * @param {import('express').Response} _response
 * @param {import('express').NextFunction} _next
 */
async function heroInterface (_request, _response, _next) {
  const { slug } = _request.params

  /** @BusinessRule - If the hero exists, only he with Status 200 */
  const cacheWhiteList = ['slug']
  const cacheObject = readCacheFile() || {}
  const searchResults = await searchWhitelisted(cacheWhiteList, slug, cacheObject) || []
  if (searchResults.length) {
    return _response
      .json([...searchResults])
  }
  
  /** @BusinessRule - If the hero does not exist, return 404 */
  return _response.sendStatus(400)
}

module.exports = {
  heroInterface
}
