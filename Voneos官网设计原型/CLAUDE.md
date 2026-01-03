# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Voneos official website prototype, converted from a Figma design (https://www.figma.com/design/jkTSSXU3DPD42Mv4JH48RJ/Voneos官网设计原型). It's a React-based single-page application showcasing a pet food brand with multiple pages including home, brand story, and scientific nutrition sections.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production (outputs to ./build)
npm run build
```

## Architecture Overview

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6 with SWC plugin for fast compilation
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4 (inline in index.css)
- **Animations**: Motion (Framer Motion) for scroll and hover effects
- **UI Components**: Radix UI primitives for accessible components

### Project Structure

```
src/
├── App.tsx                    # Main app with routing and ScrollToTop logic
├── main.tsx                   # React entry point
├── index.css                  # Tailwind CSS configuration
├── pages/                     # Route-level page components
│   ├── Home.tsx              # Homepage (sections: Hero, BrandStory, ProductShowcase, Features, Community)
│   ├── BrandPage.tsx         # Brand story page (/brand)
│   └── SciencePage.tsx       # Scientific nutrition page (/science)
├── components/
│   ├── layout/               # Shared layout components
│   │   ├── Navbar.tsx       # Navigation with route/anchor link handling
│   │   └── Footer.tsx       # Site footer
│   ├── home/                # Homepage-specific sections
│   │   ├── Hero.tsx
│   │   ├── BrandStory.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── Features.tsx
│   │   └── Community.tsx
│   ├── ui/                  # Reusable UI primitives from Radix UI
│   │   └── (accordion, button, dialog, etc.)
│   └── figma/              # Figma-specific components
│       └── ImageWithFallback.tsx
└── assets/                 # Images and static assets
    ├── LOGO.png
    ├── 超级符号-1.png
    ├── index/              # Homepage images
    ├── 品牌初心页/          # Brand page images
    ├── 科学营养/            # Science page images
    └── footer/             # Footer images
```

### Key Architectural Patterns

**1. Page Composition Pattern**
- Each page (Home, BrandPage, SciencePage) is composed of multiple section components
- Example: `Home.tsx` renders `<Hero />`, `<BrandStory />`, `<ProductShowcase />`, etc.
- Sections are self-contained and handle their own animations/interactions

**2. Navigation System** (src/components/layout/Navbar.tsx)
- Handles three link types:
  - Route links (e.g., `/brand`) → React Router `<Link>`
  - Anchor links on home page (e.g., `#products`) → standard `<a>` with scroll
  - Anchor links from other pages → navigates to `/#anchor` then scrolls
- Each nav item has independent hover state with decoration image
- Responsive mobile menu with hamburger icon

**3. Scroll Behavior**
- `ScrollToTop` component in `App.tsx` resets scroll position on route changes
- Prevents scroll position from persisting between page navigations

**4. Figma Asset Handling**
- Vite config includes extensive alias mapping for Figma-exported assets
- Assets use hash-based filenames (e.g., `1abdfc947e74cda16107687dfe9f2731688b0d12.png`)
- `ImageWithFallback` component provides graceful degradation for missing images

**5. Styling Approach**
- Tailwind CSS classes directly in JSX
- Custom color palette: `#FFF8F0` (cream background), `#8E5E16` (brand brown)
- Some components have dedicated CSS files (e.g., `features.css`, `footer.css`) for complex animations
- Inline styles used sparingly for dynamic values

## Important Implementation Notes

### When Making Changes

1. **Always check related code and configurations** before modifying to prevent conflicts with existing code
2. **If a modification fails**, record the failure reason to prevent repeating the same ineffective changes
3. **Per-page CSS files are allowed** - you can create separate CSS files for individual pages when needed (already done for features and footer)

### Vite Configuration
- Build output directory is `build/` (not `dist/`)
- Development server runs on port 3000 and auto-opens browser
- Extensive package version aliases for compatibility with Figma export

### Asset Management
- Images are organized by page/section in `src/assets/`
- Use Chinese folder names matching design sections (品牌初心页, 科学营养, etc.)
- Asset imports should use relative paths or Vite aliases

### Component Development
- UI components in `src/components/ui/` are Radix UI wrappers - avoid modifying their core functionality
- Use Motion (Framer Motion) for animations - check existing implementations for patterns
- Maintain accessibility with Radix UI primitives (keyboard navigation, ARIA attributes)
