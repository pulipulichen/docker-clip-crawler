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
  // { // <outline type="rss" text="海芋小站++" title="海芋小站++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Ffeedproxy.google.com%2Finotetw" htmlUrl="https://www.inote.tw"/>
  //   title: '奇客Solidot',
  //   feedID: 'Solidot',
  //   feedURL: 'https://www.solidot.org/index.rss',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     ItemFilters['sites'].ItemFilterSolidot
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: '.p_mainnew'
  //   }
  // },
  // { // <outline type="rss" text="海芋小站++" title="海芋小站++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Ffeedproxy.google.com%2Finotetw" htmlUrl="https://www.inote.tw"/>
  //   title: 'ePrice 比價王 手機品牌新聞',
  //   feedID: 'eprice-mobile',
  //   feedURL: 'http://www.eprice.com.tw/mobile/news/rss.xml',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: '.first-thread > .user-comment-block'
  //   }
  // },
  // { // <outline type="rss" text="开源工场++" title="开源工场++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/https%3A%2F%2Fopeningsource.org%2Ffeed%2F" htmlUrl="https://openingsource.org/"/>
  //   title: '开源工场',
  //   feedID: 'openingsource',
  //   feedURL: 'https://openingsource.org/feed/',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: '.post> .card-body > .post-content'
  //   }
  // },
  // { // <outline type="rss" text="鷹眼觀察++$0414-1925$" title="鷹眼觀察++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffeeds.feedburner.com%2FVedfolnir" htmlUrl="https://www.vedfolnir.com"/>
  //   title: '鷹眼觀察',
  //   feedID: 'vedfolnir',
  //   feedURL: 'https://www.vedfolnir.com/feed',
  //   itemFilters: [
  //     ItemFilters['common'].ItemFilterThumbnail,
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: '.wp-block-column > .entry-content'
  //   }
  // },
  // { // <outline type="rss" text="電獺少女++" title="電獺少女++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/http%3A%2F%2Fagirls.aotter.net%2F%3Ffeed%3Drss2" htmlUrl="https://agirls.aotter.net/"/>
  //   title: '電獺少女',
  //   feedID: 'agirls',
  //   feedURL: 'https://agirls.aotter.net/feed',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: 'article > .ag-article__content'
  //   }
  // },
  // { // <outline type="rss" text="ePrice 比價王 平板品牌新聞++$1227-1844$" title="ePrice 比價王 平板品牌新聞++$1227-1844$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Fwww.eprice.com.tw%2Fpad%2Fnews%2Frss.xml" htmlUrl="https://www.eprice.com.tw"/>
  //   title: 'ePrice 比價王 平板品牌新聞',
  //   feedID: 'eprice-pad',
  //   feedURL: 'http://www.eprice.com.tw/pad/news/rss.xml',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: '.first-thread > .user-comment-block'
  //   }
  // },
  // { // <outline type="rss" text="傻瓜狐狸的雜碎物品 :: 痞客邦 PIXNET ::++$0414-1925$" title="傻瓜狐狸的雜碎物品 :: 痞客邦 PIXNET ::++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffeed.pixnet.net%2Fblog%2Fposts%2Frss%2Fshowmer" htmlUrl="http://www.fox-saying.com/blog"/>
  //   title: '傻瓜狐狸的雜碎物品',
  //   feedID: 'fox-saying',
  //   feedURL: 'http://feed.pixnet.net/blog/posts/rss/showmer',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: '#article-content-inner[itemprop="articleBody"]'
  //   }
  // },
  // { // <outline type="rss" text="Linuxeden开源社区++$0413-0909$" title="Linuxeden开源社区++$0413-0909$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0413-0909$,/http%3A%2F%2Fwww.linuxeden.com%2Ffeed" htmlUrl="http://www.linuxeden.com"/>
  //   title: 'Linuxeden开源社区',
  //   feedID: 'linuxeden',
  //   feedURL: 'http://www.linuxeden.com/feed',
  //   itemFilters: [
  //     // ItemFilters['sites'].ItemFilterBlog,
  //     ItemFilters['common'].ItemFilterImageEmbed,
  //     ItemFilters['common'].ItemFilterArticleClean,
  //   ],
  //   // options: {
  //   //   selector: '#article-content-inner[itemprop="articleBody"]'
  //   // }
  // },
  // { // <outline type="rss" text="我是黃喬伊++$1227-1844$" title="我是黃喬伊++$1227-1844$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/https%3A%2F%2Fiamjoyhuang.com%2Ffeed%2F" htmlUrl="https://iamjoyhuang.com"/>
  //   title: '黃喬伊教英文',
  //   feedID: 'iamjoyhuang',
  //   feedURL: 'https://iamjoyhuang.com/feed/',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: '.entry-content'
  //   }
  // },
  // { // <outline type="rss" text="挨踢路人甲++$1227-1844$" title="挨踢路人甲++$1227-1844$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/https%3A%2F%2Ffeeds.feedburner.com%2Fitwalker" htmlUrl="https://walker-a.com/"/>
  //   title: '挨踢路人甲',
  //   feedID: 'walker-a',
  //   feedURL: 'https://walker-a.com/feed',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: 'article[id] > .entry-content'
  //   }
  // },
  // { // <outline type="rss" text="軟體玩家++" title="軟體玩家++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/https%3A%2F%2Ffeeds.feedburner.com%2Fquicktop" htmlUrl="https://pcrookie.com/"/>
  //   title: '軟體玩家',
  //   feedID: 'quicktop',
  //   feedURL: 'https://pcrookie.com/?feed=rss2',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     ItemFilters['sites'].ItemFilterPCRookie,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: 'article[id] > .td-post-content'
  //   }
  // },
  // { // <outline type="rss" text="靖技場++" title="靖技場++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/http%3A%2F%2Fjinnsblog.blogspot.com%2Ffeeds%2Fposts%2Fdefault" htmlUrl="https://www.jinnsblog.com/"/>
  //   title: '靖技場 聊 3C',
  //   feedID: 'jinnsblog',
  //   feedURL: 'https://www.jinnsblog.com/feed',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: 'article[id] > .entry-content'
  //   }
  // },
  // { // <outline type="rss" text="要改的地方太多了，那就改天吧++" title="要改的地方太多了，那就改天吧++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/https%3A%2F%2Fblog.user.today%2Ffeed%2F" htmlUrl="https://blog.user.today"/>
  //   title: '要改的地方太多了，那就改天吧',
  //   feedID: 'user.today',
  //   feedURL: 'https://blog.user.today/feed',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: 'article[id] > .entry__content'
  //   }
  // },
  // { // <outline type="rss" text="3C匠-喜愛玩各種3C產品++$0414-1925$" title="3C匠-喜愛玩各種3C產品++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2F3cjohnhardware.wordpress.com%2Ffeed%2F" htmlUrl="https://3cjohnhardware.wordpress.com"/>
  //   title: '3C匠',
  //   feedID: '3cjohnhardware',
  //   feedURL: 'https://3cjohnhardware.wordpress.com/feed',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: 'article[id] > .entry-content'
  //   }
  // },
  // { // <outline type="rss" text="香腸炒章魚 :: 痞客邦 PIXNET ::++$0414-1925$" title="香腸炒章魚 :: 痞客邦 PIXNET ::++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffeed.pixnet.net%2Fblog%2Fposts%2Frss%2Fmitblog" htmlUrl="http://mitblog.pixnet.net/blog"/>
  //   title: '香腸炒章魚',
  //   feedID: 'mitblog',
  //   feedURL: 'https://feed.pixnet.net/blog/posts/rss/mitblog',
  //   itemFilters: [
  //     ItemFilters['sites'].ItemFilterBlog,
  //     // ItemFilters['common'].ItemFilterImageEmbed,
  //   ],
  //   options: {
  //     selector: '#article-content-inner[itemprop="articleBody"]'
  //   }
  // },
  { // <outline type="rss" text="linux-apps.com - Latest Products++" title="linux-apps.com - Latest Products++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/https%3A%2F%2Fwww.linux-apps.com%2Fcontent.rdf"/>
    title: 'Linux Apps',
    feedID: 'linux-apps',
    feedURL: 'https://www.linux-apps.com/content.rdf',
    thumbnail: 'https://www.linux-apps.com/stores/media/store_logo/storeLogo.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterLinuxApps,
      ItemFilters['common'].ItemFilterThumbnail,
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