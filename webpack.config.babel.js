/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import webpack from 'webpack';

const isV4 = !!process.env.V4;

module.exports = {
  entry: `${__dirname}/src/${isV4 ? 'v4/' : 'v5/'}index`,
  output: {
    path: `${__dirname}/bundles`,
    filename: `redone-observable${isV4 ? '.v4' : ''}.js`,
    library: 'RedoneObservable',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', include: `${__dirname}/src` },
    ],
  },
  externals: {
    'redone': 'Redone',
    'rxjs/Rx': 'Rx',
    'rx': 'Rx',
  },
};
