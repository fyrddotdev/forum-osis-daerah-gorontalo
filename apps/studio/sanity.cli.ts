import {defineCliConfig} from 'sanity/cli'
import * as dotenv from 'dotenv'
import path from 'path'

// Explicitly target .env files in the current studio package directory
dotenv.config({path: path.resolve(__dirname, '.env.local')})
dotenv.config({path: path.resolve(__dirname, '.env')})

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  deployment: {
    autoUpdates: true,
  },
})
