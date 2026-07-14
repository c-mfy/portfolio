# Portfolio Website

A minimalist portfolio (CS + Industrial Design @ Georgia Tech) built with
**React + Vite + React Router**. Cute, clean, Apple/Pinterest-leaning, with a
light-blue accent (`#d9f7ff`).

## Run it

```bash
npm install      # install dependencies (one time)
npm run dev      # start the dev server → http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

> Requires Node.js 18+ (you have it if `node -v` works).

## Where to edit things

| What you want to change            | File                                        |
|------------------------------------|---------------------------------------------|
| Your name / brand in the nav       | `src/components/Navbar.jsx`, `index.html`   |
| Global colors, fonts, spacing      | `src/index.css` (the `:root` tokens up top) |
| Bio + photo                        | `src/pages/About.jsx`                       |
| Social links (GitHub/LinkedIn/email) | `src/components/SocialLinks.jsx`          |
| **Add / edit projects**            | `src/data/projects.js`                      |
| **Add / edit art pieces**          | `src/data/artworks.js`                      |
| Resume PDF                         | replace `public/resume.pdf`                 |
| Photo / video gallery              | `src/pages/Photography.jsx`                 |
| Fun facts + instruments            | `src/pages/Extras.jsx`                      |
| The "More" dropdown items          | `MORE_LINKS` in `src/components/Navbar.jsx` |

## Adding a project (or art piece)

Open `src/data/projects.js` and copy one object block:

```js
{
  id: "project-6",                 // must be unique; becomes the URL
  title: "My New Project",
  blurb: "One-line description.",
  tags: ["React", "Figma"],        // add/remove framework tags freely
  image: "/images/project6.jpg",   // put the file in /public/images, or "" for a placeholder
  detail: ["Paragraph one.", "Paragraph two."],
  links: [{ label: "GitHub", url: "https://..." }],
}
```

Images live in `public/images/` and are referenced as `/images/filename.jpg`.

## Project structure

```
public/
  favicon.svg
  resume.pdf          ← replace with yours
  images/             ← your photos & thumbnails
src/
  main.jsx            ← app entry
  App.jsx             ← routes
  index.css           ← design tokens (colors/fonts) + base styles
  data/
    projects.js       ← project content
    artworks.js       ← art content
  components/
    Navbar.jsx/.css   ← top nav + "More" dropdown
    Footer.jsx
    Card.jsx/.css     ← one Pinterest-style card
    CardGrid.jsx/.css ← responsive masonry grid
    SocialLinks.jsx/.css
    instruments/
      audio.js        ← shared Web Audio helper
      Piano.jsx/.css
      Guitar.jsx/.css
      Flute.jsx/.css
  pages/
    About.jsx/.css
    Projects.jsx
    Art.jsx
    GalleryDetail.jsx/.css   ← shared detail page for projects + art
    Resume.jsx/.css
    Photography.jsx/.css
    Extras.jsx/.css
```

The instruments use the browser's built-in Web Audio API (no libraries), so
they make real sound on click/keyboard. Feel free to tweak `audio.js` if you
want different timbres.
