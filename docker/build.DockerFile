FROM node:12 as builder
# The following prevents errors when cwebp is installing.
RUN apt-get update
RUN apt-get install libglu1 -y
WORKDIR /usr/src/app
RUN npm install -g mocha
COPY package.json .
COPY yarn.lock .
COPY patches /usr/src/app/patches
RUN yarn install --link-duplicates
#RUN npm install --loglevel error
RUN yarn run postinstall
COPY config /usr/src/app/config
COPY public /usr/src/app/public

COPY src /usr/src/app/src
RUN mkdir -p /usr/src/app/src/dist/static
COPY webpack /usr/src/app/webpack
COPY babel.config.js .
COPY .env* ./
COPY .eslintignore .
COPY .eslintrc.js .
COPY .nvmrc .
COPY .prettierignore .
COPY .prettierrc .
COPY .stylelintrc .
COPY tsconfig.json .
COPY jsconfig.json .
RUN yarn run build
RUN mocha --timeout=5000 dist/server/start.js -tests
COPY version.json /usr/src/app/dist/static/version.json
RUN cat /usr/src/app/dist/static/version.json

FROM mhart/alpine-node:12

COPY manifest.json /
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
COPY --from=builder /usr/src/app/patches /usr/src/app/patches
# COPY --from=builder /usr/src/app/node_modules/zengenti-isomorphic-base /usr/src/app/node_modules/zengenti-isomorphic-base
RUN apk add git
COPY --from=builder /usr/src/app/node_modules/zengenti-search-package /usr/src/app/node_modules/zengenti-search-package
RUN yarn install --production --check-files --link-duplicates --loglevel error && yarn cache clean
RUN yarn run postinstall
COPY --from=builder /usr/src/app/dist /usr/src/app/dist
ENV alias=zenhub
ENV projectId=leif

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
