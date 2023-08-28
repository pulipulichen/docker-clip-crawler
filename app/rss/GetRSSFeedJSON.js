let Parser = require('rss-parser');
// let parser = new Parser();
let parser
let NodeCacheSqlite = require('../lib/NodeCacheSqlite.js');
const CONFIG = require('../../config-json.js');

module.exports = async function (feedURL, options = {}) {
  let {
    cacheDay = 0.3, 
    proxy
  } = options

  // return await NodeCacheSqlite.get('GetRSSFeedJSON', feedURL, async function () {
    console.log('get feed', feedURL, (new Date()).toISOString())

    if (!parser) {
      parser = new Parser({
        customFields: {
          feed: [],
          item: [
            // ['media:content', 'media']
            ['media:content', 'media:content', {keepArray: true}],
          ],
        },
        requestOptions: {
          rejectUnauthorized: false
        }
      })
    }

    let crawlTargetURL = feedURL
    if (proxy) {
      crawlTargetURL = CONFIG.proxy + encodeURIComponent(crawlTargetURL)
    }

    // console.log({crawlTargetURL})
    let output = await parser.parseURL(crawlTargetURL)
    // console.log(output)

    if (!output.thumbnail && output.image && output.image.url) {
      output.thumbnail = output.image.url
    }
    if (!output.thumbnail && options.thumbnail) {
      output.thumbnail = options.thumbnail
    }
    // console.log(output)
    // process.exit(1)

    output.items = output.items.map(item => {
      let media = JSON.stringify(item['media:content'])
      if (media) {
        // console.log(media)
        media = JSON.parse(media)[0]['$']['url']
        item.thumbnail = media
      }
      // console.log()
      // item.thumbnail = item['media:content'][0]['$']['url']

      if (item.content && item['content:encoded']) {
        if (item['content:encoded'].length > item.content.length) {
          item.content = item['content:encoded']
        }
      }
      // console.log(item.content)
      return item
    })

    
    // console.log(output.items[0])

    // console.log(output.items[0]['media:content'])
    // process.exit(1)


    if (output.link === feedURL) {
      let id = feedURL.split('=').slice(-1)[0]
      output.link = 'https://www.youtube.com/playlist?list=' + id
      // channelURL = 
    }
    if (!output.feedLink) {
      output.feedLink = feedURL
      // channelURL = 
    }

    // output

    // console.log(output) 

    return output
  // }, parseInt(cacheDay * 1000 * 60 * 60 * 24, 10))
}