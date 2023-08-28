const ItemFilters = require('./app/config/ItemFilters.js')

let feedList = [
  {
    title: 'clip',
    feedID: 'clip',
    feedURL: 'https://pulipuli-clip.blogspot.com/feeds/posts/default',
    itemFilters: [
      ItemFilters['sites'].ItemFilterClips
    ],
  },
]

// ----------------------------------------------------------------

// feedList = [
//   { // <outline type="rss" text="FUNTOP資訊網++$0414-1925$" title="FUNTOP資訊網++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffuntop.tw%2Ffeed%2F" htmlUrl="https://funtop.tw/"/>
//     title: 'FUNTOP資訊網',
//     feedID: 'funtop',
//     feedURL: 'https://funtop.tw/feed/',
//     thumbnail: 'https://funtop.tw/wp-content/themes/funtop/img/favicon.ico?ver=1',
//     itemFilters: [
//       ItemFilters['sites'].ItemFilterBlog,
//       ItemFilters['sites'].ItemFilterFuntop,
//       // ItemFilters['common'].ItemFilterImageEmbed,
//     ],
//     options: {
//       selector: 'article[id]',
//       proxy: true
//     }
//   },
// ]

module.exports = feedList