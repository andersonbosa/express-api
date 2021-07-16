
const fs = require('fs')
const { resolve } = require('path')
const { getFromApi } = require('../utils')

/**
 * Constant to points the path of the cache file. 
 */
const CACHE_FILE_PATH = resolve(__dirname, 'cache.json')

/**
 * Interface to read the cache file.
 *
 * @description converts JSO to JSON
 * @param {Object} data
 */
function writeCacheFile (data = {}) {
  fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(data))
}

/**
 * Interface to write the cache file.
 * 
 * @description converts JSON to JSO
 * @return {Object}
 */
function readCacheFile () {
  const fileContent = fs.readFileSync(CACHE_FILE_PATH)
  return JSON.parse(fileContent || {})
}

async function setupServerCache () {
  getFromApi('/all.json')
    .then(response => {
      if (!response.data) {
        return
      }
      writeCacheFile(response.data)
    })
    .catch(err => {
      console.log('***** setupCache: %s', JSON.stringify(err))
    })
}

module.exports = {
  writeCacheFile,
  readCacheFile,
  setupServerCache,
  cacheMiddleware: () => { }
}
