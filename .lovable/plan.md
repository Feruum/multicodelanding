# Full Landing Page Plan

Extend the existing hero with reference-matched sections, scroll animations, and working nav.

## Sections (in order)

1. **Hero** (existing — keep as-is)
2. **Services Grid** — "Not a generic agency. A studio with a **contractual commitment** to performance." + "Book a strategy call" pill on right. 2-row bento:
   - Row 1 (2 large cards): E-Commerce Systems (product cards mock w/ backpack, shoe, headphones, "141 Orders Today"), Enterprise SLA (envelope w/ check + 24/7 Support, 99.9% Uptime, <1 Response pills)
   - Row 2 (3 cards): Custom Development (React/Mongo/Next/Node node graph w/ "in" center), UI/UX Design (Aa + gradient + color dots + UI/UX Design pill), Lightning Fast Hosting (blue lightning bolt)
3. **CEO-led Strategy** — heading + paragraph about Szymon Til, pill "CEO involvement is a contractual condition" on right. 3 numbered cards (01/02/03) with title, description, divider, blue check + label.
4. **FAQ** — light-blue rounded section, centered heading "Frequently Asked Questions" + subtitle, 5 accordion items (numbered 01–05) with +/− toggle. Item 02 expanded by default showing 3 paragraphs.
5. **Footer** — simple, brand + nav links + copyright.

## Navigation

- Make nav links (Services, Work, About, Contract) scroll to section IDs (`#services`, `#work`, `#about`, `#faq`).
- "Book a Call" + hero CTAs scroll to `#book` (booking/contact area at bottom or scroll to FAQ).
- Use smooth scroll via `scroll-behavior: smooth` in CSS + assign `id` to each section.
- Logo click scrolls to top.

## Animations

- Install `framer-motion` (already may be present — verify).
- Each section uses `whileInView` fade+slide-up with staggered children for cards.
- Hero cards get subtle floating animation.
- FAQ accordion uses Radix Accordion (shadcn) for smooth height animation.
- Hover: cards scale 1.02, shadow lift.

## Files

- **src/routes/index.tsx** — add all new sections after hero, add IDs, wire nav anchor links.
- **src/styles.css** — add `scroll-behavior: smooth`, `scroll-margin-top` on sections for sticky nav offset.
- **src/components/sections/** — split into `ServicesSection.tsx`, `CEOSection.tsx`, `FAQSection.tsx`, `Footer.tsx` for maintainability.
- Use existing shadcn `Accordion` for FAQ.
- Use lucide-react icons (Check, Plus, Minus, Zap, etc.) + inline SVG mocks for the illustrated card visuals (product cards, envelope, node graph).

## Tech notes

- Keep Space Grotesk for headings, DM Sans for body (already set).
- All colors via existing tokens (primary blue, muted bg).
- No backend needed.
