import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import * as path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

// modules
import vueRules from './modules/vue';
import tsRules from './modules/typescript';
import jsRules from './modules/javascript';
import assetsRules from './modules/assets';
import { MergedConfigs as Configuration } from './types';


export default {
  entry: './src/index.ts',
  output: {
    clean: true,
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[id].[contenthash][ext]',
    asyncChunks: true,
    hashDigestLength: 7,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.vue', '.tsx', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  optimization: {
    chunkIds: 'named',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
        terserOptions: {
          compress: true,
        },
        parallel: true,
      })
    ]
  },
  module: {
    rules: [
      vueRules,
      tsRules,
      jsRules,
      ...assetsRules,
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body'
    }),
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      files: ['**/*.{vue,css,scss,sass}'],
    }),
  ],
  devtool: 'source-map'
} as Configuration;