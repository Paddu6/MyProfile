# Carbon React Portfolio with Storybook

A modern, professional portfolio website built with React, Carbon Design System, and Storybook for component documentation.

## 🚀 Features

- **Carbon Design System**: Built with IBM's Carbon Design System for a professional, accessible UI
- **React 18**: Modern React with hooks and functional components
- **Vite**: Lightning-fast build tool and dev server
- **Storybook**: Interactive component documentation and development
- **Responsive Design**: Mobile-first approach with Carbon's responsive utilities
- **SCSS Modules**: Organized styling with Carbon's design tokens
- **TypeScript Ready**: Easy to migrate to TypeScript if needed

## 📦 Project Structure

```
carbon-portfolio/
├── .storybook/              # Storybook configuration
│   ├── main.js
│   └── preview.js
├── src/
│   ├── components/          # React components
│   │   ├── Hero.jsx
│   │   ├── Hero.scss
│   │   ├── Hero.stories.jsx
│   │   ├── Navigation.jsx
│   │   ├── Navigation.stories.jsx
│   │   ├── TimelineItem.jsx
│   │   ├── TimelineItem.scss
│   │   └── TimelineItem.stories.jsx
│   ├── data/               # Data files
│   │   └── experienceData.js
│   ├── App.jsx             # Main app component
│   ├── App.scss            # Global styles
│   └── main.jsx            # Entry point
├── package.json
└── vite.config.js
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Start Storybook:**
   ```bash
   npm run storybook
   ```
   Storybook will be available at `http://localhost:6006`

## 📚 Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for deployment

## 🎨 Carbon Design System

This project uses Carbon Design System components including:

- **Header/Navigation**: Carbon's Header component with responsive navigation
- **Buttons**: Primary and secondary button variants
- **Tags**: For skills and categories
- **Theme**: Carbon's g10 (light) theme
- **Grid System**: Carbon's responsive grid (can be added)
- **Typography**: Carbon's type scale and font families

### Carbon Components Used

- `Header`, `HeaderName`, `HeaderNavigation`, `HeaderMenuItem`
- `HeaderMenuButton`, `HeaderGlobalBar`, `SideNav`, `SideNavItems`, `SideNavLink`
- `Button` with size and kind variants
- `Tag` with type and size variants
- `Content` wrapper
- `Theme` provider

## 📖 Storybook

Storybook provides interactive documentation for all components:

### Available Stories

1. **Hero Component**
   - Default view
   - With custom theme

2. **Navigation Component**
   - Default state
   - With scrolled state

3. **TimelineItem Component**
   - Professional experience
   - Volunteer experience
   - With list description
   - With string description
   - Minimal info

### Viewing Stories

1. Start Storybook: `npm run storybook`
2. Navigate to `http://localhost:6006`
3. Browse components in the sidebar
4. Interact with controls to modify props
5. View documentation and code examples

## 🎯 Customization

### Update Personal Information

Edit `src/data/experienceData.js` to update:
- Professional experience
- Volunteering experience
- Skills and tags

### Modify Components

Each component has its own file structure:
- `.jsx` - Component logic
- `.scss` - Component styles
- `.stories.jsx` - Storybook documentation

### Change Theme

Edit `src/App.jsx` and `.storybook/preview.js` to change the Carbon theme:
```jsx
<Theme theme="g10">  // Options: g10, g90, g100, white
```

### Customize Colors

Carbon uses design tokens. Override them in `src/App.scss`:
```scss
@use '@carbon/react' with (
  $theme: (
    interactive-01: #0f62fe,  // Primary color
    interactive-02: #393939,  // Secondary color
  )
);
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy Storybook

```bash
npm run build-storybook
```

The Storybook build will be in the `storybook-static/` directory.

### Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use GitHub Actions to deploy
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `.storybook/main.js` - Storybook main configuration
- `.storybook/preview.js` - Storybook preview configuration with Carbon theme
- `package.json` - Dependencies and scripts

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Carbon's responsive utilities are used throughout for consistent behavior.

## ♿ Accessibility

Built with accessibility in mind:
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Carbon's built-in accessibility features
- Proper heading hierarchy
- Focus management

## 🧪 Testing

To add testing:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

Create test files alongside components:
```
Hero.test.jsx
Navigation.test.jsx
TimelineItem.test.jsx
```

## 📝 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For issues or questions:
1. Check the Carbon Design System documentation: https://carbondesignsystem.com/
2. Check the Storybook documentation: https://storybook.js.org/
3. Review the Vite documentation: https://vitejs.dev/

---

**Built with ❤️ using Carbon Design System and Storybook**
