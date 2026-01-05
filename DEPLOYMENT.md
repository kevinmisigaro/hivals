# Deployment Guide - The Hivals Group Limited Website

This guide provides step-by-step instructions for deploying The Hivals Group Limited website to various platforms.

## Prerequisites

- Git repository with your code
- Node.js 18+ installed locally
- Environment variables configured

## Environment Variables

Before deploying, ensure you have the following environment variables:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=info@thehivalsgroup.co.uk
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform as it's created by the Next.js team and offers seamless integration.

#### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - In project settings, go to "Environment Variables"
   - Add `RESEND_API_KEY` and `CONTACT_EMAIL`
   - Apply to Production, Preview, and Development

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

5. **Custom Domain**
   - Go to Settings > Domains
   - Add `thehivalsgroup.co.uk`
   - Follow DNS configuration instructions

#### Automatic Deployments

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create a pull request

### Option 2: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

2. **Deploy**
   - Connect your Git repository
   - Configure environment variables
   - Deploy

### Option 3: AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect your GitHub repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**
   - Add in Amplify Console under Environment Variables

### Option 4: Digital Ocean App Platform

1. **Create New App**
   - Select your GitHub repository
   - Choose Node.js as runtime

2. **Configure**
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - HTTP Port: 3000

3. **Environment Variables**
   - Add in App Settings

## Post-Deployment Checklist

### 1. Email Configuration

- [ ] Sign up for Resend account
- [ ] Verify your domain with Resend
- [ ] Generate API key
- [ ] Add API key to environment variables
- [ ] Test contact form submission

### 2. Domain Configuration

- [ ] Point domain to deployment platform
- [ ] Configure DNS records
- [ ] Enable HTTPS/SSL
- [ ] Test all pages load correctly

### 3. SEO Setup

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Open Graph tags work (test with Facebook debugger)
- [ ] Test structured data with Google Rich Results Test

### 4. Performance Testing

- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Check image loading and optimization

### 5. Analytics (Optional)

- [ ] Set up Google Analytics
- [ ] Configure conversion tracking for contact form
- [ ] Set up Google Tag Manager if needed

### 6. Content Updates

- [ ] Replace placeholder images with actual project photos
- [ ] Update team member information and photos
- [ ] Add real news articles and case studies
- [ ] Review and update all content for accuracy

### 7. Social Media

- [ ] Update social media links in footer
- [ ] Create social media profiles if not existing
- [ ] Share website launch announcement

## Monitoring and Maintenance

### Regular Tasks

**Weekly:**
- Check contact form submissions
- Review website analytics
- Monitor uptime

**Monthly:**
- Update news section with new articles
- Review and update project portfolio
- Check for security updates

**Quarterly:**
- Review and update service descriptions
- Update team information
- Refresh testimonials and case studies

### Troubleshooting

**Contact Form Not Working:**
1. Verify RESEND_API_KEY is set correctly
2. Check Resend dashboard for error logs
3. Ensure domain is verified with Resend
4. Check browser console for errors

**Build Failures:**
1. Check build logs for specific errors
2. Verify all dependencies are installed
3. Ensure Node.js version is 18+
4. Clear build cache and retry

**Performance Issues:**
1. Optimize images (use WebP format)
2. Enable caching headers
3. Use CDN for static assets
4. Minimize JavaScript bundle size

## Updating the Website

### Making Content Changes

1. **Local Development**
   ```bash
   npm run dev
   ```

2. **Make Changes**
   - Edit page content in `app/` directory
   - Update components in `components/` directory

3. **Test Locally**
   - Verify changes work correctly
   - Test responsive design
   - Check all links

4. **Deploy**
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```

5. **Verify**
   - Check deployment status
   - Test changes on live site

## Security Best Practices

- [ ] Never commit `.env` files to Git
- [ ] Use environment variables for sensitive data
- [ ] Keep dependencies updated
- [ ] Enable HTTPS/SSL
- [ ] Configure security headers
- [ ] Regular security audits

## Support

For deployment issues or questions:
- Email: info@thehivalsgroup.co.uk
- Check Next.js documentation: https://nextjs.org/docs
- Vercel support: https://vercel.com/support

## Backup Strategy

1. **Code**: Stored in Git repository
2. **Environment Variables**: Document separately (securely)
3. **Content**: Consider using a CMS for easier management
4. **Database**: Not applicable (static site)

## Future Enhancements

Consider these improvements for future versions:

- [ ] Add CMS integration (Contentful, Sanity, or Strapi)
- [ ] Implement blog with dynamic routing
- [ ] Add project portfolio with filtering
- [ ] Integrate payment system for donations
- [ ] Add multi-language support
- [ ] Implement user authentication for client portal
- [ ] Add live chat support
- [ ] Create downloadable resources section

---

**Last Updated**: January 2024
**Version**: 1.0.0
