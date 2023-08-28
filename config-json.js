// const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
// const ConfigCheck = require('./app/config/ConfigCheck.js')
// const feedList = require('./config-list.js')

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
  maxWait: 1,

  maxFileCache: 5000,

  proxy: 'https://script.google.com/macros/s/AKfycbxvQlZuQNHnxAcEmzJI9GxuiEAWYs3uPq2BmCvpkbpABKNKoc-Ahdqo6mqh8zzl-4nc/exec?proxy='
  // feedList
}

// let test = '1754'

// CONFIG.publicURL = `https://dangerous-lizard-99.telebit.io/`
// CONFIG.titleAppend = '[RSS+] 20230827-' + test,
// CONFIG.idAppend = '20230827-' + test,
// CONFIG.maxDownloadItemPerFeed = 3

module.exports = CONFIG