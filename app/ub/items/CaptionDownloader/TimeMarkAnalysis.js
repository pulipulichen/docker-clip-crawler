const TimeMarkAnalysis = function (description) {
  let output = []

  if (typeof(description) !== 'string') {
    description = JSON.stringify(description)
  }

  description.trim().split('\n').forEach(function (line) {
    line = line.trim()

    if (pattern.test(line) === false) {
      return false
    }

    let title = line.slice(line.indexOf(' ')).trim()
    let timeString = line.slice(0, line.indexOf(' '))
    let parts = timeString.split(':')

    let time = 0
    parts.reverse().forEach(function (part, i) {
      time = time + (Number(part) * (60 ** i))
    })

    // if (time > 0) {
      output.push({
        time,
        title
      })
    // }
  })

  // console.log({output})
  return output
}

const pattern = /^\d+:\d+\s/;

module.exports = TimeMarkAnalysis;