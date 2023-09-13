ARG app_base=node:18-alpine
ARG builder_base=node:18
# registry url supplied with `docker build --build-args builder_image=$BUILDER_IMAGE` 
ARG builder_image
FROM ${builder_base} AS prepare

# # The following prevents errors when cwebp is installing.
RUN apt-get -qq update && apt-get -qq -y install libglu1
# RUN apk add --no-cache autoconf automake file g++ libpng-dev libtool make nasm

WORKDIR /usr/src/app
RUN yarn global add mocha --silent --non-interactive --cache-folder ./cache
COPY package.json .
COPY yarn.lock .
RUN yarn install --silent --non-interactive --prefer-offline --cache-folder ./cache

# The builder image will be built targeting the "prepare" alias
# so we can prepare a cacheable build environment for the final build
# everything up to here will be tagged and pushed with the builder image

# The next stage will be run in the final build and will not be pushed 
# with the builder or app images
FROM ${builder_image} AS build
COPY ./ ./
RUN yarn run build
# RUN mocha --timeout=5000 dist/server/start.js -tests
RUN cp version.json ./dist/static/version.json && cat ./dist/static/version.json

FROM ${app_base} AS final
COPY manifest.json /
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn config set cache-folder .cache && yarn install --production --link-duplicates --silent --non-interactive --prefer-offline && yarn cache clean
COPY .env* ./
COPY webpack/define-config.js ./webpack/
COPY --from=build /usr/src/app/dist dist

# Start the server with launcher.js using docker environment variables. This is the preferred startup method when created via Blocks.
# If launcher.js cannot find an existing start script, it will generate one to start the server based on the supplied args
ENTRYPOINT node --max-http-header-size=800000 dist/server/launcher.js --alias=$alias --projectId=$projectId --accessToken=$accessToken

EXPOSE 3001
