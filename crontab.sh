#!/bin/bash

echo `$(dirname "$1")`
echo `$(dirname "$0")`
cd $(dirname "$1")
cd ~/docker-clip-crawler/

# git pull
npm run start

file_path="/output/input.txt"

# Check if the file exists
if [ -f "$file_path" ]; then
  # Remove the file
  rm "$file_path"
  echo "Removed $file_path"
  
  # Run the crontab.sh script
  # ./crontab.sh
  
else
  echo "$file_path does not exist. Exiting."
  exit 1
fi
