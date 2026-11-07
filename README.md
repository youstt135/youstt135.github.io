# Amin Mansouri — academic website

Personal site: https://amansouri3476.github.io/

A lightweight static website hosted on GitHub Pages. No build step is required.

## Editing

- Edit `index.html` for biography, papers, author lists, venues, and links.
- Edit `style.css` for typography and layout. Paper thumbnails are 136 px wide on desktop and remain beside the text on mobile.
- `site.js` adds an accessible enlarged-figure viewer. Paper links and thumbnails still work without JavaScript.
- Put assets in `assets/`. `.nojekyll` makes Pages serve the files directly.

## Local preview

Run `python3 -m http.server 8775` from this directory, then open http://127.0.0.1:8775/.

## Sources and credits

Layout informed by Jon Barron’s academic homepage (https://jonbarron.info/) and Anja Surina’s site (https://anjasurina.github.io/).

Profile information comes from the existing personal site and EPFL directory. Publication titles, authors, and workshop labels for RxnHaystack and Chain-of-Questions were checked against their OpenReview records. The RxnHaystack entry represents the public ML4Molecules workshop paper, whose title and author order differ from the later manuscript described on the previous homepage.

Figure thumbnails are extracted from the linked papers. The RxnHaystack and CoQ images are from their public workshop PDFs, rather than unpublished manuscript figures. The figures reproduce the linked publication versions rather than later manuscripts. Figures and paper content retain the rights and licenses of their original sources. Source Sans 3 is distributed under the included OFL license. The portrait is from Amin’s existing homepage.

The Google Site is managed separately. This repository does not redirect or modify it.
