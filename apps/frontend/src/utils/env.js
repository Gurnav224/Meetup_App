// Environment utility functions

export const ENV = {
  API_URL: import.meta.env.VITE_API_URL,
  APP_ENV: import.meta.env.VITE_APP_ENV,
  DEBUG: import.meta.env.VITE_DEBUG === 'true',
  ENABLE_DEV_TOOLS: import.meta.env.VITE_ENABLE_DEV_TOOLS === 'true',
}

export const isDevelopment = () => ENV.APP_ENV === 'development'
export const isProduction = () => ENV.APP_ENV === 'production'

// API URL helpers
export const getApiUrl = (endpoint = '') => {
  const baseUrl = ENV.API_URL.endsWith('/') 
    ? ENV.API_URL.slice(0, -1) 
    : ENV.API_URL
  
  return endpoint.startsWith('/') 
    ? `${baseUrl}${endpoint}` 
    : `${baseUrl}/${endpoint}`
}

// Debug logging (only logs in development)
export const debugLog = (...args) => {
  if (ENV.DEBUG && isDevelopment()) {
    console.log('[DEBUG]', ...args)
  }
}

// Environment info for debugging
export const getEnvInfo = () => {
  return {
    mode: ENV.APP_ENV,
    apiUrl: ENV.API_URL,
    debug: ENV.DEBUG,
    devTools: ENV.ENABLE_DEV_TOOLS,
    isDev: isDevelopment(),
    isProd: isProduction(),
  }
}

// Log environment info on app start (development only)
if (isDevelopment()) {
  console.table(getEnvInfo())
}
