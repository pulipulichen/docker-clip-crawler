#!/bin/bash

#sudo mount -t davfs -o uid=pudding -o gid=pudding http://10.2.2:5000/clips /output
# sudo mount.davfs -o uid=pudding -o gid=pudding http://10.0.2.2:5000/clips /output
# sudo mount.davfs http://10.0.7.1:5000/clips /output

mkdir -p /output
sudo mount.davfs -o uid=pudding -o gid=pudding http://qnap.pulipuli.info:5000/clips /output