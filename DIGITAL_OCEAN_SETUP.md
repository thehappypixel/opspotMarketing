# Digital Ocean App Platform - Environment Variables Setup

## Overview
Your app now uses a single `.env` file for local development. For production deployment on Digital Ocean App Platform, you need to configure environment variables in the platform settings.

## Production Environment Variables

Add these environment variables in your Digital Ocean App Platform settings:

### Step-by-Step Instructions

1. **Log into Digital Ocean**
   - Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
   - Navigate to your App Platform application

2. **Access Environment Variables**
   - Click on your app
   - Go to **Settings** → **App-Level Environment Variables**
   - Or go to **Settings** → **Components** → Select your component → **Environment Variables**

3. **Add the Following Variables**

```
REACT_APP_KINDE_CLIENT_ID=61cf067008dc4946bb009d464a67a1ab
REACT_APP_KINDE_DOMAIN=https://auth.opspot.io
REACT_APP_KINDE_REDIRECT_URI=https://app.opspot.io/auth/callback
REACT_APP_KINDE_LOGOUT_URI=https://app.opspot.io/auth/logout
REACT_APP_DOMAIN=https://app.opspot.io
REACT_APP_SITE_URL=https://opspot.io
REACT_APP_STARTER_PLAN=price_1QHCW9055Q5v4CGclCNN5zmw
REACT_APP_PROFESSIONAL_PLAN_MONTHLY=price_1QHCX8055Q5v4CGcb6sMFzOZ
REACT_APP_PROFESSIONAL_PLAN_YEARLY=price_1QLFcw055Q5v4CGcjIE9awyO
REACT_APP_PREMIUM_PLAN_MONTHLY=price_1QHCYi055Q5v4CGcNcsOE8RE
REACT_APP_PREMIUM_PLAN_YEARLY=price_1QLFf4055Q5v4CGcCzOeCjPl
```

> **`REACT_APP_DOMAIN` vs `REACT_APP_SITE_URL`:** `REACT_APP_DOMAIN` is the **app** host that sign-up / login / checkout CTAs redirect to (`https://app.opspot.io`). `REACT_APP_SITE_URL` is this **marketing site's** own public host (`https://opspot.io`) and is used for SEO canonical tags, Open Graph URLs, and the sitemap. Keep them distinct — pointing canonicals at the app domain tells Google the marketing pages live on `app.opspot.io`.

4. **Save and Redeploy**
   - Click **Save**
   - Digital Ocean will automatically trigger a new deployment
   - Your production app will now use these values

## How It Works

- **Local Development**: Uses values from `.env` file in your project root
- **Production**: Uses values configured in Digital Ocean App Platform

The Digital Ocean platform automatically injects these environment variables during the build process, overriding any values from your `.env` file.

## Important Notes

- ⚠️ Never commit production secrets to your repository
- ✅ The `.env` file (with development values) can be safely committed
- ✅ Production values are managed securely in Digital Ocean's platform
- 🔄 Changes to environment variables in Digital Ocean require a redeploy

## Verifying Your Setup

After deployment, you can verify the environment variables are working by:
1. Checking the build logs in Digital Ocean
2. Testing authentication flows on your production site
3. Verifying pricing plan IDs are correctly used

---

**Questions?** Refer to [Digital Ocean's Environment Variables Documentation](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/)



