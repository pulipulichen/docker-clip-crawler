const request = require('request');
const NodeCacheSqlite = require('./NodeCacheSqlite.js')

let ImageURLtoBase64 = function (imageUrl) {
  if (!imageUrl) {
    return ''
  }
  return new Promise((resolve, reject) => {
    // Make an HTTP request to fetch the image
    request.get({ url: imageUrl, encoding: null }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
          // Convert the image buffer to base64
          const base64Image = body.toString('base64');

          // Write the base64 string to a file
          // fs.writeFileSync(outputFilePath, base64Image, 'base64');
          
          // console.log('Image converted and saved as base64 string.');
          resolve(base64Image);
      } else {
          reject('Error fetching the image:', error);
      }
  })
  })
    
}


// let ImageURLtoBase64Cache = function (imageUrl) {

// }

module.exports = ImageURLtoBase64
