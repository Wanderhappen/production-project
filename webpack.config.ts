import path from 'path'
import webpack from 'webpack'
import { BuildWebpackConfig } from './config/build/buildWebpackConfig'
import type { BuildEnv, BuildPaths } from './config/build/types/config'

/*
__dirname - папка, в которой мы сейчас находимся
 */

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000

  const isDev = mode === 'development'

  const config: webpack.Configuration = BuildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })

  return config
}
