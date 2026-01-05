# The Hivals Group Limited - Company Portfolio Website

A modern, professional portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS for The Hivals Group Limited - a multi-disciplinary consultancy offering expert services in Design & Construction, project management, risk assessment, and sustainable solutions.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **SEO Optimized**: Proper meta tags, Open Graph tags, and semantic HTML
- **Performance**: Image optimization, lazy loading, and optimized bundle size
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels
- **Contact Form**: Integrated email functionality using Resend
- **Smooth Animations**: Framer Motion for elegant transitions
- **Professional Design**: Clean, modern aesthetic with professional color scheme

## 📋 Pages

- **Homepage**: Hero section, services overview, foundation highlight, news preview, and CTAs
- **Services**: Detailed descriptions of all 7 services with benefits and imagery
- **Hivals Foundation**: Mission, focus areas, impact stats, and donation section
- **About Us**: Company story, values, team members, qualifications, and why choose us
- **News**: Blog-style layout with category filtering for project updates and news
- **Contact**: Contact form, information, social links, and FAQs

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hivals
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Add your environment variables to `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=info@thehivalsgroup.co.uk
```

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📧 Email Configuration

The contact form uses [Resend](https://resend.com) for email delivery:

1. Sign up for a free account at [resend.com](https://resend.com)
2. Generate an API key from your dashboard
3. Add the API key to your `.env.local` file
4. Update the `CONTACT_EMAIL` to your desired recipient email

**Note**: In development, you may need to verify your domain with Resend for production email sending.

## 🎨 Customization

### Colors

The website uses a professional blue and green color scheme defined in `app/globals.css`:

- Primary: Blue (#1e40af)
- Secondary: Green (#059669)

### Content

- Update company information in page components
- Replace placeholder images with actual project photos
- Modify team member details in `/app/about/page.tsx`
- Update news articles in `/app/news/page.tsx`

### Services

Edit service descriptions in `/app/services/page.tsx` to match your specific offerings.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text on all images
- Color contrast compliance

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in project settings
4. Deploy

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway

## 📄 Project Structure

```
hivals/
├── app/
│   ├── about/          # About Us page
│   ├── api/            # API routes (contact form)
│   ├── contact/        # Contact page
│   ├── foundation/     # Hivals Foundation page
│   ├── news/           # News & Updates page
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with header/footer
│   └── page.tsx        # Homepage
├── components/
│   ├── Button.tsx      # Reusable button component
│   ├── ContactForm.tsx # Contact form with validation
│   ├── Footer.tsx      # Site footer
│   ├── Header.tsx      # Site header with navigation
│   ├── NewsCard.tsx    # News article card
│   └── ServiceCard.tsx # Service card component
├── public/             # Static assets
└── package.json        # Dependencies
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

Copyright © 2024 The Hivals Group Limited. All rights reserved.

## 📞 Support

For questions or support, contact: info@thehivalsgroup.co.uk

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
