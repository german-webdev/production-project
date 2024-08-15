import webpack from 'webpack';
import path from 'path';
import { type BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  // Добавление правил для обработки стилей
  config.module.rules.push(buildCssLoader(true));

  return config;
}
