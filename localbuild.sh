#!/bin/bash
docker build --force-rm -t leif-local-app -f docker/nodebuilder.DockerFile .
docker build -t leif-local-app-server --build-arg builder_image=leif-local-app -f docker/ci-build.DockerFile .
docker run -e alias=zenhub -e projectId=leif -it -p 3001:3001 leif-local-app-server
