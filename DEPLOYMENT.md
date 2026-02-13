# Deployment Guide for Vercel

This project is a self-contained cricket entertainment platform with standard email/password authentication.

## Prerequisites

1. **Database**: MySQL or compatible database (PlanetScale, Railway, etc.)
2. **Node.js**: Version 18 or higher

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL=mysql://username:password@host:port/database

# JWT Secret for Session Management (generate a strong random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Node Environment
NODE_ENV=production

# Server Port (optional, defaults to 3000)
PORT=3000
```

## Vercel Deployment Steps

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/laser247play.git
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`

### 3. Add Environment Variables

In Vercel project settings, add all environment variables from above:
- `DATABASE_URL`
- `JWT_SECRET`
- `NODE_ENV`

### 4. Deploy

Click "Deploy" and wait for the build to complete.

## Database Setup

1. Create a MySQL database on your preferred provider (PlanetScale, Railway, etc.)
2. Run the database migrations:

```bash
pnpm db:push
```

3. (Optional) Seed initial data if needed

## Post-Deployment

- Your website will be available at `https://your-project.vercel.app`
- You can add a custom domain in Vercel project settings
- Monitor logs in Vercel dashboard

## Important Notes

- This project uses **standard email/password authentication** with bcrypt and JWT
- No third-party OAuth dependencies
- All authentication is self-contained
- Suitable for Google Ads without third-party link issues
