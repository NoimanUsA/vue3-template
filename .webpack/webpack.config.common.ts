import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import * as path from 'path';

// modules
import vueRules from './modules/vue';
import tsRules from './modules/typescript';
import jsRules from './modules/javascript';
import assetsRules from './modules/assets';
import { MergedConfigs as Configuration } from './types';


export default {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.vue', '.tsx', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  optimization: {
    chunkIds: 'named'
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
} as Configuration;