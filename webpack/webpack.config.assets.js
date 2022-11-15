const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

// Essentially a dummy webpack config, we just want
// the asset plugins to run independent of any other type
// of bundling we're doing to reduce overall build time
// on multi-core systems when run with parallel-webpack
const PROCESS_PUBLIC_ASSETS_CONFIG = {
  name: 'public-assets-config',
  mode: 'production',
  stats: {
    preset: 'errors-only',
  },
  entry: './public',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    // Do these plugins only once per build so we'll do it here instead of base
    new CopyWebpackPlugin({
      patterns: [
        {
          globOptions: {
            ignore: ['index.html', 'index.ejs'],
          },
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, `../dist/static`),
        },
      ],
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      optipng: {
        optimizationLevel: 9,
      },
    }),
  ],
};

module.exports = PROCESS_PUBLIC_ASSETS_CONFIG;
