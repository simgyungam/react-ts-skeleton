const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
    {
      test: /\.(js|jsx|ts|js)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        query: {
          plugins: [
            '@babel/transform-react-jsx',
            [
              'react-css-modules',
              {
                context: path.resolve(__dirname, 'src'),
                generateScopedName: '[local]_[hash:base64:5]',
                filetypes: {
                  '.scss': { syntax: 'postcss-scss' },
                },
              },
            ],
          ],
        },
      },
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      exclude: /node_modules/,
      use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
    }
  ]
},
plugins: [
  new HtmlWebpackPlugin({
    template: './index.html',
  }),
    // Copy static files
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../static'),
          to: 'static',
        }
      ]
    }),
 ]
};
