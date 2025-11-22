import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // The third parameter '' loads all env vars regardless of prefix (needed for Vercel's API_KEY).
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    base: './',
    define: {
      // Polyfill process.env.API_KEY so it works in the browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Prevents "process is not defined" error in some edge cases
      'process.env': {}
    }
  }
})