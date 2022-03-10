import { MergedConfigs as Configuration, Args, Env } from './.webpack/types'
import { merge } from 'webpack-merge';
import development from './.webpack/webpack.config.development';
import common from './.webpack/webpack.config.common';
import production from './.webpack/webpack.config.production';


export default (env: Env, arg: Args) => {
  console.log(env, arg);
  const isProduction = env.WEBPACK_BUILD ? true : false;

  if (isProduction) {
    return merge<Configuration>(common, production);
  } else {
    return merge<Configuration>(common, development);
  }
}  