const _ = require('lodash');
const path = require('path');
const baseConfig = require('./webpack.base.config');

const outputPath = path.join(__dirname, 'dist');

baseConfig.module.rules.push(
  {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[local]_[hash:base64:5]',
            localIdentContext: path.resolve(__dirname, "src"),
          },
        },
      },
      'sass-loader',
    ],
  },
);

module.exports = _.extend({
  // devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    port: 8030,
    historyApiFallback: true,
  },
  entry: ['./src/index.tsx'],
  output: {
    path: outputPath,
    filename: 'static/js/[name].js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
  },
}, baseConfig);