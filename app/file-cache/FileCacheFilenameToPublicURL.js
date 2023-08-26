
// const CONFIG = require('./../../config.js')
const path = require('path')
const publicURL = `https://democwise2016.github.io/action-RSS-FB-Feed/`

const FileCacheFilenameToPublicURL = function (filename) {
  // console.log(filename)
  // process.exit(0)
  // const publicURL = CONFIG.publicURL
  // if (!publicURL) {
  //   return false
  // }
  return path.join(publicURL, '/file-cache/', filename)
}

module.exports = FileCacheFilenameToPublicURL