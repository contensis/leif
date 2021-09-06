# Zengenti Starter Project :boom:

## Getting started

- Define your CMS environment in the `.env` file
- Develop your features inside the `/src/app/features/` folder, create a new folder for each feature
- Tell the application to load any feature `reducers` and `sagas` when it starts
- Create pages in the `/src/app/pages/` folder to set your page layouts and load your components
- Define routes in your application, there are 'Static routes' and 'Content type mappings' which tell the application what pages are to be loaded and when certain routes / content type entries are loaded
- Import components using the import aliases e.g. `~/pages/MyPage` avoid importing components like `/src/app/pages/MyPage` or `../../../pages/MyPage`

### Key scripts :vertical_traffic_light: :page_with_curl:

- `npm install` - install dependencies so we can use the application
- `npm start` - start the application in development mode
- `npm run storybook` - start storybook in development mode
- `npm run build` - build the application into production-ready client and server-side bundles
- `npm run server` - start the application server same as we would as if it were deployed in production
- `npm run build:server` - build the application and start the server-side application from source code (allowing us to connect a debugger and stop on code that is executed server-side)

## Releasing to live

When you are ready to release your code it is best to change your version number and tag the release with the version number so it is easy to keep track of each release rather than date generated tags. The suggested workflow for releasing is as follows:

- Run `npm version major || minor || patch` see: [https://docs.npmjs.com/cli/version](https://docs.npmjs.com/cli/version)
- This will generate a new empty commit, push this and wait for the build to pass.
- Once the build has passed in gitlab, run `git tag release-{version-no}`
- Then run `git push origin release-{version-no}`

## Domains

### {Project Name}

#### [live.{alias}.contensis.cloud](http://live.{alias}.contensis.cloud)

| CMS        | Project | Data      | Branch   | Version     |
| ---------- | ------- | --------- | -------- | ----------- |
| Production | website | Published | `master` | `release-*` |

#### [dev.live.{alias}.contensis.cloud](http://dev.live.{alias}.contensis.cloud)

| CMS        | Project | Data      | Branch    | Version  |
| ---------- | ------- | --------- | --------- | -------- |
| Production | website | Published | `develop` | `latest` |

#### [preview.{alias}.contensis.cloud](http://preview.{alias}.contensis.cloud)

| CMS        | Project | Data  | Branch   | Version     |
| ---------- | ------- | ----- | -------- | ----------- |
| Production | website | Draft | `master` | `release-*` |

#### [dev.preview.{alias}.contensis.cloud](http://dev.preview.{alias}.contensis.cloud)

| CMS        | Project | Data  | Branch    | Version  |
| ---------- | ------- | ----- | --------- | -------- |
| Production | website | Draft | `develop` | `latest` |

### Storybook

#### [storybook.latest.{alias}.contensis.cloud](http://storybook.latest.{alias}.contensis.cloud)

| CMS | Project | Data | Branch   | Version  |
| --- | ------- | ---- | -------- | -------- |
| N/A | N/A     | N/A  | `master` | `latest` |

### {Project Name} Dev

#### [live.{alias}-dev.contensis.cloud](http://live.{alias}-dev.contensis.cloud)

| CMS        | Project | Data      | Branch   | Version     |
| ---------- | ------- | --------- | -------- | ----------- |
| Production | website | Published | `master` | `release-*` |

#### [dev.live.{alias}-dev.contensis.cloud](http://dev.live.{alias}-dev.contensis.cloud)

| CMS        | Project | Data      | Branch    | Version  |
| ---------- | ------- | --------- | --------- | -------- |
| Production | website | Published | `develop` | `latest` |

#### [preview.{alias}-dev.contensis.cloud](http://preview.{alias}-dev.contensis.cloud)

| CMS        | Project | Data  | Branch   | Version     |
| ---------- | ------- | ----- | -------- | ----------- |
| Production | website | Draft | `master` | `release-*` |

#### [dev.preview.{alias}-dev.contensis.cloud](http://dev.preview.{alias}-dev.contensis.cloud)

| CMS        | Project | Data  | Branch    | Version  |
| ---------- | ------- | ----- | --------- | -------- |
| Production | website | Draft | `develop` | `latest` |
