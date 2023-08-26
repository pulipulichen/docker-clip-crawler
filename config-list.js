const ItemFilters = require('./app/config/ItemFilters.js')

let feedList = [
  {
    title: '原價屋coolpc on Facebook',
    feedID: 'coolpc-fb',
    feedURL: 'http://fetchrss.com/rss/5f999158644572630d2ebfc3622425f7b21ecd56f6380533.xml',
    itemFilters: [
      ItemFilters['fb'].ItemFilterFBTitle,
      ItemFilters['fb'].ItemFilterFBThumbnail,
      ItemFilters['common'].ItemFilterImageEmbed,
      ItemFilters['sites'].ItemFilterFBCoolPC
    ],
  },
  {
    title: 'Cheap on Facebook',
    feedID: 'cheapAOE',
    feedURL: 'http://fetchrss.com/rss/5ff67856db94f676db0c0fc2624855aee53bac619d087ae2.xml',
    itemFilters: [
      ItemFilters['sites'].ItemFilterFBCheapAOE,
      ItemFilters['fb'].ItemFilterFBTitle,
      ItemFilters['fb'].ItemFilterFBContent,
      ItemFilters['fb'].ItemFilterFBThumbnail,
      ItemFilters['common'].ItemFilterImageEmbed
    ],
  },
  {
    title: '王萊斯 on Facebook',
    feedID: 'Lice0424',
    feedURL: 'http://fetchrss.com/rss/5f99840f8d12cb2c1f52023262242347516fb22b9d745102.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterFBCheapAOE,
      ItemFilters['fb'].ItemFilterFBTitle,
      ItemFilters['fb'].ItemFilterFBContent,
      ItemFilters['fb'].ItemFilterFBThumbnail,
      ItemFilters['common'].ItemFilterImageEmbed
    ],
  },
  {
    title: '靠北圖書館 on Facebook',
    feedID: 'LibraryComplain',
    feedURL: 'http://fetchrss.com/rss/5f99871cb109d4184d3a5ef2624854e4f442e20bb177b632.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterFBCheapAOE,
      ItemFilters['fb'].ItemFilterFBTitleRemoveID,
      ItemFilters['fb'].ItemFilterFBTitle,
      ItemFilters['fb'].ItemFilterFBContent,
      ItemFilters['fb'].ItemFilterFBThumbnail,
      ItemFilters['common'].ItemFilterImageEmbed
    ],
  },
  {
    title: '不禮貌鄉民團 on Facebook',
    feedID: 'impolite.tw',
    feedURL: 'http://fetchrss.com/rss/5ff67856db94f676db0c0fc26224275a9c4570443d73fe02.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterFBCheapAOE,
      ItemFilters['fb'].ItemFilterFBTitle,
      ItemFilters['fb'].ItemFilterFBContent,
      ItemFilters['fb'].ItemFilterFBThumbnail,
      ItemFilters['common'].ItemFilterImageEmbed
    ],
  },
  {
    title: '東立出版社 on Facebook',
    feedID: 'TongLiComic',
    feedURL: 'http://fetchrss.com/rss/5f999158644572630d2ebfc36224257a521ba947b2536562.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterFBCheapAOE,
      ItemFilters['fb'].ItemFilterFBTitle,
      ItemFilters['fb'].ItemFilterFBContent,
      ItemFilters['fb'].ItemFilterFBThumbnail,
      // ItemFilters['sites'].ItemFilterFBTomchunTW,
      ItemFilters['common'].ItemFilterImageEmbed,
    ],
  },
  {
    title: 'Muse木棉花 on Facebook',
    feedID: 'emuse.com.tw',
    feedURL: 'http://fetchrss.com/rss/5f999158644572630d2ebfc3622425454254807def306ac3.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterFBCheapAOE,
      ItemFilters['fb'].ItemFilterFB
    ],
  },
  {
    title: '台灣安利美特online shop粉絲團 on Facebook',
    feedID: 'taiwan.animate',
    feedURL: 'http://fetchrss.com/rss/5f99871cb109d4184d3a5ef26224249668e361553f2c42c2.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterFBCheapAOE,
      ItemFilters['fb'].ItemFilterFB
    ],
  },
  {
    title: '次郎 JIRO on Facebook',
    feedID: 'KojiroWA2',
    feedURL: 'http://fetchrss.com/rss/5fafca78683abc7d28168d6262242670f8d1e74d980505c2.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterFBCheapAOE,
      ItemFilters['fb'].ItemFilterFB
    ],
  },
  {
    title: '遊戲角落 on Facebook',
    feedID: 'udngame',
    feedURL: 'http://fetchrss.com/rss/5f999158644572630d2ebfc3622425c2097d927598544362.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterFBCheapAOE,
      ItemFilters['fb'].ItemFilterFB,
    ],
    options: {
      referer: 'https://game.udn.com/',
      selector: 'section.article-content__editor'
    }
  },
  {
    title: '4Gamers on Facebook',
    feedID: '4GamersTaiwan',
    feedURL: 'http://fetchrss.com/rss/5f99840f8d12cb2c1f520232622423dec5351844b5755312.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterFBCheapAOE,
      ItemFilters['fb'].ItemFilterFB,
    ],
    options: {
      referer: 'https://www.4gamers.com.tw/',
      selector: ['noscript', 'article']
    }
  },
  {
    title: '全聯福利中心 on Facebook',
    feedID: 'pxmartchannel',
    feedURL: 'http://fetchrss.com/rss/5ff67856db94f676db0c0fc262242792245c2250db0448d2.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterFBCheapAOE,
      ItemFilters['fb'].ItemFilterFB,
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