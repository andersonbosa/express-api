const { readCacheFile } = require('../database')
const { isSearchQueryValid, searchWhitelisted } = require('../utils')

/**
 * @param {import('express').Request} _request
 * @param {import('express').Response} _response
 * @param {import('express').NextFunction} _next
 */
async function heroInterface (_request, _response, _next) {
  const { slug } = _request.params
  /** @BusinessRule - Create a Get / Hero / {Slug} route, which will get the hero in question by the Slug attribute */
  /** @BusinessRule - If the hero exists, only he with Status 200 */
  /** @BusinessRule - If the hero does not exist, return 404 */
}

module.exports = {
  heroInterface
}
