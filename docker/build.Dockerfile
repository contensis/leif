# Single self-contained multi-stage build: `docker build -f docker/build.Dockerfile .`
# The legacy builder_image push/pull cache dance is gone — the GitHub workflow
# builds this whole file in one job now.
ARG app_base=node:26-alpine
ARG builder_base=node:26
FROM ${builder_base} AS prepare

# # The following prevents errors when cwebp is installing.
RUN apt-get -qq update && apt-get -qq -y install libglu1
# RUN apk add --no-cache autoconf automake file g++ libpng-dev libtool make nasm

WORKDIR /usr/src/app
# Node images no longer ship yarn, and since node 25 corepack is not bundled
# either — install classic yarn (yarn.lock is v1) via npm directly.
RUN npm install -g yarn@1.22.22
COPY package.json yarn.lock ./
RUN yarn global add mocha --silent --non-interactive --cache-folder ./cache
RUN yarn install --silent --non-interactive --prefer-offline --cache-folder ./cache

# Everything up to `prepare` is the cacheable dependency layer; the build
# stage adds the source and compiles it.
FROM prepare AS build
COPY ./ ./
RUN yarn run build
# RUN mocha --timeout=5000 dist/server/start.js -tests

FROM ${app_base} AS final
COPY manifest.json /
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN npm install -g yarn@1.22.22
RUN yarn config set cache-folder .cache && yarn install --production --link-duplicates --silent --non-interactive --prefer-offline && yarn cache clean
COPY .env* ./
COPY webpack/define-config.js ./webpack/
COPY --from=build /usr/src/app/dist dist

# Start the server with launcher.js using docker environment variables. This is the preferred startup method when created via Blocks.
# If launcher.js cannot find an existing start script, it will generate one to start the server based on the supplied args
ENTRYPOINT node --max-http-header-size=800000 dist/server/launcher.js --alias=$alias --projectId=$projectId --accessToken=$accessToken

EXPOSE 3001
