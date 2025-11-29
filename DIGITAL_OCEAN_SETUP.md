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
REACT_APP_STARTER_PLAN=price_1QHCW9055Q5v4CGclCNN5zmw
REACT_APP_PROFESSIONAL_PLAN_MONTHLY=price_1QHCX8055Q5v4CGcb6sMFzOZ
REACT_APP_PROFESSIONAL_PLAN_YEARLY=price_1QLFcw055Q5v4CGcjIE9awyO
REACT_APP_PREMIUM_PLAN_MONTHLY=price_1QHCYi055Q5v4CGcNcsOE8RE
REACT_APP_PREMIUM_PLAN_YEARLY=price_1QLFf4055Q5v4CGcCzOeCjPl
```

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

## Fixing 404 Errors for React Router Routes

If you're experiencing 404 errors on all pages except the home page, this is a common issue with Single Page Applications (SPAs) using React Router. The server needs to be configured to serve `index.html` for all routes.

### Solution

The following configuration files have been added to handle routing:

1. **`nginx.conf`** (root directory) - Configures nginx to serve `index.html` for all routes
2. **`.htaccess`** (in `public/` directory) - Apache fallback configuration  
3. **`_redirects`** (in `public/` directory) - Netlify-style redirects as backup

### How It Works

When a user navigates directly to a route like `/pricing` or `/contact`, the server tries to find that file. Since it doesn't exist (these are handled by React Router on the client), the server returns a 404. The configuration files tell the server to serve `index.html` instead, allowing React Router to handle the routing.

### Digital Ocean App Platform Configuration

If the 404 errors persist after deploying with these files:

1. **Check your App Platform settings:**
   - Go to your app in Digital Ocean
   - Navigate to **Settings** → **Components**
   - Ensure your static site component is configured correctly

2. **Verify nginx configuration:**
   - The `nginx.conf` file should be in your project root
   - Digital Ocean App Platform should automatically detect and use it for static sites

3. **Manual Configuration (if needed):**
   - In your Digital Ocean App Platform settings, you may need to specify that the app should serve `index.html` for all routes
   - Some configurations require setting a "catch-all" route in the App Platform UI

### Testing

After deployment, test these routes:
- `/pricing`
- `/contact`
- `/mobile-guard`
- `/incident-management`
- `/security-reporting`
- `/about`

All should load correctly without 404 errors.

---

**Questions?** Refer to [Digital Ocean's Environment Variables Documentation](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/)



