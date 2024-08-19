import webpack, { RuleSetRule } from 'webpack';
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildBabelLoader } from '../build/loaders/buildBabelLoader';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

type BuildPathsStorybook = Pick<BuildPaths, 'src'>;

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPathsStorybook = {
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config
  
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push(buildCssLoader(true));
  config.module.rules.push(buildBabelLoader());
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  });

  return config;
}