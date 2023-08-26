const ArticleRemoveAd = function ($) {

  $.find('.adsbygoogle').remove()
  $.find('script').remove()
  $.find('ins').remove()
  $.find('.content-ads-container').remove()

  return $
}

module.exports = ArticleRemoveAd
