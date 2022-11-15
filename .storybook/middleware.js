const { REVERSE_PROXIES } = require('../webpack/bundle-info');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
  Object.keys(REVERSE_PROXIES).map(path => {
    router.use(
      path,
      createProxyMiddleware({
        ...REVERSE_PROXIES[path],
      })
    );
  });
};
