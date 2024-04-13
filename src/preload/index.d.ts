import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    context: {
      // TODO: Add context bridge for isolated world
    }
  }
}
