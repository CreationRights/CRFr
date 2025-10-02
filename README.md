# Creation Rights (CRFr)

A modern, high-performance marketing website for Creation Rights - a platform empowering digital creators with comprehensive protection and monetization tools for the AI era.

## About the Project

Creation Rights addresses the broken creator economy by providing:
- **Real-time Content Tracking** across the entire internet
- **Automated AI Licensing** and rights negotiation
- **Micro-royalty Collection** from remixes, derivatives, and AI-generated variations
- **Instant Payment Distribution** to creators and collaborators
- **Predictive Analytics** for AI training demand

Built with patented dynamic metadata technology, PCI compliance, and enterprise infrastructure (Lloyd's Lab, JP Morgan), this platform is designed for the modern creator economy.

## Key Features

### Technical Features
- **Next.js 15** with App Router for optimal performance
- **React 19** with latest concurrent features
- **TypeScript** for type-safe development
- **Tailwind CSS v4** with custom theme system
- **Three.js Interactive Background** with 20+ grid images and mouse interactions
- **Dark/Light Mode** with system preference detection and localStorage persistence
- **Full Static Generation** for blazing-fast load times
- **Mobile-First Responsive Design** (320px → 1440px+)
- **Accessible** WCAG 2.1 AA compliant

### User Experience
- **Interactive Hero Section** with floating 3D grid powered by Three.js
- **Advanced Navigation** with mega-menu for use cases
- **Shimmer Button Effects** for CTAs
- **Smooth Animations** powered by Framer Motion
- **Theme-Aware Components** that adapt to light/dark modes
- **Optimized Performance** with texture caching and shared geometries

## Design System

### Theme Support
- **Light Mode**: Clean, professional white theme optimized for readability
- **Dark Mode**: Elegant dark theme with proper contrast ratios
- **System Detection**: Automatically detects and matches user's OS preference
- **Persistent Settings**: Theme choice saved in localStorage
- **Smooth Transitions**: 300ms ease transitions between themes

### Typography
- **Primary Font**: [Mona Sans](https://github.com/github/mona-sans) - GitHub's beautiful variable sans-serif
- **System Fallbacks**: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial
- **Responsive Scaling**: Typography scales appropriately across all breakpoints

### Color System
```css
Light Mode: #ffffff backgrounds, #0a0a0a text
Dark Mode:  #0a0a0a backgrounds, #fafafa text
```
- Theme-aware CSS variables for all colors
- WCAG AA compliant contrast ratios
- Consistent muted colors and borders across themes

## Site Structure

### Main Navigation (60+ Pages)

```
├── Solutions (5 pages)
│   ├── For Creators
│   ├── For Organizations  
│   ├── For Developers
│   ├── Governance Platform
│   └── Legal & Insurance
│
├── Technology (5 pages)
│   ├── Dynamic Metadata
│   ├── Content ID Layer
│   ├── Smart Licensing
│   ├── NIL Protection
│   └── Platform APIs
│
├── Use Cases (26 pages) - Organized mega-menu
│   ├── Arts & Culture (5)
│   │   └── Art, Architecture, Galleries, Museums, Creative Spaces
│   ├── Media & Entertainment (6)
│   │   └── Film, TV, Music, Video Games, Journalism, Authors
│   ├── Fashion & Lifestyle (5)
│   │   └── Fashion, Beauty, Models, Cuisine, Hospitality
│   ├── Creative Industries (6)
│   │   └── Photography, Design, Advertising, Agency, Auction House, Content Creators
│   ├── Sports & NIL (2)
│   │   └── Sports, NIL Protection
│   └── Technology (1)
│       └── Online Safety
│
├── Resources (4 pages)
│   ├── Whitepapers
│   ├── Documentation
│   ├── Newsroom
│   └── Help Center
│
└── Company (5 pages)
    ├── About Us
    ├── Partners
    ├── Careers
    ├── Press
    └── Contact
```

### Authentication & Actions
- **Login** (`/login`) - User authentication page
- **Sign Up** (`/signup`) - User registration page  
- **Request Demo** (`/demo`) - Demo request form with shimmer CTA

### Legal Pages
- **Privacy Policy** (`/privacy`) - Privacy and data protection
- **Terms of Service** (`/terms`) - Terms and conditions
- **Cookie Policy** (`/cookies`) - Cookie usage information

## Project Structure

```
src/
├── app/                          # Next.js 15 App Router pages
│   ├── company/                  # Company pages (5 pages)
│   │   ├── about/page.tsx
│   │   ├── careers/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── partners/page.tsx
│   │   └── press/page.tsx
│   ├── resources/                # Resource pages (4 pages)
│   │   ├── documentation/page.tsx
│   │   ├── help/page.tsx
│   │   ├── newsroom/page.tsx
│   │   └── whitepapers/page.tsx
│   ├── solutions/                # Solution pages (5 pages)
│   │   ├── creators/page.tsx
│   │   ├── developers/page.tsx
│   │   ├── governance/page.tsx
│   │   ├── legal/page.tsx
│   │   └── organizations/page.tsx
│   ├── technology/               # Technology pages (5 pages)
│   │   ├── apis/page.tsx
│   │   ├── content-id/page.tsx
│   │   ├── licensing/page.tsx
│   │   ├── metadata/page.tsx
│   │   └── nil/page.tsx
│   ├── use-cases/                # Use case pages (26 pages!)
│   │   ├── advertising/page.tsx
│   │   ├── agency/page.tsx
│   │   ├── architecture/page.tsx
│   │   ├── art/page.tsx
│   │   ├── auction-house/page.tsx
│   │   ├── authors/page.tsx
│   │   ├── beauty/page.tsx
│   │   ├── content-creators/page.tsx
│   │   ├── creative-spaces/page.tsx
│   │   ├── cuisine/page.tsx
│   │   ├── design/page.tsx
│   │   ├── fashion/page.tsx
│   │   ├── film/page.tsx
│   │   ├── galleries/page.tsx
│   │   ├── hospitality/page.tsx
│   │   ├── journalism/page.tsx
│   │   ├── models/page.tsx
│   │   ├── museums/page.tsx
│   │   ├── music/page.tsx
│   │   ├── nil/page.tsx
│   │   ├── online-safety/page.tsx
│   │   ├── photography/page.tsx
│   │   ├── sports/page.tsx
│   │   ├── tv/page.tsx
│   │   ├── video-games/page.tsx
│   │   └── page.tsx              # Use cases landing page
│   ├── cookies/page.tsx          # Legal pages
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── demo/page.tsx             # Demo request form
│   ├── login/page.tsx            # Authentication pages
│   ├── signup/page.tsx
│   ├── favicon.ico               # Site favicon
│   ├── globals.css               # Global styles & CSS variables
│   ├── layout.tsx                # Root layout with theme provider
│   └── page.tsx                  # Homepage with hero & sections
│
├── components/
│   └── ui/                       # UI components
│       ├── button.tsx            # Button with shimmer variant
│       ├── footer.tsx            # Site footer with links
│       ├── hero-section.tsx      # Hero section containers
│       ├── interactive-grid.tsx  # Three.js interactive background
│       ├── nav-section.tsx       # Navigation section wrapper
│       ├── navigation.tsx        # Main navigation with mega-menu
│       ├── navigation-menu.tsx   # shadcn/ui nav menu primitives
│       ├── page-layout.tsx       # Reusable page layout components
│       └── theme-switcher.tsx    # Theme toggle button
│
├── contexts/
│   └── theme-context.tsx         # Theme context provider & hook
│
└── lib/
    └── utils.ts                  # Utility functions (cn, etc.)
```

### Public Assets
```
public/
├── creation-rights logo icon white.svg      # Favicon logo
├── creation-rights logo landscape white.svg # Landscape logo for nav
└── grid-images/                             # Hero background images
    ├── hero-01.jpg through hero-20.jpg     # 20 images for grid
```

## Technology Stack

### Core Framework
- **[Next.js 15.5.4](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development with strict mode

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS with custom theme variables
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
  - Navigation Menu (`@radix-ui/react-navigation-menu`)
  - Slot (`@radix-ui/react-slot`)
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon library (500+ icons)
- **[Framer Motion 12](https://www.framer.com/motion/)** - Production-ready animations

### 3D Graphics
- **[Three.js 0.180.0](https://threejs.org/)** - WebGL library for interactive 3D backgrounds
- Custom interactive grid with mouse tracking and floating animations
- Optimized texture caching and shared geometries for performance

### Utilities
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes without conflicts
- **[class-variance-authority](https://cva.style/)** - Type-safe component variants

### Development Tools
- **[ESLint 9](https://eslint.org/)** - Code linting with Next.js config
- **[PostCSS](https://postcss.org/)** - CSS processing with Tailwind
- **[Turbopack](https://turbo.build/pack)** - Fast Rust-based bundler for dev mode

## Getting Started

### Prerequisites
- **Node.js 18+** (20+ recommended)
- **npm**, **yarn**, **pnpm**, or **bun**
- Modern browser with WebGL support (for Three.js)

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
   # or
   bun install
   ```

3. **Run development server with Turbopack**
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
# Build with Turbopack
npm run build

# Start production server
npm run start
```

### Available Scripts

```bash
npm run dev    # Start development server with Turbopack
npm run build  # Build for production with Turbopack
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Responsive Design

The site uses a mobile-first approach with Tailwind breakpoints:

| Breakpoint | Range | Description |
|-----------|-------|-------------|
| `xs` | 320px - 640px | Mobile phones |
| `sm` | 640px - 768px | Large phones |
| `md` | 768px - 1024px | Tablets |
| `lg` | 1024px - 1280px | Small laptops |
| `xl` | 1280px - 1536px | Desktops |
| `2xl` | 1536px+ | Large desktops |

### Responsive Features
- Mobile hamburger menu with full navigation
- Desktop mega-menu for use cases
- Fluid typography and spacing
- Touch-optimized interactions
- Adaptive Three.js grid performance

## Accessibility

Committed to WCAG 2.1 Level AA compliance:

- ✅ **Color Contrast**: 4.5:1 minimum for normal text, 3:1 for large text
- ✅ **Keyboard Navigation**: Full keyboard support with visible focus indicators
- ✅ **Screen Reader**: Semantic HTML with proper ARIA labels
- ✅ **Focus Management**: Logical tab order and focus trapping in modals
- ✅ **Responsive Text**: Supports 200% zoom without loss of functionality
- ✅ **Alt Text**: All images have descriptive alternative text

## ⚡ Performance Optimizations

### Build-time Optimizations
- **Static Site Generation** - All pages pre-rendered at build time
- **Automatic Code Splitting** - Route-based splitting for optimal bundles
- **Tree Shaking** - Unused code automatically removed
- **CSS Purging** - Tailwind removes unused styles

### Runtime Optimizations
- **Next.js Image Optimization** - Automatic image resizing and WebP conversion
- **Font Optimization** - Mona Sans loaded via CDN with font-display: swap
- **Three.js Optimizations**:
  - Shared geometries to reduce memory
  - Texture caching to prevent reloads
  - Disabled mipmaps for better performance
  - Efficient animation loop with RAF
- **Theme Persistence** - localStorage prevents flash of unstyled content

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms  
- **CLS** (Cumulative Layout Shift): < 0.1

## Customization Guide

### Adding New Pages

1. **Create the page file**
   ```bash
   # Example: Adding a new solution page
   touch src/app/solutions/agencies/page.tsx
   ```

2. **Use layout components**
   ```tsx
   import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
   
   export default function AgenciesPage() {
     return (
       <PageLayout>
         <PageHeader 
           title="For Agencies"
           description="Manage multiple client assets efficiently"
         />
         <PageSection>
           {/* Your content */}
         </PageSection>
       </PageLayout>
     );
   }
   ```

3. **Update navigation** (`src/components/ui/navigation.tsx`)
   - Add to appropriate `navigationItems` section

4. **Update footer** (`src/components/ui/footer.tsx`)
   - Add link to appropriate `footerSections` array

### Theme Customization

**CSS Variables** (`src/app/globals.css`):
```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --muted: #f5f5f5;
  /* Add more custom variables */
}

.dark {
  --background: #0a0a0a;
  --foreground: #fafafa;
  /* Dark mode overrides */
}
```

**Theme Context** (`src/contexts/theme-context.tsx`):
- Modify theme toggle logic
- Add system preference detection
- Extend with additional theme modes (e.g., auto, high-contrast)

### Component Development Best Practices

1. **Use theme-aware Tailwind classes**
   ```tsx
   <div className="bg-card text-card-foreground border border-border">
     Content adapts to theme automatically
   </div>
   ```

2. **Follow responsive patterns**
   ```tsx
   <h1 className="text-2xl md:text-4xl lg:text-6xl">
     Scales across breakpoints
   </h1>
   ```

3. **Leverage shadcn/ui patterns**
   - Use Radix UI primitives for accessibility
   - Implement with `class-variance-authority` for variants

### Customizing the Interactive Grid

Edit `src/components/ui/interactive-grid.tsx`:
```tsx
// Adjust grid density
const gridSizeX = Math.ceil(visibleWidth / planeSize) + 2;
const gridSizeY = Math.ceil(visibleHeight / planeSize) + 2;

// Modify animation speed
const wave = Math.sin(Date.now() * 0.001 + index * 0.1) * 0.08;

// Change opacity and hover effects
material.opacity = Math.min(1, mesh.userData.originalOpacity + force * 0.25);
```

## Development Tips

### Hot Module Replacement
Turbopack provides instant HMR - changes appear in < 1 second without full page reload.

### Type Safety
```bash
# Check types without building
npx tsc --noEmit
```

### Debugging Three.js
```tsx
// Add to interactive-grid.tsx for debugging
console.log('Active meshes:', meshes.length);
console.log('Cached textures:', textureCache.size);
```

### Performance Monitoring
```tsx
// Add to layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## Project Roadmap

Current features are production-ready. Future enhancements may include:
- [ ] Content Management System integration
- [ ] User dashboard with authentication
- [ ] Real-time analytics tracking
- [ ] Interactive demo environment
- [ ] Multi-language support (i18n)
- [ ] Blog/Articles section

## Contributing

This is a private repository for Creation Rights. For internal development:
- Follow the existing code style and patterns
- Test responsive design across breakpoints
- Ensure accessibility standards are maintained
- Run linting before committing: `npm run lint`

## License

This project is **proprietary and confidential** to Creation Rights. All rights reserved.

## Contact

For questions or support regarding this codebase:
- **Website**: [creationrights.com](https://creationrights.com)
- **Email**: dev@creationrights.com
- **Documentation**: `/resources/documentation`

---

<div align="center">

**Creation Rights** - Empowering Digital Creators in the AI Era

Built with using Next.js 15, React 19, and Three.js

</div>