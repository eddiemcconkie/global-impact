# Global Impact project interview

**GitHub:** https://github.com/eddiemcconkie/global-impact

**Deployment:** https://global-impact.vercel.app

## Setup

- Clone the project and run `pnpm install`
- Start the project with `pnpm dev`

## Hosting on Vercel

This project currently uses `@upstash/redis` from Vercel's Marketplace for basic database functionality. This should probably be replaced with a real database, but if you want to set it up yourself, here are the steps:

1. If you haven't already, create a new project at https://vercel.com/new
1. Go to https://vercel.com/eddiemcconkies-projects/~/stores and **Create Database**
1. Click the **Upstash** dropdown, then select **Upstash for Redis** and continue
1. Select your region and choose the free plan
1. From there, follow the first two steps to connect the database to your project and pull the `.env` to your local environment
