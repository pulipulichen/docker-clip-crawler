
const urlPattern = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/g;
const CONFIG = require('../../../config-json.js')

const ArticleExtract = require('../../article/ArticleExtract.js')
const ArticleRemoveAttributes = require('../../article/ArticleRemoveAttributes.js')

let main = async function (item, options = {}) {

  if (!item.content) {
    return item
  }

  let {
    selector = 'article,#main,body',
    referer
  } = options

  // console.log(CONFIG.publicURL)
  // let urls = item.content.match(urlPattern).filter((url) => {
  //   if (url.startsWith(CONFIG.publicURL)) {
  //     return false
  //   }
  //   else if (url.startsWith('https://fetchrss.com')) {
  //     return false
  //   }
  //   else if (referer && url.startsWith(referer)) {
  //     return true
  //   }
  //   return true
  // }).map(url => {
  //   url = url.trim()
  //   if (url.endsWith('<br>')) {
  //     url = url.slice(0, -4)
  //   }
  //   return url
  // })
  // console.log(urls)
  // process.exit(1)

  let crawlTargetURL = item.link

  if (!crawlTargetURL) {
    return item
  }
  
  // console.log(crawlTargetURL)
  // process.exit(1)
  // console.log({selector})
  let article = await ArticleExtract(crawlTargetURL, selector)
  article = ArticleRemoveAttributes(article)
  // console.log(article)
  // process.exit(1)

  item.content = article

  return item
}

module.exports = main