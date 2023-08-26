const ItemFilterFBTitle = require('./fb/ItemFilterFBTitle.js')
const ItemFilterFBThumbnail = require('./fb/ItemFilterFBThumbnail.js')

const ItemFilterFBCoolPC = require('./sites/ItemFilterFBCoolPC.js')
const ItemFilterImageEmbed = require('./common/ItemFilterImageEmbed.js')

let ItemFilters = {
  common: {
    ItemFilterImageEmbed
  },
  fb: {
    ItemFilterFBTitle,
    ItemFilterFBThumbnail,
  },
  sites: {
    ItemFilterFBCoolPC,
  } 
}

module.exports = ItemFilters