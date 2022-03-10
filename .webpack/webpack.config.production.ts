import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import stylesRules from './modules/styles';
import { MergedConfigs as Configuration } from './types';


export default {
  mode: 'production',
  module: {
    rules: [
      stylesRules.prod,
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].[fullhash].css'
    }),
  ],
} as Configuration;