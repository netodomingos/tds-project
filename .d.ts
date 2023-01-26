
import 'vite/client'

interface ImportMeta {
  readonly env: ImportMetaEnv
}
interface ImportMetaEnv {
    readonly VITE_WEATHER_API_KEY: string
// more env variables...
}
  