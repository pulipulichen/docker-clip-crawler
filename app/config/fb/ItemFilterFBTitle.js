const MAX_LENGTH = 100

let main = async function (item, rss) {
  // console.log(item)
  let title = item.title

  // console.log(item)
  // process.exit(0)

  if (!title) {
    return item
  }

  title = title.trim()

  let nrPos = title.indexOf('\n')
  if (nrPos > 0) {
    title = title.substring(0, nrPos).trim()
  }

  if (title.length > MAX_LENGTH) {
    title = title.substring(0, MAX_LENGTH) + '...'
  }

  item.title = title

  return item
}

module.exports = main