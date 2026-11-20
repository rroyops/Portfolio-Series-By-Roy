# RAJAT — THE SERIES

A cinematic, streaming-inspired portfolio for **Rajat Roy**: Cyberexpert, Full-Stack Android Developer in training, Software Engineering student at Daffodil International University.

> Fictional streaming-platform look. Not affiliated with Netflix or any streaming service.

## Run it
Requires Node.js 18+.
```bash
npm install
npm run dev       # local
npm run build     # production build -> dist/
```
Deploy `dist/` to Vercel, Netlify or GitHub Pages.

## Updating content
All content lives in `src/data/portfolio.ts`.

- **Email / LinkedIn:** fill `profile.email` and `profile.links.linkedin` (buttons stay hidden while empty).
- **Project GitHub buttons:** add `github: 'https://github.com/rroyops/<repo>'` to a project.
- **Photo / share image:** replace `pic.png` (transparent cutout) and `banner.jpg`, then run `npm run images`.
