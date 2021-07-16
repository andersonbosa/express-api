
const axios = require('axios')

/**
 * To communication with SuperHero API.
 *
 * @type {import('axios').AxiosInstance}
 *
*/
const axiosClient = axios.create({
  baseURL: 'https://akabab.github.io/superhero-api/api'
})

/**
 * look for similar values ​​in the permitted properties of the object that is provided.
 *
 * @param {string[]} [whiteList=[]]
 * @param {string} [searchValue='']
 * @param {Object} searchedObject
 * @return {Object[]}
 */
async function searchWhitelisted (whiteList = [], searchingValue = '', searchedObject) {
  const parseResults = (results, objKey) => {
    const hero = searchedObject[objKey]
    for (const heroKey in hero) {
      const isKeyWhitelisted = whiteList.includes(heroKey)
      if (isKeyWhitelisted) {
        const heroValue = JSON.stringify(hero[heroKey])
        const hasFound = (new RegExp(`${searchingValue}`, 'i')).test(heroValue)
        if (hasFound) {
          results.push(hero)
        }
      }
    }
    return results
  }
  return Object.keys(searchedObject).reduce(parseResults, [])
}

/**
 * make GET request o the given endpoint
 *
 * @param {string} [jsonEndpoint='id/1.json']
 * @return {Promise}
 */
async function getFromApi (jsonEndpoint = 'id/1.json') {
  return axiosClient.get(jsonEndpoint)
    .catch(_err => {
      console.log('*****', _err)
    })
}

/**
 * verify that the surveyed term is valid given the determined heuristics.
 *
 * @param {string} searchQuery
 * @return {boolean
 */
async function isSearchQueryValid (searchQuery = '') {
  const hasMinSize = searchQuery.length >= 3
  return hasMinSize
}

module.exports = {
  searchResultsIn,
  searchWhitelisted,
  getFromApi,
  isSearchQueryValid
}
