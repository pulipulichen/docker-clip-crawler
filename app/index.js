// import ChatGPTUnofficialProxyAPI from './ChatGPT/ChatGPTUnofficialProxyAPI.mjs'
// const ChatGPTUnofficialProxyAPI = require('./ChatGPT/ChatGPTUnofficialProxyAPI.mjs')
const GetToken = require('./ChatGPT/GetToken.js')

let main = async () => {
  return await GetToken()
}

main()