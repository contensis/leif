ARG app_base=pierrezemb/gostatic
# registry url supplied with `docker build --build-args builder_image=$BUILDER_IMAGE` 
ARG builder_image

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

FROM ${app_base}
COPY manifest.storybook.json /manifest.json 
COPY --from=build  /usr/src/app/.out /usr/src/app/dist
COPY --from=build  /usr/src/app/.out /usr/src/app/dist/storybook
ENTRYPOINT ["/goStatic", "--path", "/usr/src/app/dist", "--port", "8080"]
