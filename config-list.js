const ItemFilters = require('./app/config/ItemFilters.js')

let feedList = [
  {
    title: '原價屋coolpc on Facebook',
    feedID: 'test-20230826-1834-coolpc-fb',
    feedURL: 'http://fetchrss.com/rss/5f999158644572630d2ebfc3622425f7b21ecd56f6380533.xml',
    itemFilters: [
      ItemFilters['fb'].ItemFilterFBTitle,
      ItemFilters['fb'].ItemFilterFBThumbnail,
      ItemFilters['common'].ItemFilterImageEmbed,
      ItemFilters['sites'].ItemFilterFBCoolPC
    ],
  },
]

// feedList = [
//   {
//     title: 'Watuber蛙家有個蛙土伯',
//     feedID: 'wajatw',
//     homepageURL: 'https://www.youtube.com/channel/UChEpXBOkRb9voZ45THsXncg',
//     itemFilters: ItemFiltersPreset.between3minTo30Min,
//   },
// ]

module.exports = feedList