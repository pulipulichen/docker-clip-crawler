const cheerio = require('cheerio');

function removeAttributes(html, attributes = ['class', 'id', 'style', 'width', 'height', 'data-original', 'decoding', 'loading']) {
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
    '<p><strong><span>–</span></strong></p>',
    '<p></p>',
    ' alt=""'
  ]
  removeKeywordList.forEach(keyword => {
    while (htmlOutput.indexOf(keyword) > -1) {
      htmlOutput = htmlOutput.split(keyword).join('')
    }
  })

  while (htmlOutput.indexOf('\n\n') > -1) {
    htmlOutput = htmlOutput.split('\n\n').join('\n')
  }
  

  // if (htmlOutput.endsWith('"')) {
  //   htmlOutput = htmlOutput.slice(0, -1)
  // }

  return htmlOutput
}

module.exports = removeAttributes