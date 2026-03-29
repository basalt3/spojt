# Spojt

> The new Atomic UI Registry

A high-contrast, minimalist foundation for building and distributing design systems. Engineered for technical speed and architectural clarity.

## ✨ Features

- **🎨 Atomic UI Components** - Modular, reusable design system components
- **🌙 Theme System** - Light/dark/system theme switching with smooth transitions
- **📱 Responsive Design** - Mobile-first approach with breakpoint-specific optimizations
- **⚡ Performance Optimized** - Lazy loading, code splitting, and efficient animations
- **🎛️ Configurable** - Feature toggles and customization via central configuration
- **🔧 TypeScript** - Full type safety and excellent developer experience
- **🎯 Minimalist** - Clean, high-contrast design that doesn't beg for attention

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Bun or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/basalt3/spojt.git
cd spojt

# Install dependencies
bun install

# Start development server
bun run dev
```

### Configuration

The application behavior can be controlled through `src/resources/spojt.config.js`:

```javascript
export const spojtConfig = {
  components: {
    navbar: true, // Show/hide navigation bar
    hero: true, // Show/hide hero section
    libraries: true, // Show/hide libraries showcase
    footer: true, // Show/hide footer
  },
  utilities: {
    themeSwitcher: true, // Show/hide theme switcher
    matrixFx: true, // Show/hide matrix effect
    autoScroll: false, // Control scroll speed (fast/slow)
    highlighter: true, // Show/hide text highlighter
  },
};
```

## 🎨 Design System

### Typography

The application uses Google Fonts with variable font weights:

- **Bitcount** - Primary display font
- **Questrial** - Headings and titles
- **Geist** - Body text and labels
- **Geist Mono** - Code and monospace text

### Color Palette

Built on the Once UI design system with:

- **Brand**: Yellow (configurable)
- **Accent**: Indigo (configurable)
- **Neutral**: Gray scale system
- **High contrast** ratios for accessibility

### Components

All components are built with:

- **Once UI Core** - Component library
- **Phosphor Icons** - Icon system
- **Tailwind CSS** - Utility styling
- **Shadcn UI** - Components and utilities
- **jsrepo** - JavaScript config library

### Responsive Breakpoints

Custom styles in `src/resources/custom.css`:

```css
/* Mobile-first responsive design */
@media (max-width: 895px) {
  /* Large tablets */
}
@media (max-width: 770px) {
  /* Tablets */
}
@media (max-width: 650px) {
  /* Large mobile */
}
@media (max-width: 420px) {
  /* Small mobile */
}
@media (max-width: 370px) {
  /* Very small mobile */
}
```

## 🛠️ Development

### Available Scripts

```bash
bun run dev      # Start development server
bun run build    # Build for production
bun run start    # Start production server
bun run lint     # Run ESLint
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Once UI](https://once-ui.com/) - Design system foundation
- [Phosphor Icons](https://phosphoricons.com/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Typography
- [Shadcn UI](https://ui.shadcn.com/) - Components and utilities
- [Tailwind CSS](https://tailwindcss.com/) - Utility styling
- [jsrepo](https://www.jsrepo.dev/) - JavaScript configuration library

---

<p align="center">
  <strong>Built with ✨ by <a href="https://basalt3.com">Basalt3</a></strong>
</p>
