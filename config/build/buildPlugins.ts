import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import type { BuildPaths } from './types/config'

export function buildPlugins(
  paths: BuildPaths
): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html, // путь для html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      // чтобы вытащить css из JS и упаковки в отдельные файлы
      filename: 'css/[name].[contenthash:8].css', // где располагается наш css и названия
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ]
}
