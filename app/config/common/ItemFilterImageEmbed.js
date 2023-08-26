const cheerio = require('cheerio')
const ImageURLtoBase64 = require('./../../lib/ImageURLtoBase64.js');

let main = async function (item, rss) {
  let content = item.content
  const $ = cheerio.load(content)
  
  let imgList = $(`img[src]`)
  for (let i = 0; i < imgList.length; i++) {
    let img = imgList.eq(i)
    let src = img.attr('src')
    try {
      let imgurURL = await ImageURLtoBase64(src)
      //console.log('cImgur', src, imgurURL)
      img.attr('src', imgurURL)
    } catch (e) {
      console.error(src)
      console.error(e)
      return content
    }
  }
  
  content = $('body').html()
  item.content = content

  return item
}

module.exports = main