function createSafeFilename(input) {
  // Normalize the string and limit the length
  const normalizedInput = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const maxLength = 50; // You can adjust this as needed
  const truncatedInput = normalizedInput.substring(0, maxLength);

  // Replace invalid characters with underscores
  const safeFilename = truncatedInput

  return safeFilename;
}

// =============

const cheerio = require('cheerio');

function extractFirstHref(htmlString) {
  // Load the HTML string into a Cheerio instance
  const $ = cheerio.load(htmlString);
  
  // Find the first <a> tag and get its href attribute
  const firstATag = $('a').first();
  const href = firstATag.attr('href');

  return href;
}

// =============

const fs = require('fs');

function appendToFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    // If the file doesn't exist, create it with the content
    fs.writeFileSync(filePath, content);
  } else {
    // If the file exists, append the content to it
    fs.appendFileSync(filePath, '\n' + content);
  }
}

// =============

let main = async function (item, options = {}) {

  let title = createSafeFilename(item.title)
  let url = extractFirstHref(item.content)
  let date = item.isoDate.slice(0, 7).split('-').join('/')
  let filepath = `./output/${date}/${title}.html`

  if (fs.existsSync(`/output/${date}/${title}.html`)) {
    return false
  }
  // console.log({title, url})
  // console.log({title, url})

  let line = `${url},${filepath}`
  console.log(line)
  appendToFile('/output/input.txt', line)

  // return item
  return false
}

module.exports = main