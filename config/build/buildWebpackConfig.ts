import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import type { BuildOptions } from './types/config'

export function BuildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options
  return {
    mode: mode, // если production - то оптимизируется код
    // (сжимает,убирает лишнее, убирает комментарии )

    entry: paths.entry, // стартовая точка приложения

    output: {
      // куда будет делаться сборка
      // filename: 'bundle.js', // название файла
      filename: '[name].[contenthash].js', // браузер по умолчанию кэширует
      // файлы с одинаковым названием, чтобы обновлялся файл добавляем .[contenthash]
      path: paths.build, // путь файла
      clean: true, // Удаляем предыдущие сборки
    },

    plugins: buildPlugins(paths),

    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined, // чтобы видеть где именно в коде ошибка
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
