import ZengentiAppServer from '@zengenti/contensis-react-base';
import ReactApp from '~/App';

import routes from '~/core/routes';
import withReducers from '~/core/redux/reducers';
import withSagas from '~/core/redux/sagas';
import withEvents from '~/core/redux/withEvents';

import ServerFeatures from './features/configure';

ZengentiAppServer.start(
  ReactApp,
  {
    routes,
    withReducers,
    withSagas,
    withEvents,
    // The HTML templates we will render the app into
    differentialBundles: true,
    disableSsrRedux: DISABLE_SSR_REDUX /* global DISABLE_SSR_REDUX */,
    dynamicPaths: [],
    reverseProxyPaths: Object.values(
      REVERSE_PROXY_PATHS /* global REVERSE_PROXY_PATHS */
    ),
    // Some information about the project and the build to pass to the start config
    packagejson: require('-/package.json'),
    startupScriptFilename: 'startup.js',
    staticFolderPath: STATIC_PATH /* global STATIC_PATH */,
    stats: 'dist/target/react-loadable.json',
    templates: {
      html: 'dist/index.html',
      static: 'dist/index_static.html',
      fragment: 'dist/index_fragment.html',
    },
    versionData: 'dist/static/version.json',
  },
  // Configure any server-side features such as sitemap or REST api's
  ServerFeatures
);

const app = ZengentiAppServer.app;

app.emit('ready');

export { app };
