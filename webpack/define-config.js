const packagejson = require('../package.json');
const { urls } = require('@zengenti/contensis-react-base/util');

require('custom-env').env(process.env.env || process.env.npm_config_env);

const {
  PUBLIC_URL,
  ALIAS,
  INTERNAL_VIP,
  ACCESS_TOKEN,
  PROJECT,
  CONTENSIS_VERSION,
  STATIC_PATH = 'static',
} = process.env;

const PROJECTS = env => [
  {
    id: env.PROJECT,
    publicUri: env.PUBLIC_URL,
  },
  // You only need to include extra projects in this array
  // if you wish to switch between projects at runtime,
  // or fetch data from another project
  // {
  //   id: 'mock',
  //   publicUri: 'mock.ludlow.ac.uk',
  // },
  // ˅˅˅˅˅˅˅˅
  // ˄˄˄˄˄˄˄˄
];

// any paths to proxy back to the classic IIS servers?
const REVERSE_PROXY_PATHS = Object([
  '/image-library/*',
  '/video-library/*',
  '/asset-library/*',
]);

// --------------------
// End of configuration
// --------------------

const url = urls(ALIAS, PROJECT);

const SERVERS = {
  alias: ALIAS,
  api: url.api,
  internalVip: INTERNAL_VIP,
  cms: url.cms,
  web: url.liveWeb,
  iis: url.iisWeb,
  previewIis: url.iisPreviewWeb,
};

const DELIVERY_API_CONFIG = {
  rootUrl: url.cms,
  accessToken: ACCESS_TOKEN,
  projectId: PROJECTS(process.env)[0].id,
  livePublishingRootUrl: url.previewWeb,
};

const development = {
  __isBrowser__: true,
  DELIVERY_API_CONFIG,
  DISABLE_SSR_REDUX: false,
  PROJECTS: PROJECTS(process.env),
  PROXY_DELIVERY_API: true,
  PUBLIC_URI: PUBLIC_URL,
  REVERSE_PROXY_PATHS,
  SERVERS,
  STATIC_PATH,
  VERSION: packagejson.version,
  CONTENSIS_VERSION,
  WSFED_LOGIN: false,
};

const production = {
  __isBrowser__: false,
  DISABLE_SSR_REDUX: false,
  PROXY_DELIVERY_API: true,
  REVERSE_PROXY_PATHS,
  STATIC_PATH,
  VERSION: packagejson.version,
  WSFED_LOGIN: false,
};

module.exports = {
  build: process.env.NODE_ENV == 'production' ? production : development,
  development,
  production,
  projects: PROJECTS,
};
