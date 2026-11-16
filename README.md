# Personal index

The short, no-JavaScript homepage is in `index.html`. The complete prior profile remains in `files/home.md` and is available at `cv.html`. The design follows TRADE LOG's light monochrome palette, monospace type, dashed rules, and compact navigation, adapted to a readable personal profile.

## Preview

Run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`. No build step or external runtime requests are required. Edit `index.html` for the short introduction and selected talks. Edit `files/home.md` for the full CV; its sections and navigation are generated automatically. Bump asset query versions when changing shared CSS or JavaScript so returning visitors receive the update.

`assets/marked-17.0.5.umd.js` is the pinned Markdown renderer; its license is included alongside it. Only trusted repository-authored Markdown should be put in `files/home.md`.

## Checks

- `node --check assets/site.js`
- `git diff --check`
- In a browser, verify desktop and 320–390px phone layouts, section navigation / back, keyboard focus, and the failed-content-load fallback.

This change does not add analytics, account sign-in, external fonts, or tracking. GitHub Pages deployment remains unchanged.
