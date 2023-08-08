import { ChatGPTUnofficialProxyAPI } from 'chatgpt'
// import { GetToken } from './GetToken.mjs'

async function example() {
  const api = new ChatGPTUnofficialProxyAPI({
    // accessToken: await GetToken()
  })

  const res = await api.sendMessage('Hello World!')
  console.log(res.text)
}

// module.exports = example;
export default example