#!/bin/bash

rclone mount clips:/ /home/pudding/docker-clip-crawler/output --copy-links --no-gzip-encoding --no-check-certificate --allow-other --allow-non-empty --umask 000