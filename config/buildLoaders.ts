import { ModuleOptions } from 'webpack';

export function buildLoaders(): ModuleOptions['rules'] {
  const imageLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const sassLoader = {
    test: /\.(sass|less|css)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  };

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
      },
    ],
    exclude: /node_modules/,
  };

  return [imageLoader, sassLoader, fontLoader, tsLoader];
}
