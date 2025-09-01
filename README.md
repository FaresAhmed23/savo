# Savoria - Modern Italian Restaurant Website

A sophisticated and responsive restaurant website built with React, TypeScript, and Vite. Savoria showcases an elegant dining experience with a modern web interface featuring smooth animations, dynamic menu displays, and an intuitive user experience.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dynamic Menu**: Interactive menu with categories (appetizers, mains, desserts, beverages) and dietary filters
- **Smooth Animations**: Framer Motion powered animations for enhanced user experience
- **Performance Optimized**: Lazy loading, code splitting, and optimized images
- **SEO Ready**: React Helmet Async for meta tag management
- **Type Safe**: Full TypeScript support for better developer experience
- **Modern Styling**: Tailwind CSS with custom theme configuration

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.8.2
- **Animations**: Framer Motion 12.23.12
- **Forms**: React Hook Form 7.62.0
- **Icons**: Heroicons React 2.2.0
- **HTTP Client**: Axios 1.11.0
- **SEO**: React Helmet Async 2.0.5

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/savoria.git
cd savoria

    Install dependencies:

bash

npm install

    Start the development server:

bash

npm run dev

The application will open automatically at http://localhost:3000
📁 Project Structure

text

savoria/
├── src/
│   ├── components/
│   │   ├── common/         # Reusable components (LoadingSpinner, ScrollToTop)
│   │   └── layout/         # Layout components
│   ├── pages/              # Page components (lazy loaded)
│   │   ├── HomePage.tsx
│   │   ├── MenuPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── data/               # Static data
│   │   ├── menuData.ts     # Menu items data
│   │   └── restaurantData.ts # Restaurant info, hours, testimonials
│   ├── types/              # TypeScript type definitions
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   └── App.tsx             # Main application component
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts

📜 Available Scripts

    npm run dev - Start development server
    npm run build - Build for production
    npm run preview - Preview production build
    npm run lint - Run ESLint
    npm run type-check - Run TypeScript type checking

🎨 Theme Configuration

The project uses a custom Tailwind theme with:
Colors

    Primary: Orange shades (#F97316)
    Secondary: Dark grays (#1F2937, #111827)
    Accent: Green shades (#10B981, #059669)

Fonts

    Display: Playfair Display (serif)
    Body: Inter (sans-serif)

Custom Animations

    fade-in: Smooth fade-in effect
    slide-up: Slide up animation

🔧 Path Aliases

The project uses path aliases for cleaner imports:

    @/ → ./src/
    @components → ./src/components
    @pages → ./src/pages
    @utils → ./src/utils
    @hooks → ./src/hooks
    @types → ./src/types

📱 Pages
Home Page

    Hero section with restaurant introduction
    Featured menu items
    Customer testimonials
    Call-to-action sections

Menu Page

    Full menu with categories
    Dietary filters (Vegetarian, Vegan, Gluten-Free, Dairy-Free)
    Popular items highlighting
    Beautiful food imagery

About Page

    Restaurant story and philosophy
    Chef information
    Opening hours

Contact Page

    Contact form
    Location information
    Reservation details

🍽️ Menu Categories

    Appetizers: 6 items including Truffle Arancini, Burrata Caprese
    Main Courses: 8 items including Grilled Ribeye, Lobster Ravioli
    Desserts: 6 items including Tiramisu, Chocolate Lava Cake
    Beverages: 6 items including Italian Soda, House Wine

🔄 State Management

The application uses React's built-in state management with:

    useState for local component state
    useContext for global state (if needed)
    React Hook Form for form state management

🚦 Performance Optimizations

    Lazy Loading: All pages are lazy loaded for better initial load time
    Code Splitting: Automatic code splitting via Vite
    Image Optimization: External CDN images from Unsplash
    Suspense Boundaries: Loading states for lazy-loaded components

🤝 Contributing

    Fork the repository
    Create your feature branch (git checkout -b feature/AmazingFeature)
    Commit your changes (git commit -m 'Add some AmazingFeature')
    Push to the branch (git push origin feature/AmazingFeature)
    Open a Pull Request

📄 License

This project is licensed under the MIT License.
🙏 Acknowledgments

    Images from Unsplash
    Icons from Heroicons
    Font families from Google Fonts

Made with ❤️ for Savoria Restaurant
```
