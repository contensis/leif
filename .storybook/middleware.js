const proxy = require('http-proxy-middleware');

const DEFINE_CONFIG = require('../webpack/define-config');
const { SERVERS } = DEFINE_CONFIG.development;

const REVERSE_PROXY_PATHS = [
  '/image-library/*',
  '/video-library/*',
  '/asset-library/*',
];

module.exports = function expressMiddleware(router) {
  REVERSE_PROXY_PATHS.forEach(path => {
    router.use(
      path,
      proxy({
        target: SERVERS.iis || SERVERS.web,
        changeOrigin: true,
      })
    );
  });
};
