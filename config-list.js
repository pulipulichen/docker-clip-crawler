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
  // {
  //   title: '湯姆群情報站',
  //   feedID: 'tomchun',
  //   feedURL: 'https://tomchun.tw/tomchun/feed/',
  //   itemFilters: [
  //     ItemFilters['common'].ItemFilterArticleClean,
  //     ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  // },
  // {
  //   title: '通知：Steam特價',
  //   feedID: 'sub-steam-wishlist-2017',
  //   feedURL: 'https://sub-steam-wishlist-2017.blogspot.com/feeds/posts/default?alt=rss',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBloggerSteamWishlist,
  //   ],
  // },
  // {
  //   title: '電子報：政大電算中心 MailGates Notification',
  //   feedID: 'sub-nccu-cc-2016',
  //   feedURL: 'https://sub-nccu-cc-2016.blogspot.com/feeds/posts/default?alt=rss',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBloggerNCCUCC,
  //   ],
  // },
  // {
  //   title: '熊阿貝教電腦',
  //   feedID: 'bearteach',
  //   feedURL: 'https://bearteach.com/feed',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog
  //   ],
  //   options: {
  //     selector: '.entry-content[itemprop="text"]'
  //   }
  // },
  // {
  //   title: '硬是要學 SOFT4FUN',
  //   feedID: 'soft4fun',
  //   feedURL: 'https://www.soft4fun.net/feed',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog
  //   ],
  //   options: {
  //     selector: '.tdb_single_content .tdb-block-inner.td-fix-index'
  //   }
  // },
  // {
  //   title: '米薩克 聊 3C',
  //   feedID: 'mesak',
  //   feedURL: 'https://mesak.tw/feed',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: '.post-entry'
  //   }
  // },
  // { // <outline type="rss" text="海芋小站++" title="海芋小站++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Ffeedproxy.google.com%2Finotetw" htmlUrl="https://www.inote.tw"/>
  //   title: '海芋小站',
  //   feedID: 'inote',
  //   feedURL: 'https://www.inote.tw/feed',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: '.entry-content'
  //   }
  // },
  // { // <outline type="rss" text="海芋小站++" title="海芋小站++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Ffeedproxy.google.com%2Finotetw" htmlUrl="https://www.inote.tw"/>
  //   title: 'OSCHINA 社区最新新闻',
  //   feedID: 'oschina',
  //   feedURL: 'https://www.oschina.net/news/rss',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterOSChina,
  //     ItemFilters['common'].ItemFilterImageEmbed,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  // },
  { // <outline type="rss" text="海芋小站++" title="海芋小站++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Ffeedproxy.google.com%2Finotetw" htmlUrl="https://www.inote.tw"/>
    title: '奇客Solidot',
    feedID: 'Solidot',
    feedURL: 'https://www.solidot.org/index.rss',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['sites'].ItemFilterSolidot
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '.p_mainnew'
    }
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