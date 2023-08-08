const NodeCacheSqlite = require('../../../lib/NodeCacheSqlite.js')
const ShellSpawn = require('../../../lib/ShellSpawn.js')
const CaptionFormat = require('./CaptionFormat.js')
const UBVideoIdParser = require('./../UBVideoIdParser.js')
const fs = require('fs')

const TimeMarkAnalysis = require('./TimeMarkAnalysis.js')

let isRunning = false
let sleep = function (ms = 500) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// https://youtu.be/85AqJsmxDZs
module.exports = async function (utID = 'https://youtu.be/JxbFotMgqik', timeMarkList = []) {
  let expire = 365 * 24 * 60 * 60 * 1000
  // expire = 10  // for test

  return await NodeCacheSqlite.get('CaptionDownloader', utID, async () => {
    try {
      if (utID.startsWith('http')) {
        utID = UBVideoIdParser(utID)
      }

      while (isRunning === true) {
        await sleep(1000)
      }

      isRunning = true
      await ShellSpawn([`python3`, `/app/python/caption.py`, utID])
      isRunning = false
      let srtPath = `/app/tmp/srt-${utID}.txt`
      if (fs.existsSync(srtPath) === false) {
        return false
      }
      let srt = fs.readFileSync(srtPath, 'utf-8')

      if (Array.isArray(timeMarkList) === false) {
        timeMarkList = TimeMarkAnalysis(timeMarkList)
      }

      captionParagraph = CaptionFormat(srt, timeMarkList)
      // console.log(captionParagraph)

      fs.unlinkSync(srtPath)

      return captionParagraph
    }
    catch (e) {
      return false
    }
  }, expire)
    
}