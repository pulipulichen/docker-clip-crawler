#!/bin/bash

# Install Docker
sudo apt-get update
sudo apt-get install -y docker.io

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installations
docker --version
node --version

sudo apt-get install davfs2 -y
echo "use_locks 0" | sudo tee -a /etc/davfs2/davfs2.conf
# echo "${WEBDAV_URL} ${WEBDAV_USER} ${WEBDAV_PW}" | sudo tee /etc/davfs2/secrets
# sudo chmod 600 /etc/davfs2/secrets

# sudo mkdir /output

sudo docker pull capsulecode/singlefile
sudo docker tag capsulecode/singlefile singlefile

cd $(dirname $0)
sudo apt-get install -y npm
npm i

mkdir -p /output

# <WebDAV_URL> /output davfs rw,user,noauto 0 0
