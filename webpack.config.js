const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (env) => {
  const extractCommonStyle = new ExtractTextPlugin('common.css', { allChunks: true });
  const extractComponentsStyle = new ExtractTextPlugin('components.css', { allChunks: true });
  let plagins = [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    extractCommonStyle,
    extractComponentsStyle,
  ];

  if (env.NODE_ENV === 'production') {
    plagins = [...plagins, new UglifyJSPlugin()];
  }

  return {
    entry: ['./src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, './src/css/common.css'),
          use: extractCommonStyle.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    autoprefixer({
                      browsers: ['last 2 version'],
                    }),
                  ],
                  sourceMap: true,
                },
              },
            ],
          }),
        },
        {
          test: /\.css$/,
          exclude: path.resolve(__dirname, './src/css/common.css'),
          use: extractComponentsStyle.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    autoprefixer({
                      browsers: ['last 2 version'],
                    }),
                  ],
                  sourceMap: true,
                },
              },
            ],
          }),
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: plagins,
  };
};
