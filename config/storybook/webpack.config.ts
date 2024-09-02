import { type RuleSetRule } from 'webpack';
import webpack from 'webpack';
import path from 'path';
import { type BuildPaths } from '../build/types/config';
import { buildBabelLoader } from '../build/loaders/buildBabelLoader';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

type BuildPathsStorybook = Pick<BuildPaths, 'src'>;

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPathsStorybook = {
    src: path.resolve(__dirname, '..', '..', 'src')
  };

  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    entities: path.resolve(paths.src, 'entities')
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push(buildCssLoader(true));
  config.module.rules.push(buildBabelLoader());
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (rule.test instanceof RegExp && rule.test.test('.svg')) {
      return { ...rule, exclude: /\.svg$/i };
    } else if (typeof rule.test === 'string' && rule.test.includes('svg')) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  });

  config.plugins = [
    ...(config.plugins || []),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true)
    })
  ];

  return config;
};
