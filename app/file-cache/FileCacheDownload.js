const fs = require('fs');
const http = require('http'); // Use 'http' for HTTP URLs
const https = require('https'); // Use 'http' for HTTP URLs

function FileCacheDownload(url, outputPath) {
    const file = fs.createWriteStream(outputPath);

    let protocol = https
    if (url.startsWith('http://')) {
      protocol = http
    }


    return new Promise((resolve, reject) => {
      protocol.get(url, (response) => {
          response.pipe(file);

          file.on('finish', () => {
              file.close();
              // console.log('File downloaded and saved:', outputPath);
              resolve(outputPath)
          });
      }).on('error', (error) => {
          // console.error('Error downloading the file:', error);
          reject(error)
      });
    })
}

module.exports = FileCacheDownload