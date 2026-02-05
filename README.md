# Harshit Mishra - Research & Development Portfolio

**For the people, by the people. Knowledge should be free, accessible, and actionable.**

A minimal, Wikipedia-inspired knowledge wiki with hacker aesthetics. Built to showcase research, projects, and knowledge in the most direct, accessible way possible.

## 🎯 Philosophy

- **Minimal**: No unnecessary elements. Content first.
- **Accessible**: Knowledge should be free and easy to access.
- **Professional**: Respect earned through work, not stories.
- **Privacy-conscious**: Open to share, careful with personal data.
- **Open source**: Everything visible, everything improvable.

## 🎨 Design

- **Color Scheme**: Black/White with Matrix green (#00ff00) accents
- **Typography**: IBM Plex Mono (code) + IBM Plex Sans (content)
- **Layout**: Wikipedia-style article with sidebar
- **Effects**: Matrix rain background, smooth animations
- **Responsive**: Works on all devices

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. **Create Repository**
   ```bash
   Repository name: yourusername.github.io
   Make it public
   ```

2. **Upload Files**
   - Upload `index.html`, `main.css`, `main.js`, `README.md`
   - Commit with message: "Initial launch"

3. **Enable GitHub Pages**
   - Settings → Pages → Source: main branch → Save

4. **Visit**
   ```
   https://yourusername.github.io
   ```

### Option 2: Local Development

```bash
# Clone or download
git clone https://github.com/yourusername/yourusername.github.io.git

# Open in browser
python -m http.server 8000
# Visit: http://localhost:8000
```

## 📂 Structure

```
├── index.html          # Main HTML structure
├── main.css            # Styling (black/white/green theme)
├── main.js             # Matrix effect + interactions
└── README.md           # This file
```

## 🔧 Customization

### 1. Personal Information

Update in `index.html`:
- **Line 47-58**: Infobox table (role, education, location)
- **Line 68-77**: Overview text
- **Line 82**: Philosophy quote
- **Line 184-199**: Research papers
- **Line 208-228**: Projects
- **Line 445-467**: Social links and email

### 2. Stats (Sidebar)

Update `data-count` attributes (line 109-120):
```html
<span class="stat-value" data-count="12">0</span>
```
Numbers will auto-animate on scroll.

### 3. Add Research Paper

Copy this template (around line 201):
```html
<article class="research-paper">
    <div class="paper-header">
        <h3 class="paper-title">Your Research Title</h3>
        <span class="paper-status status-completed">Completed</span>
    </div>
    <div class="paper-meta">
        <span class="meta-item">2026</span>
        <span class="meta-item">Category</span>
    </div>
    <p class="paper-abstract">
        Description of your research...
    </p>
    <div class="paper-stats">
        <div class="stat">Key Metric</div>
        <div class="stat">Data Source</div>
    </div>
    <a href="#" class="paper-link">View Research →</a>
</article>
```

### 4. Add Project

Copy this template (around line 221):
```html
<div class="project-item">
    <div class="project-header">
        <h3 class="project-name">Project Name</h3>
        <div class="project-badges">
            <span class="badge badge-active">Active</span>
        </div>
    </div>
    <p class="project-desc">Description...</p>
    <div class="project-tech">
        <code>Python</code>
        <code>ML</code>
    </div>
    <div class="project-links">
        <a href="#" class="link">GitHub</a>
        <a href="#" class="link">Demo</a>
    </div>
</div>
```

### 5. Knowledge Base Topics

Edit links in knowledge cards (line 248-282).

### 6. Color Customization

Edit `main.css` variables (line 7-9):
```css
:root {
    --color-primary: #00ff00;  /* Change to any color */
}
```

## ✨ Features

### Matrix Rain Background
- Animated falling characters
- Customizable in `main.js`
- Adjusts to screen size

### Smooth Animations
- Scroll-triggered counter animations
- Skill bar progress animation
- Fade-in effects on scroll
- Smooth section transitions

### Keyboard Shortcuts
- **Ctrl/Cmd + K**: Focus navigation
- **Konami Code** (↑↑↓↓←→←→BA): Matrix mode

### Console Easter Eggs
Open browser console (F12) for terminal messages.

## 📱 Responsive Design

Breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: < 768px

## 🔍 SEO Ready

- Semantic HTML5
- Meta descriptions
- Proper heading hierarchy
- Alt tags (add for images)

## ♿ Accessibility

- Skip to content link
- Keyboard navigation
- ARIA labels (add where needed)
- High contrast theme
- Screen reader friendly

## 🎯 Use Cases

Perfect for:
- Researchers
- Developers
- CTOs
- Technical writers
- Knowledge curators
- Open source contributors

## 📊 Sections

1. **About** - Wikipedia-style intro with infobox
2. **Research** - Academic work, papers
3. **Projects** - Development work, code
4. **Knowledge Base** - Curated topics, resources
5. **Data** - Visualizations, charts, stats
6. **Media** - Posts, videos, social presence
7. **Connect** - Contact methods

## 🔐 Privacy

- No tracking scripts
- No cookies
- No analytics (add if you want)
- Optional PGP key for secure communication

## 🤝 Contributing

This is a personal portfolio, but:
- Report bugs via issues
- Suggest improvements
- Fork and customize for yourself

## 📜 License

MIT License - Free to use and modify

## 🙏 Credits

- **Design Inspiration**: Wikipedia, Hacker aesthetics
- **Fonts**: IBM Plex family (Google Fonts)
- **Matrix Effect**: Custom JavaScript implementation

## 📞 Support

For issues:
1. Check the code
2. Read the console (F12)
3. Test in different browsers
4. Ask via GitHub issues

## 🎓 Learning Resources

Built with:
- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- No frameworks needed

## 🚀 Performance

- **Load time**: < 2s
- **Lighthouse score**: 95+
- **No external dependencies** (except fonts)
- **Minimal JavaScript**: ~300 lines

## 📝 Updates

To update your portfolio:
```bash
# Edit files
# Then commit and push
git add .
git commit -m "Updated projects"
git push
```

GitHub Pages updates in 1-2 minutes.

## 💡 Tips

1. **Keep it updated**: Add projects regularly
2. **Link to work**: GitHub repos, live demos
3. **Write clear descriptions**: Help others understand
4. **Show data**: Metrics, results, impact
5. **Be consistent**: Update all sections

## 🎯 Philosophy in Action

> "For the people, by the people."

- Research is shared openly
- Knowledge is documented clearly
- Code is available for learning
- Privacy is respected
- Everything is accessible

---

**Built with minimal design, maximum respect for knowledge.**

Made by Harshit Mishra | [GitHub](https://github.com/harshitmishra) | 2026
