# Pacific Academy Website

Modern, WCAG AA compliant website for Pacific Academy K-12 Private School.

## 📁 Project Structure

```
pacific_academy/
├── index.html          # Homepage
├── css/
│   └── styles.css      # All styles (shared across pages)
├── js/
│   └── main.js         # All JavaScript functionality
├── images/             # Upload your images here
│   ├── carousel/       # Hero carousel images
│   ├── gallery/        # General photo gallery
│   └── logos/          # School logos and icons
└── README.md           # This file
```

## 🚀 Quick Start

1. **To view the site**: Open `index.html` in your browser
2. **To add images**: Place files in the `images/` folder
3. **To create new pages**: Copy `page-template.html` and customize

## 📸 Managing Images

### Upload New Images

1. Place images in the appropriate folder:
   - Carousel/hero images → `images/carousel/`
   - Gallery photos → `images/gallery/`
   - Logos → `images/logos/`

2. Update the HTML to reference your images:
   ```html
   <!-- Instead of placeholder -->
   <img src="https://via.placeholder.com/..." alt="...">

   <!-- Use your uploaded image -->
   <img src="images/carousel/campus-view.jpg" alt="Campus view">
   ```

### Image Guidelines

- **Carousel images**: 1920x600px (16:9 aspect ratio)
- **Gallery images**: 800x600px recommended
- **Logos**: PNG format with transparent background
- **File size**: Keep under 500KB per image (compress if needed)
- **Formats**: JPG for photos, PNG for logos/graphics

## 🎨 Customizing Content

### Homepage Sections

Edit `index.html` to update:

1. **Carousel Slides** (lines 1024-1046)
   - Change headings, text, and images
   - Add/remove slides by copying the `.carousel-slide` div

2. **Vision & Mission** (lines 1060-1079)
   - Update vision, mission, and values text

3. **College Admissions** (lines 1084-1135)
   - Update stats (100%, 85%, $2.5M, 1450)
   - Modify university list

4. **Calendar Events** (lines 1140-1208)
   - Add/edit dates and events
   - Follow the same HTML structure

5. **Testimonials** (lines 1213-1239)
   - Update quotes and author info
   - Add more by copying `.testimonial-card` divs

### Colors & Branding

Edit `css/styles.css` (lines 2-11) to change colors:

```css
:root {
    --primary-blue: #0c3c60;      /* Main brand color */
    --accent-gold: #d4a574;        /* Accent color */
    /* ... more variables ... */
}
```

### Translations

The site supports English, Spanish, and Korean. To add/edit translations:

```html
<h1 data-lang-en="English text"
    data-lang-es="Spanish text"
    data-lang-ko="Korean text">
    English text
</h1>
```

## 📄 Creating New Pages

1. Copy `page-template.html`
2. Rename it (e.g., `about.html`)
3. Update the page-specific content
4. Link to it from the navigation in `index.html`

## 🌐 Going Live

### Option 1: Static Hosting (Simple)

Upload to any of these free services:
- **Netlify**: Drag & drop your folder
- **GitHub Pages**: Push to GitHub repository
- **Vercel**: Connect your GitHub repo

### Option 2: With CMS (For Easy Updates)

For non-technical users to manage content:

1. **Netlify CMS** (Recommended)
   - Free, easy to set up
   - Provides admin interface for editing
   - No coding needed for updates

2. **Contentful**
   - Good for larger sites
   - API-based content management

3. **Forestry.io**
   - Simple Git-based CMS
   - Great for markdown content

### Option 3: Traditional Web Hosting

Upload via FTP to services like:
- Bluehost
- SiteGround
- HostGator

## 🔧 Advanced: Setting Up a CMS

### Quick Setup with Netlify CMS

1. Create `admin/config.yml`:
```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "images"
public_folder: "/images"

collections:
  - name: "pages"
    label: "Pages"
    files:
      - label: "Homepage"
        name: "home"
        file: "index.html"
        fields:
          - {label: "Title", name: "title", widget: "string"}
          - {label: "Body", name: "body", widget: "markdown"}
```

2. Deploy to Netlify
3. Enable Identity and Git Gateway
4. Access admin panel at `yoursite.com/admin`

## 💡 Tips for Content Management

### Best Practices

- **Backup regularly**: Keep copies of your files
- **Optimize images**: Use tools like TinyPNG before uploading
- **Test on mobile**: Always check responsiveness
- **Update calendar**: Remove past events monthly

### Common Tasks

**Adding a news article**:
1. Create a new HTML file in root
2. Copy structure from `page-template.html`
3. Add link in navigation

**Updating contact info**:
1. Edit footer section in `index.html` (line 1242)
2. Update phone, email, address

**Changing school hours**:
1. Find footer "School Hours" section
2. Update times (currently 8:00 AM - 3:30 PM)

## 🎯 Accessibility

This site meets WCAG AA standards:
- ✅ Color contrast ratios
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Responsive design

## 📊 File Sizes

- **Homepage**: 28KB
- **CSS**: 20KB
- **JavaScript**: 6KB
- **Total**: 54KB (94% smaller than original!)

## 🆘 Need Help?

- Check browser console (F12) for errors
- Validate HTML: https://validator.w3.org
- Test accessibility: https://wave.webaim.org

## 📝 License

Custom website for Pacific Academy. All rights reserved.
