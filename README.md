# Creation Rights

A modern, responsive website for Creation Rights - empowering digital creators with comprehensive protection and monetization tools.

## Features

- **Modern Next.js 15** with App Router and TypeScript
- **Tailwind CSS v4** for styling with custom theme system
- **Dark/Light Mode** with system preference detection
- **Responsive Design** with mobile-first approach
- **shadcn/ui Navigation Menu** with smooth sliding animations
- **Magic UI Components** for enhanced user experience
- **Full Static Generation** for optimal performance
- **Comprehensive SEO** with proper meta tags

## Design System

### Theme Support
- **Light Mode**: Clean, professional white theme
- **Dark Mode**: Elegant dark theme with proper contrast
- **System Detection**: Automatically matches user's system preference
- **Persistent Settings**: Theme choice saved in localStorage

### Typography
- **Primary Font**: Mona Sans (GitHub's beautiful sans-serif typeface)
- **Monospace Font**: JetBrains Mono for code snippets
- **Responsive Text**: Scales appropriately across devices

### Colors
- **Theme-Aware Variables**: All colors adapt to light/dark mode
- **Accessible Contrast**: WCAG compliant color combinations
- **Consistent Palette**: Unified color system across all components

## Site Structure

### Main Navigation
```
├── Solutions
│   ├── For Creators
│   ├── For Organizations  
│   ├── For Developers
│   ├── Governance Platform
│   └── Legal & Insurance
├── Technology
│   ├── Dynamic Metadata
│   ├── Content ID Layer
│   ├── Smart Licensing
│   ├── NIL Protection
│   └── Platform APIs
├── Use Cases
├── Resources
│   ├── Whitepapers
│   ├── Documentation
│   ├── Newsroom
│   └── Help Center
└── Company
    ├── About Us
    ├── Careers
    ├── Press
    └── Contact
```

### Authentication & Actions
- **Login** - User authentication page
- **Sign Up** - User registration page  
- **Request Demo** - Demo request form

### Legal Pages
- **Privacy Policy** - Privacy and data protection
- **Terms of Service** - Terms and conditions
- **Cookie Policy** - Cookie usage information

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── company/                  # Company pages
│   │   ├── about/page.tsx
│   │   ├── careers/page.tsx
│   │   ├── contact/page.tsx
│   │   └── press/page.tsx
│   ├── resources/                # Resource pages
│   │   ├── documentation/page.tsx
│   │   ├── help/page.tsx
│   │   ├── newsroom/page.tsx
│   │   └── whitepapers/page.tsx
│   ├── solutions/                # Solution pages
│   │   ├── creators/page.tsx
│   │   ├── developers/page.tsx
│   │   ├── governance/page.tsx
│   │   ├── legal/page.tsx
│   │   └── organizations/page.tsx
│   ├── technology/               # Technology pages
│   │   ├── apis/page.tsx
│   │   ├── content-id/page.tsx
│   │   ├── licensing/page.tsx
│   │   ├── metadata/page.tsx
│   │   └── nil/page.tsx
│   ├── cookies/page.tsx          # Legal pages
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── demo/page.tsx             # Demo request
│   ├── login/page.tsx            # Authentication
│   ├── signup/page.tsx
│   ├── use-cases/page.tsx        # Use cases
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/
│   ├── magicui/                  # Magic UI components
│   │   ├── animated-gradient-text.tsx
│   │   ├── blur-in.tsx
│   │   ├── shimmer-button.tsx
│   │   └── typing-animation.tsx
│   └── ui/                       # UI components
│       ├── footer.tsx            # Site footer
│       ├── navigation.tsx        # Main navigation
│       ├── navigation-menu.tsx   # shadcn/ui nav menu
│       ├── page-layout.tsx       # Page layout components
│       └── theme-switcher.tsx    # Theme toggle
├── contexts/
│   └── theme-context.tsx         # Theme management
└── lib/
    └── utils.ts                  # Utility functions
```

## Technology Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Magic UI** - Enhanced animation components
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CreationRights/CRFr.git
   cd CRFr
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or  
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## Accessibility

- **WCAG 2.1 AA** compliant color contrast
- **Keyboard Navigation** support
- **Screen Reader** optimized
- **Focus Management** for interactive elements
- **Semantic HTML** structure

## Performance

- **Static Generation** for all pages
- **Optimized Images** with Next.js Image component
- **Font Optimization** with next/font
- **Bundle Splitting** for efficient loading
- **Core Web Vitals** optimized

## Customization

### Adding New Pages
1. Create page file in appropriate `src/app/` directory
2. Use `PageLayout`, `PageHeader`, `PageSection` components
3. Add navigation link in `src/components/ui/navigation.tsx`
4. Update footer links in `src/components/ui/footer.tsx`

### Theme Customization
- Modify CSS variables in `src/app/globals.css`
- Update theme context in `src/contexts/theme-context.tsx`
- Customize colors in the `:root` and `.dark` selectors

### Component Development
- Follow shadcn/ui patterns for consistency
- Use theme-aware classes (`bg-card`, `text-foreground`, etc.)
- Implement responsive design with Tailwind breakpoints

## License

This project is proprietary and confidential to Creation Rights.

## Contributing

This is a private repository. For internal development guidelines, please refer to the team documentation.

---

**Creation Rights** - Empowering Digital Creators