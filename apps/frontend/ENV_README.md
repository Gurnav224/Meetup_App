# Environment Configuration Guide

This project uses separate environment files for different deployment environments.

## Environment Files

### 📁 File Structure
```
apps/frontend/
├── .env                    # Default/fallback values
├── .env.development        # Development environment
├── .env.production         # Production environment
├── .env.example           # Template file
└── ENV_README.md          # This file
```

### 🔧 Environment Files Explained

#### `.env.development`
- Used when running `npm run dev`
- Contains local development settings
- API points to `http://localhost:3000`
- Debug mode enabled

#### `.env.production` 
- Used when running `npm run build`
- Contains production settings
- API points to production server
- Debug mode disabled
- Optimized for performance

#### `.env` (fallback)
- Used if no mode-specific file exists
- Contains default values

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start dev server (uses .env.development)
npm run build:dev        # Build for development

# Production  
npm run build            # Build for production (uses .env.production)
npm run dev:prod         # Start dev server with production env
npm run preview:prod     # Preview production build

# Other
npm run preview          # Preview build
npm run lint             # Run ESLint
```

## 📋 Environment Variables

| Variable | Development | Production | Description |
|----------|------------|------------|-------------|
| `VITE_API_URL` | `http://localhost:3000` | `https://your-api.vercel.app` | Backend API URL |
| `VITE_APP_ENV` | `development` | `production` | Current environment |
| `VITE_DEBUG` | `true` | `false` | Enable debug logging |
| `VITE_ENABLE_DEV_TOOLS` | `true` | `false` | Enable dev tools |

## 💻 Usage in Code

### Import the environment utility:
```javascript
import { ENV, getApiUrl, debugLog, isDevelopment } from '../utils/env'

// Use environment variables
const apiUrl = ENV.API_URL
const isDebug = ENV.DEBUG

// Helper functions
const endpoint = getApiUrl('/events')  // http://localhost:3000/events
debugLog('This only logs in development')

if (isDevelopment()) {
  console.log('Running in development mode')
}
```

### Direct usage:
```javascript
// Direct access to environment variables
const apiUrl = import.meta.env.VITE_API_URL
const appEnv = import.meta.env.VITE_APP_ENV
```

## 🔄 How Vite Loads Environment Files

Vite automatically loads environment files in this order:

1. `.env.${mode}.local` (highest priority)
2. `.env.local` 
3. `.env.${mode}`
4. `.env` (lowest priority)

Where `mode` is either `development` or `production`.

## 🛠️ Setup Instructions

1. **Copy the example file:**
   ```bash
   cp .env.example .env.development
   cp .env.example .env.production
   ```

2. **Update the values** in each file according to your environment

3. **Never commit sensitive data** - add sensitive `.env` files to `.gitignore`

## 🚨 Important Notes

- All Vite environment variables **must** be prefixed with `VITE_`
- Variables without the prefix won't be accessible in the frontend
- The proxy configuration only works in development mode
- Production builds don't use the proxy (API calls go directly to the production server)

## 🔍 Debugging

To see which environment variables are loaded:

1. Check the console during development - environment info is logged automatically
2. Use `npm run dev` and look for the build messages showing the mode and API URL
3. In your browser console, check `import.meta.env` to see all loaded variables
