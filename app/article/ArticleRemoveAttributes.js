const cheerio = require('cheerio');

function removeAttributes(html, attributes = ['class', 'id', 'style', 'width', 'height', 'data-original']) {
  const $ = cheerio.load(html);

  attributes.forEach((attr) => {
    $(`[${attr}]`).removeAttr(attr);  
  })

  $(`style`).remove()
  $(`script`).remove()
  $(`link`).remove()
  $(`noscript`).remove()

  $('*').contents().each(function () {
    if (this.type === 'comment') {
      $(this).remove();
    }
  });

  $('image-group').each(function () {
    const $this = $(this);
    $this.replaceWith($this.html());
  });

  // --------------------------

  let htmlOutput = $('body').html().trim()

  let removeLeadingList = [
    '<p>&nbsp;</p>',
    '<br>'
  ]

  removeLeadingList.forEach(keyword => {
    while (htmlOutput.endsWith(keyword)) {
      htmlOutput = htmlOutput.slice(0, keyword.length * -1).trim()
    }
  })

  let removeKeywordList = [
    '<p>&nbsp;</p>',
    '\n\n'
  ]
  removeKeywordList.forEach(keyword => {
    while (htmlOutput.indexOf(keyword) > -1) {
      htmlOutput = htmlOutput.split(keyword).join('')
    }
  })

  // if (htmlOutput.endsWith('"')) {
  //   htmlOutput = htmlOutput.slice(0, -1)
  // }

  return htmlOutput
}

module.exports = removeAttributes