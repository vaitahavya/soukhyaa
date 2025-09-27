# Soukhyaa - Hospital Uniforms Website

A modern, responsive single-page website for Soukhyaa, a premium hospital uniform brand. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Single Page Application**: All content on one scrollable page with smooth navigation
- **Contact Form**: Functional contact form with API integration
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessibility**: WCAG compliant with proper semantic HTML

## Sections

1. **Hero Section**: Eye-catching banner with call-to-action buttons
2. **About Us**: Company mission, values, and statistics
3. **Products**: Comprehensive product categories with features
4. **Why Choose Us**: Key differentiators and customer testimonials
5. **Industries**: Served industries with specific solutions
6. **Contact**: Contact form, business information, and final CTA

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd soukhyaa
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page component
├── components/
│   ├── AboutSection.tsx          # About us section
│   ├── ContactSection.tsx        # Contact form and info
│   ├── Footer.tsx                # Footer component
│   ├── HeroSection.tsx           # Hero banner section
│   ├── IndustriesSection.tsx     # Industries served section
│   ├── Navigation.tsx            # Sticky navigation
│   ├── ProductsSection.tsx       # Products showcase
│   └── WhyChooseSection.tsx      # Why choose us section
```

## Customization

### Colors
The website uses a healthcare-focused color palette:
- Primary: Blue (#2563eb)
- Secondary: Green (#16a34a)
- Accent: Purple, Orange, Pink, Indigo
- Neutral: Gray scale

### Content
All content can be easily customized by editing the respective component files in the `src/components/` directory.

### Contact Information
Update contact details in:
- `ContactSection.tsx` - Contact form and business info
- `Footer.tsx` - Footer contact information
- `layout.tsx` - Meta tags and SEO information

## Form Integration

The contact form is set up with a basic API endpoint at `/api/contact`. To fully integrate:

1. **Email Service**: Add email service like SendGrid, Resend, or Nodemailer
2. **Database**: Add database integration for storing inquiries
3. **Validation**: Enhance form validation and error handling
4. **Notifications**: Add admin notifications for new inquiries

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Fast loading and smooth interactions
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Soukhyaa. All rights reserved.

## Support

For technical support or questions, contact:
- Email: info@soukhyaa.com
- Phone: 8885048090
- Website: https://soukhyaa.com