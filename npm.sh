#!/bin/bash

docker run --rm -it \
	-u 1000 \
	-v $(pwd):/mnt/app \
	-w /mnt/app \
	node:alpine /bin/sh
