import type { Configuration as DevSeverConfiguration } from 'webpack-dev-server'
import type { BuildOptions } from './types/config'

export function buildDevServer(options: BuildOptions): DevSeverConfiguration {
  return {
    port: options.port,
    open: true, // открытие вкладки при запуске скрипта
    historyApiFallback: true, // чтобы можно было обновлять роут
  }
}
