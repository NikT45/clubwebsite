# Fordham CS Club website

A simple Next.js site for the club. Clone it, add a page, open a pull request.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Add a page

1. Make a folder in `src/app` named after the URL you want. For example, `src/app/projects` becomes `/projects`.
2. Add a `page.tsx` in that folder that exports a React component. Copy `src/app/about/page.tsx` as a starting point.
3. Add a link to your page in `src/components/nav.tsx`.
4. Commit, push, and open a pull request.

## How it is put together

- `src/app/layout.tsx` wraps every page with the nav, footer, and Inter font.
- `src/app/globals.css` holds the color variables for light and dark mode.
- `src/components/theme-toggle.tsx` switches between light and dark. Light is the default. The choice is saved in the browser.
- Styling is Tailwind CSS. Use the `text-muted`, `border-border`, `bg-background`, and `text-foreground` classes so your page looks right in both themes.

## Scripts

- `npm run dev` starts the dev server.
- `npm run build` makes a production build.
- `npm run lint` runs ESLint.
