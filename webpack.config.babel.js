import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  entry: {
    bundle: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', 'index.js', '.jsx', 'index.jsx'],
    modules: ['node_modules'],
    alias: {
      foo: path.resolve(__dirname, 'src/test1/foo'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ],

  devServer: {
    contentBase: './dist',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
  },

};


export default config;
