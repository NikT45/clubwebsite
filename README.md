# Fordham CS Club website

A simple Next.js site for the club. Clone it, add your page, open a pull request.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Add your member page

1. Add yourself to the array in `src/members.ts`. Pick a short slug, like `jane`. Only `name` and `slug` are required.
2. Copy the folder `src/app/members/nik` to `src/app/members/jane`.
3. Edit `page.tsx` inside it. Keep `<MemberHeader slug="jane" />` at the top so your name, role, and links show up. Put anything you want below it.
4. Commit, push, and open a pull request.

Your page shows up at `/members/jane` and in the list on `/members` and the home page.

## Add any other page

1. Make a folder in `src/app` named after the URL you want, with a `page.tsx` inside that exports a React component.
2. Add a link to it in `src/components/nav.tsx`.

## How it is put together

- `src/app/layout.tsx` wraps every page with the nav, footer, and fonts. Inter is the body font. Outfit, at a light weight, is used for all headings automatically.
- `src/app/globals.css` holds the color variables for light and dark mode and the heading font rule.
- `src/members.ts` is the member registry that powers the Members page.
- `src/components/theme-toggle.tsx` switches between light and dark. Light is the default. The choice is saved in the browser.
- Styling is Tailwind CSS. Use `text-muted`, `border-border`, `bg-surface`, `bg-background`, and `text-foreground` so your page looks right in both themes. Use `font-display` if you want the heading font on something that is not a heading.

## Scripts

- `npm run dev` starts the dev server.
- `npm run build` makes a production build.
- `npm run lint` runs ESLint.
