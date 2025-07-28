import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Load environment variables based on mode (development, production, etc.)
  const env = loadEnv(mode, __dirname, '')
  
  // Determine if we're in development mode
  const isDevelopment = mode === 'development'
  const isProduction = mode === 'production'

  console.log(`🚀 Building in ${mode} mode`)
  console.log(`📡 API URL: ${env.VITE_API_URL}`)

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, '../../packages/shared/src')
      }
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV || mode),
      __IS_DEV__: isDevelopment,
      __IS_PROD__: isProduction
    },
    server: {
      port: 5173,
      host: true,
      proxy: isDevelopment ? {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
          configure: (proxy, options) => {
            proxy.on('error', (err, req, res) => {
              console.log('Proxy error:', err)
            })
            proxy.on('proxyReq', (proxyReq, req, res) => {
              console.log('Proxying request:', req.method, req.url)
            })
          }
        }
      } : undefined
    },
    build: {
      sourcemap: isDevelopment,
      minify: isProduction ? 'esbuild' : false,
      rollupOptions: {
        output: {
          manualChunks: isProduction ? {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom']
          } : undefined
        }
      }
    }
  }
})
