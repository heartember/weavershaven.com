# Charlene Chow Weaver - Basket Weaving Website

A beautiful, handcrafted website for basket weaving lessons and team building experiences in the Bay Area.

## 🎨 Design Features

- **Organic, handcrafted aesthetic** with earth tones and natural textures
- **Responsive design** that works beautifully on all devices
- **Smooth animations** and scroll effects for an engaging experience
- **Newsletter subscription form** ready for email service integration
- **Accessibility-focused** with semantic HTML and proper contrast ratios

## 🌐 Suggested Domain Names

Here are some catchy, memorable domain name suggestions for Charlene's basket weaving business:

### Top Recommendations:
1. **WeaversHaven.com** - Evokes a peaceful, welcoming space for learning
2. **TheWovenPath.com** - Suggests a journey and artistic path
3. **BasketArtisan.com** - Professional and craft-focused
4. **ThreadAndCane.com** - References the materials and techniques
5. **WeavingCircle.com** - Community-focused, warm and inclusive

### Alternative Options:
- **HandsAndBaskets.com** - Personal and tactile
- **BayAreaBaskets.com** - Location-specific for local SEO
- **CharleneWeaves.com** - Personal brand building
- **WovenWisdom.com** - Emphasizes teaching and tradition
- **TheBasketStudio.com** - Professional workshop feel
- **CaneAndColor.com** - Highlights the hand-dyed aspect
- **WeavingTraditions.com** - Honors the craft's heritage
- **BasketByHand.com** - Clear and descriptive
- **TheWeavingLoft.com** - Artistic studio atmosphere
- **CircleBasketry.com** - Modern and memorable

### Check Availability:
Before registering, check domain availability at:
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [Hover](https://www.hover.com)

## 📧 Email Newsletter Setup

The website includes a newsletter subscription form. To make it functional, you'll need to integrate an email marketing service. Here are recommended options:

### Recommended Email Services:

1. **Buttondown** (https://buttondown.email)
   - Simple, clean interface
   - Great for independent creators
   - Free tier: up to 100 subscribers
   - No ads in emails
   - Easy API integration

2. **ConvertKit** (https://convertkit.com)
   - Designed for creators
   - Free tier: up to 1,000 subscribers
   - Visual automation builder
   - Landing pages included

3. **Mailchimp** (https://mailchimp.com)
   - Most popular option
   - Free tier: up to 500 subscribers
   - Easy drag-and-drop email builder
   - Good analytics

4. **Substack** (https://substack.com)
   - Best if planning a full newsletter
   - Completely free (takes % if you charge)
   - Built-in payment processing
   - Simple, focused on writing

### Integration Steps:

1. Choose an email service and create an account
2. Get your API key or form endpoint
3. Update the form submission code in `script.js`
4. Test the integration thoroughly

Example integration code is included in `script.js` with comments.

## 🚀 Deployment Options

### Easy Options (No Coding Required):

1. **Netlify** (https://www.netlify.com) - RECOMMENDED
   - Drag and drop deployment
   - Free SSL certificate
   - Custom domain support
   - Free tier is generous
   - Steps:
     1. Create account at netlify.com
     2. Drag the website folder to Netlify
     3. Connect custom domain

2. **GitHub Pages** (https://pages.github.com)
   - Free hosting
   - Custom domain support
   - Requires basic Git knowledge
   - Steps:
     1. Create GitHub account
     2. Create repository named `username.github.io`
     3. Upload files
     4. Enable GitHub Pages in settings

3. **Vercel** (https://vercel.com)
   - Similar to Netlify
   - Fast deployment
   - Free tier available

### Traditional Hosting:
- **Bluehost**, **SiteGround**, **DreamHost** - Traditional web hosts with cPanel
- Upload files via FTP to `public_html` folder

## 📁 File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 🎯 Next Steps

1. **Choose and register a domain name**
2. **Select an email service** for the newsletter
3. **Deploy the website** to a hosting platform
4. **Add actual photos** of Charlene's baskets to replace placeholders
5. **Configure email service** API integration
6. **Test on multiple devices** (phone, tablet, desktop)
7. **Set up Google Analytics** (optional) for visitor tracking

## 📸 Adding Photos

To add actual basket photos:

1. Take high-quality photos (at least 1200px wide)
2. Optimize images using:
   - [TinyPNG](https://tinypng.com) - compress without quality loss
   - [Squoosh](https://squoosh.app) - advanced image optimization
3. Replace the `.basket-placeholder` section in the HTML
4. Add an `<img>` tag with your photo

Example:
```html
<div class="gallery-frame">
    <img src="your-basket-photo.jpg" alt="Hand-dyed cane basket in teal and brown">
    <div class="gallery-caption">
        <!-- caption content -->
    </div>
</div>
```

## 🎨 Customization Tips

### Changing Colors:
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --cream: #f5f1e8;
    --deep-teal: #4a7c7e;
    /* etc. */
}
```

### Changing Fonts:
The site uses Google Fonts (Cormorant and Lora). To change:
1. Visit [Google Fonts](https://fonts.google.com)
2. Select new fonts
3. Replace the `<link>` in `index.html`
4. Update font variables in `styles.css`

### Adding More Content:
- Duplicate sections in `index.html`
- Add new sections between `<main>` tags
- Copy styling from existing sections

## 💡 Tips for Charlene

- **Update content regularly** - Add new basket photos as you create them
- **Send newsletters monthly** - Share tips, upcoming classes, inspiration
- **Encourage reviews** - Ask students to share their experiences
- **Social media integration** - Keep Instagram active and link from site
- **SEO basics** - Use descriptive alt text on images, update page title/description
- **Local SEO** - List on Google My Business for local searches

## 📞 Support

For questions about customization or updates, feel free to reach out!

---

Built with care for Charlene Chow Weaver | Hand-woven websites for handcrafted businesses ✨
