import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // Fix: Cast process to any to avoid TS error 'Property cwd does not exist on type Process'
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    base: './',
    define: {
      // Polyfill process.env to prevent "process is not defined" error in browser
      'process.env': {},
      // Safely inject API_KEY. Defaults to empty string if missing to prevent crash.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY || '')
    }
  }
})