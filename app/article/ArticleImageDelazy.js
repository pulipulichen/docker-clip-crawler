// const cheerio = require('cheerio');

const main = function ($) {

  let images = $.find('img[data-lazy-src]')
  for (let i = 0; i < images.length; i++) {
    let image = images.eq(i)

    // console.log(image.attr('data-lazy-src'))
    image.attr('src', image.attr('data-lazy-src'))
    image.removeAttr('data-lazy-src')
    image.removeAttr('decoding')
  }

  // $.find('img[data-lazy-src]').each(function () {
  //   // const $this = $(this);
  //   // const $this = cheerio.load(this);
  //   // $this.replaceWith(`<img src="${$this.attr('data-lazy-src')}" />`);
  //   // console.log(this)
  //   // this.src = this.getAttribute('data-lazy-src')
  //   // console.log(this.src)
  //   // this.removeAttribute('data-lazy-src')
  //   // delete this['decoding']
  // });

  return $
}

module.exports = main
