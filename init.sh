#!/bin/bash

# Install Docker
sudo apt-get update
# sudo apt-get install -y docker.io
sudo apt-get install -y docker-compose

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installations
docker --version
node --version

# sudo apt-get install davfs2 -y
# echo "use_locks 0" | sudo tee -a /etc/davfs2/davfs2.conf
# echo "${WEBDAV_URL} ${WEBDAV_USER} ${WEBDAV_PW}" | sudo tee /etc/davfs2/secrets
# sudo chmod 600 /etc/davfs2/secrets

# sudo mkdir /output

# sudo docker pull capsulecode/singlefile
# sudo docker tag capsulecode/singlefile singlefile

sudo npm install -g "gildas-lormeau/SingleFile#master"
sudo npm install -g single-file-cli

cd $(dirname $0)
npm i

mkdir -p /output || true

# sudo nano /etc/fstab
# <WebDAV_URL> /output davfs rw,user,auto 0 0
