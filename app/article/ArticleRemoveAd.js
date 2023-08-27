const ArticleRemoveAd = function ($) {

  $.find('.adsbygoogle,script,ins,.single_ads,.content-ads-container,.addtoany_content,.ad-wrap').remove()

  return $
}

module.exports = ArticleRemoveAd
