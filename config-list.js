const ItemFilters = require('./app/config/ItemFilters.js')

let feedList = [
  // {
  //   title: 'PokemonGoJiang on Twitter',
  //   feedID: 'PokemonGoJiang',
  //   feedURL: 'https://rss.app/feeds/SI3KHkg8RwMrRYbr.xml',
  //   itemFilters: [
  //     ItemFilters['twitter'].ItemFilterTwitter,
  //     ItemFilters['sites'].ItemFilterTwitterPokemonGoJiang
  //   ],
  // },
  // {
  //   title: '電腦王阿達',
  //   feedID: 'kocpc',
  //   feedURL: 'https://www.kocpc.com.tw/feed',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog
  //   ],
  //   options: {
  //     selector: '.Zi_ad_ar_iR'
  //   }
  // },
  {
    title: '湯姆群情報站',
    feedID: 'tomchun',
    feedURL: 'https://tomchun.tw/tomchun/feed/',
    itemFilters: [
      ItemFilters['common'].ItemFilterArticleClean,
      ItemFilters['common'].ItemFilterImageEmbed,
    ],
  },
]

// ----------------------------------------------------------------

// feedList = [
//   {
//     title: '遊戲角落 on Facebook',
//     feedID: 'udngame',
//     feedURL: 'http://fetchrss.com/rss/5f999158644572630d2ebfc3622425c2097d927598544362.xml',
//     itemFilters: [
//       // ItemFilters['sites'].ItemFilterFBCheapAOE,
//       ItemFilters['fb'].ItemFilterFB,
//     ],
//     options: {
//       referer: 'https://game.udn.com/',
//       selector: 'section.article-content__editor'
//     }
//   },
// ]

module.exports = feedList