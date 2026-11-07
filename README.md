# Amin Mansouri — academic website

Personal site: https://amin-mansouri.github.io/

A lightweight static website on GitHub Pages. No build step is required.

## Editing

- Edit `index.html` for biography, papers, news, honors, and links.
- Edit `style.css` for the layout. Figures are 210 px wide on desktop and 120 px on mobile, beside each paper. Click them to enlarge.
- `site.js` adds keyboard-accessible tabs, direct fragment links, and a figure viewer. Without JavaScript, all sections remain visible and all links work.
- Put assets in `assets/`. `.nojekyll` makes Pages serve files directly.

## Local preview

Run `python3 -m http.server 8775` here, then open http://127.0.0.1:8775/.

## Visitor tracking

A separate MapMyVisitors project tracks this website from November 2026:
https://mapmyvisitors.com/web/1c9co

The original Google Site retains its own project (1bzp1). The new tracker loads once per page load on `amin-mansouri.github.io`, outside the tabs. Local previews do not load it. Switching tabs does not reload the tracker. Service-side counting rules still apply.

## Sources and credits

Layout informed by Jon Barron (https://jonbarron.info/) and Anja Surina (https://anjasurina.github.io/).

Biography, news, honors, collaboration guidance, and feedback link were restored from Amin’s Google Site. Publication metadata comes from the papers and public publication records. Beyond Accuracy consolidates the earlier Time-Series as Feedback workshop work. The duplicate object-centric workshop entry and the ICML 2021 workshop paper were removed at Amin’s request.

At Amin’s request, RxnHaystack uses the later manuscript title, “Beyond Needles in Long-Context Structured Scientific Data,” and author order. Its ML4Molecules acceptance is retained, and the separately labeled workshop-paper link leads to the earlier publication, which has a different title and author order. No ICLR acceptance is claimed. The project pages are the destinations supplied by Amin.

Figures are extracted from the linked papers; RxnHaystack and Chain-of-Questions figures come from their public workshop PDFs. Original figures retain their respective rights and licenses. Source Sans 3 is distributed under the included OFL license. The portrait is from Amin’s existing homepage.

The original Google Site is managed separately.
