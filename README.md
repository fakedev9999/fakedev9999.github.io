# Taehoon Kim — personal site

A personal homepage built around the owner's actual work, talks, and interests. The large yellow question is the title of the 2026 panel, with its event, year, and recording link visible. The blue nameplate and small Mongchi disclosure give the page an identity without inventing personal mottos.

## Local preview

```sh
python3 -m http.server 8042 --bind 127.0.0.1
```

Open `http://127.0.0.1:8042/`. No build or dependency installation is required.

## Structure and interactions

- The masthead handle is plain text; the navigation contains the sole profile GitHub link. The owner-provided Korean name 김태훈 is the primary heading, set in brush lettering with `lang="ko"`. Mongchi sits immediately beside it, and Taehoon Kim is the smaller English name underneath.
- The introduction retains the existing factual bio, followed by the owner-provided location: based in Seoul, previously in San Francisco in early 2025. Previous experience and education use a native disclosure.
- Code and selected talks occupy different columns on desktop. On mobile, talks precede code and interests. The DOM reading and keyboard order follows that mobile sequence.
- The OP Succinct project and its 2025 talk link to each other. Native anchors move focus to the target; a highlight identifies it. Keep these real relationships intact.
- Mongchi's existing favicon photo opens from a native disclosure beside the name. Its small hover tilt is disabled for reduced-motion users. It adds no new personal information.
- Talk previews retain original color: the owner-identified second panelist from the left, the complete online presentation frame at 02:00, and the owner-preferred Devcon moment against a pink stage background. Both smaller previews use 16:9 windows. The online preview keeps the title slide and Mongchi visible, with the owner in the upper-right camera inset; Devcon restores the speaker crop selected in the owner’s screenshot. Full source frames are preserved. Each image and its title form one link to the matching recording. The three JPEGs total about 411 KB; the two smaller previews load lazily, and all images reserve their dimensions. See `assets/talks/sources.json` for exact sources.
- The name uses a self-hosted WOFF2 subset of Nanum Brush Script, renamed Taehoon Brush under the OFL reserved-name terms. It contains only 김태훈; preserve the included license and provenance in `assets/fonts/`. Update the subset if the name changes. The heading remains selectable text.
- Body text and headings use self-hosted Inter 4.1 variable fonts, subset to Latin letters and punctuation, with native system fallbacks. The homepage and CV share this stack. Regular and true italic faces are included under the SIL OFL; preserve `assets/fonts/Inter-OFL.txt` and `inter-sources.json`. The Korean brush name remains unchanged, while small metadata labels retain their monospace stack.
- The owner-selected homepage interests are proof systems, distributed systems, golf, and running, written as a conversational sentence ending with “and too many other things to list.” The owner chose to omit distance details and Memes. The CV retains the four-item interest line; its biography, experience, education, and links are preserved.
- The homepage has no JavaScript, third-party font requests, analytics, or embedded video players. All content and interactions work with native HTML/CSS.

Use actual project names and talk titles. Keep the language direct; don't add a slogan to explain the design. Ground new biographical claims and interests in owner-supplied or already published information.

## Editing

- `index.html`: homepage content and its native disclosures / cross-references.
- `assets/style.css`: shared palette, typography, focus styles, and CV layout.
- `assets/home.css`: homepage composition, responsive layout, and interaction states.
- `assets/fonts/`: Inter variable fonts, three-glyph brush font, OFL licenses, and original source metadata.
- `assets/talks/`: local recording previews and source metadata; preserve their association with the matching video.
- `files/home.md`: full CV, with the owner’s interest correction applied. IDs are generated from headings; keep `experience` and `talks` stable or update incoming links.
- `assets/site.js`: CV rendering, anchor navigation, and failure recovery.

Keep Mongchi's favicon and touch-icon files intact. Bump the CSS/JS query versions in the HTML when those assets change. The CV uses the local pinned `assets/marked-17.0.5.umd.js`; its license is included. Only trusted repository-authored Markdown belongs in `files/home.md`. A source link remains available when JavaScript is disabled or CV loading fails.

## Checks

```sh
node --check assets/site.js
git diff --check
```

Check desktop, tablet, and 320–390px phone layouts; disclosure open and closed states; keyboard navigation; skip link; code/talk round trips; direct CV section links; and the CV's failure fallback when changing related code. Preserve every original homepage destination, the factual CV content, and favicon assets.

The live site is https://fakedev9999.github.io/. GitHub Pages builds from the root of `main`; pushing to that branch publishes the site. Publish only after the owner requests it, then verify the Pages build and live assets.
