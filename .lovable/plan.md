## Plan: Replicate invette.dev hero section

Rebuild `src/routes/index.tsx` to match the reference: floating pill nav, centered hero with Trustpilot badge, big bold headline with inline emoji-style icon, subhead, two CTAs, and three feature cards with subtle blue gradient backdrop.

### Files
- **src/styles.css** — add Inter font (Google Fonts import), update tokens for light gray-blue background (`#f1f2f4`) and blue primary (`#2f7fff`). Add subtle radial blue gradient utility.
- **src/routes/index.tsx** — full hero layout:
  - Floating rounded nav bar (logo "invette.dev", links Services▾ Work▾ About Contract, black "Book a Call" pill button)
  - "5.0 Rating ★ Trustpilot" pill badge
  - H1 two-line headline "Digital Products build to a Higher 📈 Standard" with inline blue rounded-square chart icon between "Higher" and "Standard"
  - Muted gray subtitle (2 lines)
  - Two CTAs: blue gradient "Book a strategy call", white outlined "See Our Work"
  - Three cards (E-Commerce / Pre-Speed Startup / B2B) with white-to-blue gradient backgrounds, soft shadows, rounded corners, illustrative top area (using simple SVG/divs to mimic the in-logo tree, package box, and feature list)
- **src/components/HeroIcon.tsx** — small blue rounded-square gradient tile with chart-up arrow (lucide TrendingUp) for the inline headline icon.

### Tech
- Inter font, tight letter-spacing, font weights 600–700 for headline
- Background: `bg-[#f1f2f4]` with radial blue glow behind hero
- Tailwind utilities only, no new deps
- Update root `head()` title/description to "invette.dev — Digital Products"

### Out of scope
Card illustrations will be approximated with simple SVG/lucide icons rather than pixel-perfect recreations.
