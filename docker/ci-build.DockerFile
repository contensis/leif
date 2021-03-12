ARG builder_image
FROM ${builder_image} as basebuilder
FROM mhart/alpine-node:12
RUN apk add --no-cache git

WORKDIR /usr/src/app
##COPY package.json .
#COPY yarn.lock .
COPY --from=basebuilder /usr/src/app/patches /usr/src/app/patches
# COPY --from=basebuilder /usr/src/app/node_modules/zengenti-isomorphic-base /usr/src/app/node_modules/zengenti-isomorphic-base
# COPY --from=basebuilder /usr/src/app/node_modules/zengenti-isomorphic-base /usr/src/app/node_modules/zengenti-isomorphic-base
#RUN yarn --production --loglevel error
COPY --from=basebuilder /usr/src/app/dist /usr/src/app/dist

# Standard classic start script, will start the server with the environment started last 
# (or using configuration from the default .env if never started)
#ENTRYPOINT node dist/server/start.js

# Start the server using just a cms alias targeting the specific start script
#ENTRYPOINT node dist/server/start.$alias.js

# Start the server using a project id and cms alias targeting the specific start script
ENTRYPOINT node --max-http-header-size=800000 dist/server/start.$projectId.$alias.js

# Start the server configured for a given cms alias where the projectId is 'website' using env variable
#ENTRYPOINT npm --start=$alias run-script server

# Start the server configured for a given cms alias targeted to a specific project using env variable
#ENTRYPOINT npm --start=$projectId.$alias run-script server

EXPOSE 3001
