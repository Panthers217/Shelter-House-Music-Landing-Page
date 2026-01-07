# Shelter House Music Landing Page

A modern, responsive landing page for Shelter House Music - a Christian music recording ministry dedicated to serving local churches, gospel artists, and the broader community of Eastern North Carolina.

## 🎵 Features

- **Modern Design**: Beautiful gradient backgrounds and smooth animations using Framer Motion
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **11 Sections**:
  - Header with smooth navigation
  - Hero section with engaging call-to-action
  - Mission statement
  - Services showcase
  - Process timeline
  - Featured Work portfolio
  - Donation/Partnership tiers
  - Client Testimonials
  - Free Resources
  - Contact form
  - Footer with newsletter signup

## 🚀 Tech Stack

- **React 19.2** - Modern UI library
- **Vite 7.3** - Fast build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Framer Motion 12** - Smooth animations and transitions

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
shm-landing/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Mission.jsx         # Mission statement
│   │   ├── Services.jsx        # Services offered
│   │   ├── Process.jsx         # Production process
│   │   ├── FeaturedWork.jsx    # Portfolio showcase
│   │   ├── DonationModel.jsx   # Partnership tiers
│   │   ├── Testimonials.jsx    # Client testimonials
│   │   ├── Resources.jsx       # Free resources
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer section
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles with Tailwind
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── vite.config.js              # Vite configuration
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors (blues)
- Accent colors (purples/pinks)

### Content
Update the content in each component file to match your specific needs:
- Services in `Services.jsx`
- Testimonials in `Testimonials.jsx`
- Featured work in `FeaturedWork.jsx`
- etc.

### Images
Replace the placeholder Unsplash images with your own:
- Update image URLs in component files
- Add your own images to the `public/` folder

## 🌟 Key Features

### Smooth Animations
- Scroll-triggered animations using Framer Motion
- Smooth page transitions
- Interactive hover effects

### SEO Optimized
- Semantic HTML structure
- Meta tags for search engines
- Descriptive alt text for images

### Accessibility
- Keyboard navigation support
- ARIA labels where needed
- Proper heading hierarchy

## 📝 Notes

- The site uses Google Fonts (Inter and Montserrat)
- All animations respect user's motion preferences
- Form submissions need backend integration
- Social media links need to be updated with actual URLs

## 🤝 Contributing

This is a custom project for Shelter House Music. For modifications or support, please contact the development team.

## 📄 License

Copyright © 2026 Shelter House Music. All rights reserved.
