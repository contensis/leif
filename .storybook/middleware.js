const { REVERSE_PROXIES } = require('../webpack/bundle-info');
const proxy = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
  Object.keys(REVERSE_PROXIES).map(path => {
    router.use(
      path,
      proxy({
        ...REVERSE_PROXIES[path],
      })
    );
  });
};
