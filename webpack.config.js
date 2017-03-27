/**
 * Script description.
 * @author Platform Team
 * @date 2017-03-23
 */

// Imports

const fs = require('fs');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

// Extractors

const extractStyles = new ExtractTextPlugin('[name].css');
const extractSvg = new ExtractTextPlugin('[name].svg');

// Paths

const src = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'public');

// Methods

function createNewViewPlugin(viewFile) {
  const basename = path.basename(viewFile, '.ejs');

  return new HtmlPlugin({
    filename: `${basename}.html`,
    template: `./views/${viewFile}`,
  });
}

function getViewPlugins() {
  return fs
    .readdirSync(path.resolve(src, 'views'))
    .map(createNewViewPlugin);
}

// Plugins

const plugins = []
  .concat(getViewPlugins())
  .concat([
    extractStyles,
    extractSvg,
  ])

;

// Definition

module.exports = {
  context: src,
  entry: {
    app: './app.js',
  },
  output: {
    path: outputPath,
    filename: '[name].js',
    publicPath: './',
    sourceMapFilename: '[name].js.map',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.json$/,
        loaders: ['json-loader'],
      },
      {
        test: /\.png$/,
        loaders: ['file-loader?name=[name].[ext]&outputPath=./images/&publicPath=./images/' ]
      },
      {
        test: /\.(eot|svg|ttf|otf|woff2|woff)$/,
        loaders: ['url-loader?limit=10000'],
      },
      {
        test: /\.css$/,
        loaders: extractStyles.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.s[ac]ss$/,
        loaders: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules'],
              },
            },
          ],
        }),
      },
      {
        test: /\.html$/,
        loaders: ['html-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.sass', '.css'],
    mainFiles: ['index'],
    modules: ['node_modules'],
  },
  plugins,
};
