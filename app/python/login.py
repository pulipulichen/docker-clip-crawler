from hugchat.login import Login

# login
sign = Login("jopik34454@tiuas.com", "password")
cookies = sign.login()
sign.saveCookiesToDir(cookie_path_dir)

# load cookies from usercookies/<email>.json
sign = login(email, None)
cookies = sign.loadCookiesFromDir(cookie_path_dir) # This will detect if the JSON file exists, return cookies if it does and raise an Exception if it's not.