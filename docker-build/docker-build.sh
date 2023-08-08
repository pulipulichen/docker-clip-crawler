#!/bin/bash

APP_NAME=action-rss-ut-app
TAG_NAME=pudding/github-action-app:puppeteer-python-14-action-rss-ut-20230808-2245

docker tag "$APP_NAME" "$TAG_NAME"
docker push "$TAG_NAME"