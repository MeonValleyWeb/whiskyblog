# Whisky Blog

A modern whisky blog built with Astro, featuring tasting notes, informational guides, and a clean, responsive design.

## 🥃 Features

- **Tasting Notes** - Detailed whisky reviews with structured tasting notes (nose, palate, finish)
- **Whisky Guides** - Informational Q&A content targeting common whisky questions
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Content Collections** - Organized content structure with Astro's content collections
- **SEO Optimized** - Guide posts target high-volume search queries
- **Affiliate Links** - Built-in support for stockist and affiliate link management

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MeonValleyWeb/whiskyblog.git
cd whiskyblog

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
whisky-blog/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── PostCard.astro
│   ├── content/           # Content collections
│   │   ├── posts/         # Blog posts & tasting notes
│   │   └── guides/        # Informational guides
│   ├── layouts/           # Page layouts
│   │   └── MainLayout.astro
│   └── pages/             # Routes
│       ├── blog/          # Blog listing & posts
│       ├── guides/        # Guide listing & pages
│       ├── index.astro    # Homepage
│       ├── about.astro
│       ├── contact.astro
│       └── subscribe.astro
├── public/                # Static assets
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
└── package.json
```

## 📝 Content Management

### Creating a Blog Post

Create a new `.md` file in `src/content/posts/`:

```markdown
---
title: "Your Tasting Title"
date: 2024-12-13T10:00:00.000Z
author: "Your Name"
excerpt: "A brief description of the tasting"
tags:
  - distillery
  - tasting
featured: true
image: "/images/your-image.jpg"
distillery: "Distillery Name"
region: "Highland"
rating: 4.5
bottles:
  - name: "Whisky Name"
    abv: "46%"
    tastingNotes:
      nose: "Tasting notes for nose"
      palate: "Tasting notes for palate"
      finish: "Tasting notes for finish"
      overall: "Overall impression"
stockists:
  - name: "Stockist Name"
    url: "https://example.com"
    affiliate: true
    note: "Additional info"
summary: "Overall tasting summary"
---

# Your Tasting Notes

Write your content here...
```

### Creating a Guide

Create a new `.md` file in `src/content/guides/`:

```markdown
---
title: "Can Whisky Do X?"
date: 2024-12-13T10:00:00.000Z
author: "Your Name"
excerpt: "Short answer to the question"
tags:
  - storage
  - beginners
featured: true
searchVolume: 590
keyword: "whisky"
relatedPosts:
  - slug-of-related-post
relatedGuides:
  - slug-of-related-guide
---

# Your Guide Content

Write your informational content here...
```

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **@tailwindcss/typography** for markdown prose styling
- **Custom color palette** (Wessex brand colors: gold, red, navy)

### Brand Colors

```js
'wessex-gold': {
  500: '#f59e0b', // Primary gold
}
'wessex-red': {
  500: '#dc2626', // Primary red
}
'wessex-navy': {
  700: '#334155', // Deep navy
}
```

## 🛠️ Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🧩 Key Dependencies

- **Astro** (v5.12.9) - Static site framework
- **Tailwind CSS** (v3.4.17) - Utility-first CSS
- **@tailwindcss/typography** - Prose styling for markdown

## 📋 Content Schema

### Posts Collection
- Supports 1-6 bottles per tasting
- Structured tasting notes (nose, palate, finish, overall)
- Stockist links with affiliate tracking
- Region, ABV, rating, and pricing metadata

### Guides Collection
- SEO metadata (search volume, keywords)
- Related content linking (posts and guides)
- Simpler schema focused on Q&A format

## 🔗 Routes

- `/` - Homepage
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog post
- `/guides` - Guides listing
- `/guides/[slug]` - Individual guide
- `/about` - About page
- `/contact` - Contact page
- `/subscribe` - Subscribe page

## 📄 License

This project is private and proprietary.

## 👤 Author

**Andrew**  
Wessex Whisky Blog

## 🤝 Contributing

This is a private project. Please contact the repository owner for any contributions or inquiries.
