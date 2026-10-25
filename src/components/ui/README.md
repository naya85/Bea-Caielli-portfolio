# Portfolio UI kit

Shared styles live in `src/app/global.css` so the same visual rules apply across the portfolio and case studies.

## Buttons and links

Use the base class with one variant:

- `ui-button ui-button--primary` for the main action: dark fill, lavender hover/focus.
- `ui-button ui-button--secondary` for the alternate action: lavender outline and a soft lavender hover.
- `ui-button ui-button--tertiary` for a lower emphasis text link with a lavender underline.
- `ui-button ui-button--nav` is the compact white CTA used inside the dark navigation pill.
- Add `ui-button--large` only when the action needs extra prominence, such as the hero CTA.

All button variants share a 48px minimum height, pill radius, 15px semibold label, transition timing, and visible lavender keyboard focus. Use semantic anchors for navigation and buttons for in-place actions.

## Heading roles

Use `ui-heading` with one size role:

- `ui-heading--display` for the homepage hero and contact headline.
- `ui-heading--page` for case-study page titles.
- `ui-heading--section` for major section titles.
- `ui-heading--subsection` for section headings within case studies.
- `ui-heading--card` for case-study cards and project titles.
- `ui-heading--small` for compact titles such as principle cards.
- Add `ui-heading--inverse` for a heading on a dark surface.

For large numeric outcomes that are not headings, use `ui-stat` so the value style stays consistent without changing document semantics.

Heading roles define responsive size, weight, leading, and tracking; keep semantic heading levels (`h1` through `h3`) aligned with the document outline.
