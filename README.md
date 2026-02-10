# Harshit Mishra — Research & Documentation Hub

A minimal, brutalist-inspired personal website serving as a living document of learning, building, and exploring. This site acts as a "brain home" — documenting code, research, wildlife photography, and travel experiences.

## 🎨 Design Philosophy

- **Aesthetic**: Minimal brutalism with monospace touches, earth-toned accents
- **Typography**: JetBrains Mono (technical feel) + Crimson Pro (elegant serif)
- **Purpose**: Documentation-first, not portfolio-first
- **Integration**: Seamless connection with GitHub Wiki for long-form content

## 🚀 Features

- **Dynamic Content**: Projects and posts loaded from JSON files
- **GitHub Wiki Integration**: Long-form writing lives in Wiki pages
- **Responsive Design**: Mobile-first, accessible across devices
- **Smooth Animations**: Subtle scroll-triggered animations and transitions
- **Grain Texture**: Organic texture overlay for visual depth
- **Performance**: Lightweight, fast-loading, minimal dependencies

## 📁 Project Structure

```
portfolio/
├── index.html          # Main landing page
├── style.css           # Complete styling with animations
├── script.js           # Dynamic content loading
├── projects.json       # Project data
├── posts.json          # Quick notes/posts data
└── README.md          # This file
```

## 🛠️ Setup for GitHub Pages

### 1. Create Repository
```bash
# Create new repo named "portfolio" on GitHub
# or use your username repo: username.github.io

git init
git add .
git commit -m "Initial commit: Brain home setup"
git branch -M main
git remote add origin https://github.com/mishraxharshit/portfolio.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository settings
2. Navigate to **Pages** section
3. Under "Source", select **main** branch
4. Select **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://mishraxharshit.github.io/portfolio/`

### 3. Setup Wiki for Long-Form Content

GitHub Wiki is perfect for documentation, research notes, and technical writing.

**To create Wiki pages:**

1. Go to your repository on GitHub
2. Click the **Wiki** tab
3. Click **Create the first page**
4. Write your content in Markdown

**Recommended Wiki Structure:**
```
Home
├── Research-Notes
│   ├── Machine-Learning
│   ├── Distributed-Systems
│   └── Data-Structures
├── Technical-Documentation
│   ├── Project-Architecture
│   └── Code-Snippets
├── Photography-Journal
│   ├── Wildlife-Encounters
│   └── Travel-Logs
└── Learning-Log
    ├── 2026
    └── 2025
```

**Link to Wiki from your site:**
- Main wiki: `https://github.com/mishraxharshit/portfolio/wiki`
- Specific page: `https://github.com/mishraxharshit/portfolio/wiki/Page-Name`

### 4. Customize Content

#### Update Projects (`projects.json`):
```json
{
  "projects": [
    {
      "title": "Your Project Name",
      "description": "Brief description of the project",
      "tags": ["Python", "ML", "Research"],
      "date": "2026-02-10",
      "link": "https://github.com/username/project",
      "color": "#00F2FF"
    }
  ]
}
```

#### Update Posts (`posts.json`):
```json
[
  {
    "title": "Your Note Title",
    "date": "Feb 2026",
    "link": "https://github.com/mishraxharshit/portfolio/wiki/Note-Title"
  }
]
```

## 🎯 Content Strategy

### Website (GitHub Pages)
Use for:
- Quick project showcases
- Recent updates and notes
- Photography previews
- Navigation hub

### Wiki Pages
Use for:
- Research documentation
- Technical tutorials
- Detailed project write-ups
- Learning journals
- Photography stories
- Travel narratives

## 🔧 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --color-bg: #faf9f7;        /* Background */
    --color-text: #1a1a1a;      /* Text */
    --color-accent: #d4a574;    /* Accent (earth tone) */
    --color-secondary: #6b7280; /* Secondary text */
}
```

### Fonts
Change in the `<head>` of `index.html` and CSS:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Images
Replace gallery images with your own:
- Update image URLs in `index.html` under `.gallery-item`
- Use your own wildlife/photography URLs
- Recommended: Use GitHub Issues to host images, or integrate with a CDN

## 📸 Adding Photography

You have several options:

1. **Use Unsplash API** (free):
```html
<img src="https://source.unsplash.com/800x600/?wildlife,tiger" alt="Wildlife">
```

2. **GitHub Issues as Image Host**:
- Create a new issue in your repo
- Drag and drop images
- Copy the generated URL
- Use in your HTML

3. **External CDN** (ImgBB, Cloudinary, etc.)

## 🔗 Integration Tips

### Linking Wiki Pages from Main Site
```html
<a href="https://github.com/mishraxharshit/portfolio/wiki/Research-Notes" target="_blank">
    Read full research notes →
</a>
```

### Embedding GitHub Stats (Optional)
Add to footer or about section:
```html
<img src="https://github-readme-stats.vercel.app/api?username=mishraxharshit&show_icons=true&theme=minimal" alt="GitHub Stats">
```

## 🚀 Deployment Workflow

```bash
# Make changes locally
git add .
git commit -m "Update: [description]"
git push origin main

# GitHub Pages auto-deploys from main branch
# Changes appear live in ~1-2 minutes
```

## 📝 Writing Workflow

**For quick notes/updates:**
1. Add to `posts.json`
2. Push to GitHub
3. Appears on main site

**For detailed documentation:**
1. Go to Wiki tab on GitHub
2. Create/edit page in Markdown
3. Link from main site if needed

## 🎨 Design Decisions Explained

- **Monospace font**: Technical, research-oriented identity
- **Earth tones**: Connection to nature photography
- **Grain overlay**: Organic, tactile feel
- **Minimal animations**: Focus on content, not distraction
- **Brutalist layout**: Raw, honest, functional

## 🔮 Future Enhancements

- [ ] Add photography gallery page with Lightbox
- [ ] Integrate GitHub API for automatic project updates
- [ ] Add RSS feed for posts
- [ ] Dark mode toggle
- [ ] Search functionality for Wiki content
- [ ] Analytics integration (privacy-friendly)

## 📄 License

MIT License - feel free to fork and customize!

## 🤝 Contributing

This is a personal documentation site, but suggestions are welcome! Open an issue or PR.

---

**Built with curiosity** 🔬📸🌿

For questions: [GitHub Issues](https://github.com/mishraxharshit/portfolio/issues)
