ARG builder_image
FROM node:18 AS prepare
# The following prevents errors when cwebp is installing.
RUN apt-get update
RUN apt-get install libglu1 -y
WORKDIR /usr/src/app
# Seperating the copy of the package.json ensures the dockerbuild will cache the node_modules if the package.json has not changed
# When we auto increment the version, we should remove that as part of the copy to ensure the cache is maintained. i.e strip the version number before copying the file.
COPY package.json .
COPY yarn.lock .
RUN yarn

FROM ${builder_image} AS build
COPY .storybook /usr/src/app/.storybook
COPY config /usr/src/app/config
COPY public /usr/src/app/public
COPY src /usr/src/app/src
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
# COPY jsconfig.json .

RUN yarn run storybook-static

FROM pierrezemb/gostatic
COPY --from=build  /usr/src/app/.out /usr/src/app/dist
ENTRYPOINT ["/goStatic", "--path", "/usr/src/app/dist", "--port", "8080"]