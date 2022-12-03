ARG builder_image=node:18
FROM ${builder_image} AS prepare

# The following prevents errors when cwebp is installing.
RUN apt-get -qq update && apt-get -qq -y install libglu1
WORKDIR /usr/src/app
# Seperating the copy of the package.json ensures the dockerbuild will cache the node_modules if the package.json has not changed
# When we auto increment the version, we should remove that as part of the copy to ensure the cache is maintained. i.e strip the version number before copying the file.
COPY package.json .
COPY yarn.lock .
RUN yarn install --silent --non-interactive --prefer-offline --cache-folder ./cache

FROM ${builder_image} AS build
COPY babel.config.js .
COPY .env* ./
COPY .eslintignore .
COPY .eslintrc.js .
COPY .prettierignore .
COPY .prettierrc .
COPY tsconfig.json .
COPY .storybook /usr/src/app/.storybook
COPY config /usr/src/app/config
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY webpack /usr/src/app/webpack

RUN yarn run storybook-static --quiet

FROM pierrezemb/gostatic
COPY --from=build  /usr/src/app/.out /usr/src/app/dist
ENTRYPOINT ["/goStatic", "--path", "/usr/src/app/dist", "--port", "8080"]
