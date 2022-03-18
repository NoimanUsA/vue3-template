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
import { DefinePlugin } from 'webpack';


export default {
  entry: './src/index.ts',
  output: {
    clean: true,
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[id].[contenthash].js',
    asyncChunks: true,
    hashDigestLength: 7,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.vue', '.tsx', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  performance: {
    hints: 'error',
    maxAssetSize: 10_572_864,
    maxEntrypointSize: 10_572_864
  },
  optimization: {
    chunkIds: 'named',
    splitChunks: {
      maxSize: 250 * 1024,
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
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      inject: 'body'
    }),
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      files: ['**/*.{vue,css,scss,sass}'],
    }),
  ],
  devtool: 'source-map'
} as Configuration;
