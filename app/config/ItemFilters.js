const ItemFilterArticleClean = require('./common/ItemFilterArticleClean.js')
const ItemFilterImageEmbed = require('./common/ItemFilterImageEmbed.js')

const ItemFilterFB = require('./fb/ItemFilterFB.js')
const ItemFilterFBTitle = require('./fb/ItemFilterFBTitle.js')
const ItemFilterFBContent = require('./fb/ItemFilterFBContent.js')
const ItemFilterFBThumbnail = require('./fb/ItemFilterFBThumbnail.js')
const ItemFilterFBTitleRemoveID = require('./fb/ItemFilterFBTitleRemoveID.js')

const ItemFilterFBCoolPC = require('./sites/ItemFilterFBCoolPC.js')
const ItemFilterFBCheapAOE = require('./sites/ItemFilterFBCheapAOE.js')
const ItemFilterFBTomchunTW = require('./sites/ItemFilterFBTomchunTW.js')

const ItemFilterTwitter = require('./twitter/ItemFilterTwitter.js')
const ItemFilterTwitterPokemonGoJiang = require('./sites/ItemFilterTwitterPokemonGoJiang.js')

const ItemFilterBlog = require('./sites/ItemFilterBlog.js')

let ItemFilters = {
  common: {
    ItemFilterArticleClean,
    ItemFilterImageEmbed
  },
  fb: {
    ItemFilterFB,
    ItemFilterFBTitle,
    ItemFilterFBContent,
    ItemFilterFBThumbnail,
    ItemFilterFBTitleRemoveID,
  },
  twitter: {
    ItemFilterTwitter
  },
  sites: {
    ItemFilterFBCoolPC,
    ItemFilterFBCheapAOE,
    ItemFilterFBTomchunTW,
    ItemFilterTwitterPokemonGoJiang,
    ItemFilterBlog
  } 
}

module.exports = ItemFilters