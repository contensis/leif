ARG builder_image
FROM ${builder_image} AS prepare

# FROM node:18 as builder
# The following prevents errors when cwebp is installing.
RUN apt-get update
RUN apt-get install libglu1 -y
WORKDIR /usr/src/app
RUN npm install -g mocha
COPY package.json .
COPY yarn.lock .
RUN yarn install


FROM ${builder_image} AS build
# RUN mkdir -p /usr/src/app/src/dist/static
COPY .env* ./
COPY .eslintignore .
COPY .eslintrc.js .
COPY .nvmrc .
COPY .prettierignore .
COPY .prettierrc .
# COPY .stylelintrc .
COPY babel.config.js .
COPY tsconfig.json .
# COPY jsconfig.json .
COPY config config
COPY public public
COPY webpack webpack
COPY src src
RUN yarn run build:ci
RUN mocha --timeout=5000 dist/server/start.js -tests
COPY version.json ./static/version.json
RUN cat ./static/version.json

FROM node:18-alpine AS final

COPY manifest.json /
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install --production --link-duplicates --loglevel error && yarn cache clean
COPY .env* ./
COPY webpack/define-config.js ./webpack/
COPY --from=build /usr/src/app/dist dist

# Start the server with launcher.js using docker environment variables. This is the preferred startup method when created via Blocks.
# If launcher.js cannot find an existing start script, it will generate one to start the server based on the supplied args
ENTRYPOINT node --max-http-header-size=800000 dist/server/launcher.js --alias=$alias --projectId=$projectId --accessToken=$accessToken

EXPOSE 3001
