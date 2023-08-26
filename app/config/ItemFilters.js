const ItemFilterImageEmbed = require('./common/ItemFilterImageEmbed.js')

const ItemFilterFB = require('./fb/ItemFilterFB.js')
const ItemFilterFBTitle = require('./fb/ItemFilterFBTitle.js')
const ItemFilterFBContent = require('./fb/ItemFilterFBContent.js')
const ItemFilterFBThumbnail = require('./fb/ItemFilterFBThumbnail.js')
const ItemFilterFBTitleRemoveID = require('./fb/ItemFilterFBTitleRemoveID.js')

const ItemFilterFBCoolPC = require('./sites/ItemFilterFBCoolPC.js')
const ItemFilterFBCheapAOE = require('./sites/ItemFilterFBCheapAOE.js')
const ItemFilterFBTomchunTW = require('./sites/ItemFilterFBTomchunTW.js')

let ItemFilters = {
  common: {
    ItemFilterImageEmbed
  },
  fb: {
    ItemFilterFB,
    ItemFilterFBTitle,
    ItemFilterFBContent,
    ItemFilterFBThumbnail,
    ItemFilterFBTitleRemoveID,
  },
  sites: {
    ItemFilterFBCoolPC,
    ItemFilterFBCheapAOE,
    ItemFilterFBTomchunTW
  } 
}

module.exports = ItemFilters