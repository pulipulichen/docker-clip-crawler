const ItemFilterArticleClean = require('./common/ItemFilterArticleClean.js')
const ItemFilterImageEmbed = require('./common/ItemFilterImageEmbed.js')
const ItemFilterThumbnail = require('./common/ItemFilterThumbnail.js')
const ItemFilterThumbnailCache = require('./common/ItemFilterThumbnailCache.js')


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
const ItemFilterBloggerSteamWishlist = require('./sites/ItemFilterBloggerSteamWishlist.js')
const ItemFilterBloggerNCCUCC = require('./sites/ItemFilterBloggerNCCUCC.js')
const ItemFilterOSChina = require('./sites/ItemFilterOSChina.js')
const ItemFilterSolidot = require('./sites/ItemFilterSolidot.js')
const ItemFilterPCRookie = require('./sites/ItemFilterPCRookie.js')
const ItemFilterLinuxApps = require('./sites/ItemFilterLinuxApps.js')
const ItemFilterLinuxeden = require('./sites/ItemFilterLinuxeden.js')
const ItemFilterPTT = require('./sites/ItemFilterPTT.js')
const ItemFilterFuntop = require('./sites/ItemFilterFuntop.js')
const ItemFilterClips = require('./sites/ItemFilterClips.js')


let ItemFilters = {
  common: {
    ItemFilterArticleClean,
    ItemFilterImageEmbed,
    ItemFilterThumbnail,
    ItemFilterThumbnailCache
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
    ItemFilterBlog,
    ItemFilterBloggerSteamWishlist,
    ItemFilterBloggerNCCUCC,
    ItemFilterOSChina,
    ItemFilterSolidot,
    ItemFilterPCRookie,
    ItemFilterLinuxApps,
    ItemFilterLinuxeden,
    ItemFilterPTT,
    ItemFilterFuntop,
    ItemFilterClips
  } 
}

module.exports = ItemFilters