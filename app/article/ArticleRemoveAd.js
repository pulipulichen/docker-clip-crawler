const ArticleRemoveAd = function ($) {

  $.find('.adsbygoogle,script,ins,.single_ads,.content-ads-container').remove()

  return $
}

module.exports = ArticleRemoveAd
