import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import type { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // если не используется тайпскрипт, то нужен babel
  const typescriptLoader = {
    test: /\.tsx?$/, // регулярка,чтобы найти файлы, который пройдут
    // через loader
    use: 'ts-loader', // лоудер для этих файлов (тайпскрипт)
    exclude: /node_modules/, // исключения
  }

  const cssLoaders: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev
        ? 'style-loader' // чтобы работали стили,они помещаются в js (для разработки, чтобы работало быстро и просто)
        : MiniCssExtractPlugin.loader, // вычленить css из js (для продакшена: делать кеширование, оптимизацию, и деление на бандлы)

      // Translates CSS into CommonJS
      {
        loader: 'css-loader', // сделали объект, чтобы включить поддержку модулей
        options: {
          modules: {
            namedExport: false,
            auto: (resPath: string) => resPath.includes('.module.'), // чтобы применялось только к модулям
            localIdentName: isDev
              ? '[path][name]__[local]' // при разработке чтобы понимать класс
              : '[hash:base64:5]', // при проде - уник. id
          },
        },
      },

      // Compiles Sass to CSS
      'sass-loader',
    ],
  }

  return [typescriptLoader, cssLoaders]
}
