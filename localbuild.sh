#!/bin/bash
docker build --force-rm -t zen-local-app -f docker/nodebuilder.DockerFile .
docker build -t zen-local-app-server --build-arg builder_image=zen-local-app -f docker/ci-build.DockerFile .
docker run -e alias=zenhub -e projectId=leif -it -p 3001:3001 zen-local-app-server
