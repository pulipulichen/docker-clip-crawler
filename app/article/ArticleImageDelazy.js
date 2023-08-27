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

  images = $.find('img[src^="https://i0.wp.com/"]')
  for (let i = 0; i < images.length; i++) {
    let image = images.eq(i)

    // console.log(image.attr('data-lazy-src'))
    let src = image.attr('src')
    src = src.slice(18, src.indexOf('?')).trim()
    src = 'https://' + src
    image.attr('src', src)
    image.removeAttr('fetchpriority')
    image.removeAttr('data-lazy-srcset')
    image.removeAttr('data-lazy-sizes')
    image.removeAttr('data-recalc-dims')
  }

  images = $.find('img[data-orig-file]')
  for (let i = 0; i < images.length; i++) {
    let image = images.eq(i)

    // console.log(image.attr('data-lazy-src'))
    let src = image.attr('data-orig-file')
    // src = src.slice(18, src.indexOf('?')).trim()
    // src = 'https://' + src
    image.attr('src', src)
    image.removeAttr('fetchpriority')
    image.removeAttr('data-lazy-srcset')
    image.removeAttr('data-lazy-sizes')
    image.removeAttr('data-recalc-dims')
  }

  images = $.find('img[data-src][src^="data:image/"]')
  for (let i = 0; i < images.length; i++) {
    let image = images.eq(i)

    // console.log(image.attr('data-lazy-src'))
    let src = image.attr('data-src')
    if (src.startsWith('https://i0.wp.com/')) {
      src = src.slice(18, src.indexOf('?')).trim()
      src = 'https://' + src
    }
      
    // src = src.slice(18, src.indexOf('?')).trim()
    // src = 'https://' + src
    image.attr('src', src)
    image.removeAttr('fetchpriority')
    image.removeAttr('data-lazy-srcset')
    image.removeAttr('data-lazy-sizes')
    image.removeAttr('data-src')
    image.removeAttr('data-recalc-dims')
  }

  images = $.find('img[data-ezsrc][src^="data:image/"]')
  for (let i = 0; i < images.length; i++) {
    let image = images.eq(i)

    // console.log(image.attr('data-lazy-src'))
    let src = image.attr('data-ezsrc')
    
      
    // src = src.slice(18, src.indexOf('?')).trim()
    // src = 'https://' + src
    image.attr('src', src)
    image.removeAttr('fetchpriority')
    image.removeAttr('data-lazy-srcset')
    image.removeAttr('data-lazy-sizes')
    image.removeAttr('data-src')
    image.removeAttr('data-recalc-dims')
    image.removeAttr('data-ezsrc')
    image.removeAttr('ezimgfmt')
    image.removeAttr('data-ezsrcset')
  }

  images = $.find('img[data-src][src="/img/loading.svg"]')
  for (let i = 0; i < images.length; i++) {
    let image = images.eq(i)

    // console.log(image.attr('data-lazy-src'))
    let src = image.attr('data-src')
    image.attr('src', src)
    image.removeAttr('data-src')
  }

  images = $.find('img[data-src]')
  for (let i = 0; i < images.length; i++) {
    let image = images.eq(i)

    // console.log(image.attr('data-lazy-src'))
    let src = image.attr('data-src')
    image.attr('src', src)
    image.removeAttr('data-src')
  }

  images = $.find('img[src^="//"]')
  for (let i = 0; i < images.length; i++) {
    let image = images.eq(i)

    // console.log(image.attr('data-lazy-src'))
    let src = image.attr('src')
    image.attr('src', 'https:' + src)
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
