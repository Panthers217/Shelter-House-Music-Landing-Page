# Shelter House Music Landing Page - Project Overview

## 🎯 Project Summary

This repository contains a modern, fully responsive landing page for **Shelter House Music**, a Christian music recording ministry based in Eastern North Carolina. The landing page showcases their services, mission, and provides multiple ways for visitors to engage with the ministry.

## 📍 Location

The project is located in the `shm-landing` folder of this repository.

## 🌟 Key Highlights

### Design Features
- **Modern Aesthetic**: Gradient backgrounds, smooth animations, and professional typography
- **Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices
- **Engaging Interactions**: Scroll-triggered animations and hover effects using Framer Motion
- **Accessibility**: Keyboard navigation, ARIA labels, and semantic HTML

### Landing Page Sections

1. **Header** - Fixed navigation with mobile menu support
2. **Hero** - Eye-catching introduction with statistics and call-to-action
3. **Mission** - Core values and mission statement
4. **Services** - Six professional music production services
5. **Process** - Six-step production workflow visualization
6. **Featured Work** - Portfolio showcase with category filtering
7. **Donation Model** - Three partnership tiers (Friend, Partner, Champion)
8. **Testimonials** - Interactive carousel of client reviews
9. **Resources** - Free downloadable resources and blog posts
10. **Contact** - Full contact form with ministry information
11. **Footer** - Complete footer with newsletter signup and links

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI library for building components |
| Vite | 7.3.1 | Fast build tool and dev server |
| Tailwind CSS | 4.1.18 | Utility-first CSS framework |
| Framer Motion | 12.24.10 | Animation library |
| PostCSS | 8.5.6 | CSS processing |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm installed

### Installation & Running

```bash
# Navigate to project folder
cd shm-landing

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will be available at `http://localhost:5173/`

## 📦 Project Structure

```
shm-landing/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Mission.jsx      # Mission statement
│   │   ├── Services.jsx     # Services showcase
│   │   ├── Process.jsx      # Production process
│   │   ├── FeaturedWork.jsx # Portfolio
│   │   ├── DonationModel.jsx # Partnership tiers
│   │   ├── Testimonials.jsx # Client testimonials
│   │   ├── Resources.jsx    # Free resources
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer section
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles (Tailwind)
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
└── README.md                # Documentation
```

## 🎨 Customization Guide

### 1. Update Colors
Edit `shm-landing/tailwind.config.js`:
```javascript
colors: {
  primary: { /* Your blue shades */ },
  accent: { /* Your accent colors */ }
}
```

### 2. Modify Content
- **Services**: Edit `src/components/Services.jsx`
- **Testimonials**: Edit `src/components/Testimonials.jsx`
- **Featured Work**: Edit `src/components/FeaturedWork.jsx`
- **Contact Info**: Edit `src/components/Contact.jsx`
- **Footer Links**: Edit `src/components/Footer.jsx`

### 3. Replace Images
- Update Unsplash URLs with your own image URLs
- Or add images to `public/` folder and reference them

### 4. Update Metadata
Edit `shm-landing/index.html` for SEO:
- Meta descriptions
- Keywords
- Page title

## 🔧 Configuration Files

### Tailwind Configuration
Custom colors, fonts, and utility classes are defined in `tailwind.config.js`

### Vite Configuration
Build settings and plugins in `vite.config.js`

### PostCSS Configuration
Tailwind and Autoprefixer setup in `postcss.config.js`

## 📱 Responsive Breakpoints

Following Tailwind's default breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## ✨ Animation Features

- Scroll-triggered animations using Framer Motion's `useInView` hook
- Staggered children animations for sequential reveals
- Smooth transitions respecting user's motion preferences
- Interactive hover states and micro-interactions

## 🔐 Backend Integration Needed

The following features require backend integration:
- Contact form submission
- Newsletter subscription
- Donation processing
- Resource downloads tracking

## 🌐 Deployment Options

This Vite/React app can be deployed to:
- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Any static hosting service

## 📝 Development Notes

- Google Fonts (Inter and Montserrat) are loaded via CDN
- Images use Unsplash as placeholders - replace with actual images
- Social media links need to be updated with real URLs
- Form validation is basic - consider adding a library like Formik or React Hook Form

## 🤝 Support

For questions or support regarding this project, please contact the development team.

---

**Built with ❤️ for Shelter House Music**
*Serving the body of Christ through excellence in music production*
