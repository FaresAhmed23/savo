🍴 Savoria Kitchen - Modern Restaurant Website

A sophisticated, fully responsive restaurant website built with React, TypeScript, and Tailwind CSS. Features smooth animations, modern design, and exceptional user experience.

Savoria Kitchen Banner
🌟 Live Demo

View Live Demo • View Design Process
✨ Features

    Modern Design: Clean, elegant UI with attention to detail
    Fully Responsive: Seamless experience across all devices
    Smooth Animations: Powered by Framer Motion for delightful interactions
    Type-Safe: Built with TypeScript for robust code
    Performance Optimized: Lazy loading, code splitting, and optimized images
    SEO Friendly: Meta tags and structured data for better search visibility
    Accessibility: WCAG compliant with proper ARIA labels
    Online Reservations: Integrated booking system with form validation

🛠️ Tech Stack

    Frontend Framework: React 18 with TypeScript
    Build Tool: Vite 5
    Styling: Tailwind CSS 3
    Routing: React Router v6
    Animations: Framer Motion
    Icons: Heroicons
    Form Handling: React Hook Form
    SEO: React Helmet Async

📋 Prerequisites

Before you begin, ensure you have the following installed:

    Node.js (v18.0.0 or higher)
    npm (v9.0.0 or higher) or yarn

🚀 Getting Started
Installation

    Clone the repository

    bash

git clone https://github.com/yourusername/savoria-kitchen.git
cd savoria-kitchen

Install dependencies

bash

npm install
# or
yarn install

Set up environment variables

bash

cp .env.example .env.local

Update .env.local with your configuration:

env

VITE_API_URL=your_api_url
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key

Start the development server

bash

    npm run dev
    # or
    yarn dev

    Open your browser
    Navigate to http://localhost:3000

📦 Building for Production

bash

# Create production build
npm run build

# Preview production build locally
npm run preview

📁 Project Structure

text

savoria-kitchen/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # Reusable components
│   │   ├── common/      # Shared components
│   │   ├── layout/      # Layout components
│   │   ├── home/        # Home page components
│   │   ├── menu/        # Menu page components
│   │   ├── about/       # About page components
│   │   └── contact/     # Contact page components
│   ├── data/           # Mock data and constants
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── .env.example        # Environment variables example
├── .gitignore         # Git ignore file
├── index.html         # HTML template
├── package.json       # Project dependencies
├── README.md          # Project documentation
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration

📜 Available Scripts

bash

# Development
npm run dev             # Start development server
npm run build          # Build for production
npm run preview        # Preview production build
npm run type-check     # Run TypeScript type checking
npm run lint           # Run ESLint

# Deployment
npm run deploy         # Deploy to Vercel/Netlify

🎨 Design Decisions
Color Palette

    Primary: Warm Orange (#D97706) - Appetizing and inviting
    Secondary: Dark Gray (#1F2937) - Professional and elegant
    Accent: Fresh Green (#10B981) - Natural and fresh
    Neutral: Light Gray (#F3F4F6) - Clean backgrounds

Typography

    Headings: Playfair Display - Elegant serif for sophistication
    Body: Inter - Clean, readable sans-serif

Component Architecture

    Atomic design principles
    Reusable component library
    Consistent spacing and sizing system
    Mobile-first responsive approach

🔧 Configuration
Tailwind CSS

The project uses a custom Tailwind configuration with:

    Custom color palette
    Extended animations
    Custom font families
    Responsive breakpoints

Path Aliases

Configured path aliases for cleaner imports:

typescript

import Component from '@/components/Component'
import { useCustomHook } from '@/hooks/useCustomHook'

🤝 Contributing

Contributions are welcome! Please follow these steps:

    Fork the repository
    Create your feature branch (git checkout -b feature/AmazingFeature)
    Commit your changes (git commit -m 'Add some AmazingFeature')
    Push to the branch (git push origin feature/AmazingFeature)
    Open a Pull Request

Coding Standards

    Follow the existing code style
    Write meaningful commit messages
    Add appropriate comments
    Update documentation as needed
    Ensure all tests pass

📸 Screenshots
Desktop View

Desktop Home
Mobile View

Mobile Menu
Tablet View

Tablet About
🚦 Roadmap

Add online ordering system
Integrate payment gateway
Add multi-language support
Implement dark mode
Add customer loyalty program
Create admin dashboard
Add real-time table availability

    Implement push notifications

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

    Design inspiration from modern restaurant websites
    Images from Unsplash
    Icons from Heroicons
    Fonts from Google Fonts

📞 Contact

Your Name - @yourtwitter - your.email@example.com

Project Link: https://github.com/yourusername/savoria-kitchen

Made with ❤️ by [Your Name]
