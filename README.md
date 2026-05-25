# Padma Kunapareddy - Portfolio Website

A modern, interactive portfolio website featuring an animated timeline showcasing professional experience and volunteering activities.

## Features

✨ **Modern UI Design**
- Clean, professional interface with gradient accents
- Smooth animations and transitions
- Fully responsive design for all devices

🎨 **Interactive Timeline**
- Animated timeline with scroll-based reveals
- Separate sections for professional and volunteering experience
- Hover effects with 3D transformations
- Progress indicator that follows scroll position

🚀 **Performance Optimized**
- Lightweight vanilla JavaScript (no frameworks)
- Debounced scroll events
- Intersection Observer API for efficient animations
- Lazy loading support

📱 **Mobile Responsive**
- Hamburger menu for mobile devices
- Optimized layouts for tablets and phones
- Touch-friendly interactions

## Project Structure

```
Personal-Project/
├── index.html                                    # Main HTML file
├── styles.css                                    # All styling and animations
├── script.js                                     # Interactive functionality
├── README.md                                     # This file
├── Padma Kunapareddy Professional Resume.pdf     # Resume document
└── Padma Kunapareddy Volunteering Experience.pdf # Volunteering document
```

## Getting Started

### Option 1: Open Directly in Browser
Simply double-click `index.html` to open the website in your default browser.

### Option 2: Use a Local Server (Recommended)
For the best experience, use a local development server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Using VS Code:**
Install the "Live Server" extension and click "Go Live" in the bottom right.

Then open your browser and navigate to `http://localhost:8000`

## Customization Guide

### 1. Update Personal Information

**Edit `index.html`:**
- Update the hero section with your name and tagline
- Modify the About section with your personal description
- Update contact links (email, LinkedIn, GitHub)

### 2. Add Timeline Entries

**Professional Experience:**
Find the `#timeline` section and add new timeline items:

```html
<div class="timeline-item" data-aos="fade-up">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-date">2023 - Present</div>
        <h3 class="timeline-title">Your Position</h3>
        <h4 class="timeline-company">Company Name</h4>
        <p class="timeline-description">
            Your role description and achievements
        </p>
        <div class="timeline-tags">
            <span class="tag">Skill 1</span>
            <span class="tag">Skill 2</span>
        </div>
    </div>
</div>
```

**Volunteering Experience:**
Find the `#volunteering` section and add similar items with `volunteer-marker` class.

### 3. Customize Colors

**Edit `styles.css` - Update CSS variables:**
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary accent */
    --accent-color: #ec4899;       /* Highlight color */
    --volunteer-color: #10b981;    /* Volunteering theme */
}
```

### 4. Modify Animations

**Edit `script.js`:**
- Adjust animation speeds in the `observerOptions`
- Modify parallax effects in timeline hover handlers
- Customize particle count and behavior

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - No dependencies, pure JS
- **Intersection Observer API** - Efficient scroll animations
- **CSS Custom Properties** - Easy theming

## Features Breakdown

### Navigation
- Fixed navbar with scroll effects
- Smooth scrolling to sections
- Active state based on scroll position
- Mobile-responsive hamburger menu

### Hero Section
- Animated gradient background with floating orbs
- Typing effect for subtitle
- Particle effects
- Call-to-action buttons

### Timeline
- Alternating left/right layout (desktop)
- Scroll-based reveal animations
- 3D hover effects with parallax
- Progress indicator
- Tag system for skills/categories

### Documents Section
- Card-based layout for PDF downloads
- Zoom-in animations
- Direct download links

### Contact Section
- Social media links
- Icon-based design
- Hover animations

## Performance Tips

1. **Optimize Images**: If you add images, compress them before uploading
2. **Lazy Loading**: Images use `data-src` attribute for lazy loading
3. **Debouncing**: Scroll events are debounced for better performance
4. **CSS Animations**: Hardware-accelerated transforms for smooth animations

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Push your files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly with a custom URL

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Customization Checklist

- [ ] Update name in navbar and hero section
- [ ] Add your professional photo (optional)
- [ ] Fill in About section with your bio
- [ ] Add all professional experience entries
- [ ] Add all volunteering experience entries
- [ ] Update contact information (email, LinkedIn, GitHub)
- [ ] Customize color scheme if desired
- [ ] Test on mobile devices
- [ ] Verify PDF download links work
- [ ] Update meta tags for SEO (in `<head>`)

## Future Enhancements

Consider adding:
- Skills section with progress bars
- Projects/portfolio gallery
- Testimonials section
- Blog integration
- Dark mode toggle
- Multi-language support
- Contact form with backend
- Analytics integration

## License

This project is open source and available for personal use. Feel free to customize it for your own portfolio!

## Support

If you encounter any issues or have questions:
1. Check browser console for errors
2. Ensure all files are in the same directory
3. Try using a local server instead of opening directly
4. Clear browser cache and reload

---

**Built with ❤️ for showcasing professional journeys**

Last Updated: April 2024