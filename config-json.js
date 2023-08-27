// const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
// const ConfigCheck = require('./app/config/ConfigCheck.js')
// const feedList = require('./config-list.js')

let test = '1751'

let CONFIG = {
  publicURL: `https://democwise2016.github.io/action-RSS-Fulltext/`,
  // publicURL: `https://dangerous-lizard-99.telebit.io/`,
  publicURLShorten: `https://ppt.cc/f6Ddzx`,
  thumbnailBorderColor: 'CC3333',
  // titleAppend: '[RSS+] 20230827-' + test,
  // idAppend: '20230827-' + test,
  titleAppend: '[RSS+]',
  idAppend: false,

  maxDownloadItemPerFeed: 50,
  maxDownloadFeed: 50,
  newArrialMax: 50,
  maxDownloadItems: 100,
  maxExcutionMinutes: 25,
  maxWait: 5,

  maxFileCache: 5000,
  // feedList
}

// CONFIG.publicURL = `https://dangerous-lizard-99.telebit.io/`
// CONFIG.titleAppend = '[RSS+] 20230827-' + test,
// CONFIG.idAppend = '20230827-' + test,
// CONFIG.maxDownloadItemPerFeed = 3

module.exports = CONFIG