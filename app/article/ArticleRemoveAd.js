const ArticleRemoveAd = function ($) {

  $.find('.adsbygoogle,script,ins,.single_ads,.content-ads-container,.addtoany_content,.ad-wrap,a[href^="https://www.buymeacoffee.com/"],.ag-revenue__wrapper,.heateor_sss_sharing_container').remove()

  return $
}

module.exports = ArticleRemoveAd
