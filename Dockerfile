FROM pudding/github-action-app:puppeteer-python-14-action-rss-20230829-1641

RUN npm link html-to-docx@1.8.0
RUN npm link cache-manager-sqlite@0.2.0