# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies (if not already done)
```bash
cd Personal-Project/carbon-portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Visit: http://localhost:5173

### 3. Start Storybook
```bash
npm run storybook
```
Visit: http://localhost:6006

## 📋 What You'll See

### Main Application (localhost:5173)
- **Hero Section**: Welcome banner with call-to-action buttons
- **About Section**: Personal introduction
- **Professional Timeline**: Career history with IBM, Upland, Acoustic, etc.
- **Volunteering Timeline**: Community involvement
- **Documents Section**: Resume and volunteering PDF downloads
- **Contact Section**: Email, LinkedIn, GitHub links

### Storybook (localhost:6006)
- **Hero Component**: Interactive hero section with different themes
- **Navigation Component**: Header with responsive menu
- **TimelineItem Component**: Individual timeline entries with variants

## 🎨 Customization Quick Tips

### Update Your Information
Edit `src/data/experienceData.js`:
```javascript
export const professionalExperience = [
  {
    date: 'Your dates',
    title: 'Your title',
    company: 'Your company',
    description: 'Your description or array of bullet points',
    tags: ['Skill1', 'Skill2'],
  },
];
```

### Change Colors
Edit `src/App.scss` - Carbon uses design tokens:
```scss
:root {
  --cds-interactive-01: #0f62fe;  // Primary color
  --cds-interactive-02: #393939;  // Secondary color
}
```

### Add New Components
1. Create component: `src/components/MyComponent.jsx`
2. Create styles: `src/components/MyComponent.scss`
3. Create story: `src/components/MyComponent.stories.jsx`
4. Import in `App.jsx`

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run storybook        # Start Storybook

# Production
npm run build            # Build for production
npm run build-storybook  # Build Storybook
npm run preview          # Preview production build

# Testing (if configured)
npx vitest --project=storybook  # Run Storybook tests
```

## 📦 What's Included

### Carbon Components
- Header, Navigation, SideNav
- Buttons (primary, secondary)
- Tags (for skills)
- Theme provider
- Content wrapper

### Storybook Addons
- ✅ **Accessibility (a11y)**: Test for WCAG compliance
- ✅ **Docs**: Auto-generated documentation
- ✅ **Vitest**: Component testing
- ✅ **MCP**: Model Context Protocol integration
- ✅ **Chromatic**: Visual regression testing

## 🎯 Next Steps

1. **Customize Content**: Update `src/data/experienceData.js`
2. **Add Your PDFs**: Place resume PDFs in `public/` folder
3. **Modify Styles**: Edit component `.scss` files
4. **Test Components**: Use Storybook to develop in isolation
5. **Deploy**: Build and deploy to Netlify, Vercel, or GitHub Pages

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Storybook Not Loading
```bash
# Clear cache and reinstall
rm -rf node_modules .storybook-cache
npm install
npm run storybook
```

### Styles Not Applying
Make sure Carbon styles are imported in `main.jsx`:
```javascript
import './App.scss';
```

## 📚 Resources

- [Carbon Design System](https://carbondesignsystem.com/)
- [Storybook Documentation](https://storybook.js.org/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

---

**Ready to build? Run `npm run dev` and `npm run storybook`!** 🎉