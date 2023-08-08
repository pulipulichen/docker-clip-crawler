const ShellSpawn = require('./ShellSpawn.js')

let isRunning = false
let sleep = function (ms = 500) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = async function (cmdArray, stderrHandler, errorHandler) {
  while (isRunning === true) {
    await sleep(1000)
  }

  isRunning = true
  // console.log(cmdArray)
  let result = await ShellSpawn(cmdArray, stderrHandler, errorHandler)
  isRunning = false

  return result
}
