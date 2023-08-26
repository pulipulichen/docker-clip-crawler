const FileCacheURLtoFilename = require('./FileCacheURLtoFilename.js')
const FileCacheMkdir = require('./FileCacheMkdir.js')

const FileCacheDownload = require('./FileCacheDownload.js')
const FileCacheClean = require('./FileCacheClean.js')

const FileCacheFilenameToPublicURL = require('./FileCacheFilenameToPublicURL.js')

const fs = require('fs')
const path = require('path')

const FileCache = async function (url) {
  
  let filename = FileCacheURLtoFilename(url)
  FileCacheMkdir()

  let cachePath = path.join('/output/file-cache/', filename)
  if (fs.existsSync(cachePath)) {
    return FileCacheFilenameToPublicURL(filename)
  }

  await FileCacheDownload(url, cachePath)
  FileCacheClean()

  return FileCacheFilenameToPublicURL(filename)
}

module.exports = FileCache