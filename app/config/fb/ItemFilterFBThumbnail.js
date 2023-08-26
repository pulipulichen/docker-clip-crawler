const he = require('he');
const ImageURLtoBase64 = require('./../../lib/ImageURLtoBase64.js');

let main = async function (item, rss) {
  // console.log(item)
  let content = item.content

  // console.log(item)
  // process.exit(0)

  if (!content) {
    return item
  }

  let header = `<img src="`
  let headerPos = content.indexOf(header)
  if (headerPos === -1) {
    return item
  }

  let startPos = headerPos + header.length
  
  let imgURL = content.slice(startPos, content.indexOf('"', startPos + 1))
  imgURL = he.decode(imgURL)
  imgURL = await ImageURLtoBase64(imgURL)
  // console.log(imgURL, startPos, content.indexOf('"', startPos + 1))

  item.thumbnail = imgURL

  return item
}

module.exports = main