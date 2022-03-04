ARG builder_image
FROM ${builder_image} as basebuilder
FROM mhart/alpine-node:14

COPY manifest.json /
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
COPY .env* ./
COPY webpack/define-config.js ./webpack/
RUN yarn install --production --link-duplicates --loglevel error && yarn cache clean
# COPY --from=basebuilder /usr/src/app/patches /usr/src/app/patches
# RUN yarn run postinstall
COPY --from=basebuilder /usr/src/app/dist /usr/src/app/dist

# ENV alias=zenhub
# ENV projectId=leif

# Start the server with launcher.js using docker environment variables. This is the preferred startup method when created via Blocks.
# If launcher.js cannot find an existing start script, it will generate one to start the server based on the supplied args
ENTRYPOINT node --max-http-header-size=800000 dist/server/launcher.js --alias=$alias --projectId=$projectId --accessToken=$accessToken

# Standard classic start script, will start the server with the environment started last 
# (or using configuration from the default .env if never started)
#ENTRYPOINT node dist/server/start.js

# Start the server using just a cms alias targeting the specific start script
#ENTRYPOINT node dist/server/start.$alias.js

# Start the server using a project id and cms alias targeting the specific start script
#ENTRYPOINT node --max-http-header-size=800000 dist/server/start.$projectId.$alias.js

# Start the server configured for a given cms alias where the projectId is 'website' using env variable
#ENTRYPOINT npm --start=$alias run-script server

# Start the server configured for a given cms alias targeted to a specific project using env variable
#ENTRYPOINT npm --start=$projectId.$alias run-script server

EXPOSE 3001
