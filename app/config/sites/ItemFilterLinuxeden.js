
let main = async function (item, options) {

  if (item.title.startsWith('每日文章精选')) {
    return false
  }

  return item
}

module.exports = main