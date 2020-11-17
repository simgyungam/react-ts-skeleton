const _ = require('lodash');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputPath = path.join(__dirname, '../dist');
const baseConfig = require('./webpack.base.config');

baseConfig.plugins.push(
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'static/css/[name].css',
    chunkFilename: '[id].css',
  }),
);

baseConfig.module.rules.push(
  {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: outputPath
        }
      },
      'css-loader',
    ],
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: outputPath
        }
      },
      {
        loader: 'css-loader',
      },
      'sass-loader',
    ],
  },
);

module.exports = _.extend({
  mode: 'production',
  entry: {
    app: path.join(__dirname, '../src/index.tsx'),
  },
  output: {
    path: outputPath,
    filename: 'static/js/[name]-[chunkhash].js',
    chunkFilename: 'static/js/[name]-[chunkhash].js',
    publicPath: '/',
  },
}, baseConfig);