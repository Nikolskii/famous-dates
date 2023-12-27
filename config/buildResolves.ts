import { BuildOptions } from './types';
import { Configuration } from 'webpack';

export function buildResolves(options: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src,
    },
  };
}
