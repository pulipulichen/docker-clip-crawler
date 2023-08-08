FROM pudding/github-action-app:puppeteer-python-14-20230804-0332

RUN pip install youtube_transcript_api

WORKDIR /

RUN npm link chatgpt@5.2.5
RUN npm link chat-gpt-authenticator@0.5.0

# RUN rm -rf /app/node_modules

CMD ["node", "--experimental-modules", "/app/index.js"]

RUN apt-get install -y nano