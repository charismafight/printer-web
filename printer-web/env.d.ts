/// <reference types="vite/client" />
import axios from 'axios'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties   {
    $http: typeof axios
    $translate: (key: string) => string
  }
}

export default ComponentCustomProperties
