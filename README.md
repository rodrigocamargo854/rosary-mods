# Terço Bizantino App

A modern web application designed for a digital prayer experience of the Byzantine Rosary. Built with Next.js, Tailwind CSS, and Framer Motion, it offers a clean, minimal, and interactive way to meditate through daily jaculatory prayers.

## Overview

This app allows users to select specific sets of prayers based on different days of the week. Each mystery opens a meditative flow, including progress tracking for repetitions. The experience is designed to be peaceful, focused, and mobile-first.

## Features

- Interactive UI with smooth animations (Framer Motion)
- Displays mysteries organized by day (Monday, Tuesday, Friday, Saturday)
- Dynamic progress indicator for each prayer (10 repetitions)
- Modal popup with focus lock for each selected mystery
- Fully responsive design
- Light performance, optimized images (Next/Image)

## Tech Stack

- Next.js
- Tailwind CSS
- Framer Motion
- React Icons
- Vercel (optional for deployment)

## Project Structure

```
/app
/components         # UI Components (if created)
/public             # Static assets (images)
/styles             # TailwindCSS config and global styles
/pages              # Next.js routes
```

## API / Data

All prayer data is hardcoded in the component as an array of objects:

```js
const misterios = [
  {
    grupo: "(segunda-feira)",
    misterios: [
      { title: "1ª Jaculatória", description: "Jesus, me ajuda" },
      ...
    ]
  },
  ...
];
```

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/yourusername/terco-bizantino.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

## Deployment

Deploy easily with platforms like **Vercel**, **Netlify**, or your hosting provider.

## License

MIT License. Free to use and modify.

## Credits

Inspired by the tradition of the Byzantine Rosary. All prayers and formulas used here are adapted for personal meditation purposes.