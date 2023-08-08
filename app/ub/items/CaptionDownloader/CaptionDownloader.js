const NodeCacheSqlite = require('../../../lib/NodeCacheSqlite.js')
const ShellSpawnQueue = require('../../../lib/ShellSpawnQueue.js')
const CaptionFormat = require('./CaptionFormat.js')
const UBVideoIdParser = require('./../UBVideoIdParser.js')
const fs = require('fs')

const TimeMarkAnalysis = require('./TimeMarkAnalysis.js')

// https://youtu.be/85AqJsmxDZs
module.exports = async function (utID = 'https://youtu.be/JxbFotMgqik', timeMarkList = []) {
  let expire = 365 * 24 * 60 * 60 * 1000
  expire = 10  // for test

  return await NodeCacheSqlite.get('CaptionDownloader', utID, async () => {
    let url
    try {
      if (utID.startsWith('http')) {
        url = utID
        utID = UBVideoIdParser(utID)
      }
      // console.log({utID})
      if (!utID) {
        new Error('Invalid UT ID')
      }

      await ShellSpawnQueue([`python3`, `/app/python/caption.py`, `"https://www.youtube.com/watch?v=${utID}"`])
      let srtPath = `/app/tmp/srt-${utID}.txt`
      if (fs.existsSync(srtPath) === false) {
        // if (!url) {
        //   url = `https://www.youtube.com/watch?v=${utID}`
        // }
        // await ShellSpawnQueue([`python3`, `/app/python/youtube_audio_to_text.py`, `"${url}"`])

        // if (fs.existsSync(srtPath) === false) {
        //   return false
        // }

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