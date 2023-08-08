const { ChatGPTAuthTokenService } = require("chat-gpt-authenticator");

const GetToken = async function () {
  const chatGptAuthTokenService = new ChatGPTAuthTokenService(
    "jopik34454@tiuas.com", 
    "password"
  );
  // const authenticator = new Authenticator();
  // return await authenticator.login("jopik34454@tiuas.com", "password")

  const token = await chatGptAuthTokenService.getToken();
  console.log(token);

  // token = await chatGPTAuthTokenService.refreshToken();
  // console.log(token);
  return token
}

module.exports = GetToken;