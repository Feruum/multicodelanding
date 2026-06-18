# Design: «Наша команда» Section

**Date:** 2026-06-18
**Status:** Approved
**Project:** Multicode landing page (TanStack Start + shadcn/ui + Tailwind v4 + framer-motion)

## Goal

Add a new «Наша команда» (Our Team) section to the Multicode landing page, using a horizontal-scroll carousel with arrow navigation adapted from a provided React component, restyled to match the existing landing-page aesthetic.

## Context

- The landing page (`src/routes/index.tsx`) is a Russian-language site for a railway IT company, with an established design system: brand blue `#3b6bc4`, `font-display` (Space Grotesk), `text-foreground/55` for secondary text, custom shadows `shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)]`, `ring-1 ring-black/[0.04]`, framer-motion entrance animations (`fadeUp`, `slideIn`, `stagger`).
- `src/components/ui/carousel.tsx` already exists as the shadcn embla-based carousel — it remains untouched.
- `lucide-react` is already installed (`^0.575.0`); `cn` utility exists at `src/lib/utils.ts`.
- The provided component uses a `scrollbar-hide` CSS class that is not defined in `src/styles.css`.

## Decisions (from brainstorming)

| Decision | Choice |
|---|---|
| Format | Horizontal-scroll carousel with arrow buttons (provided component pattern) |
| Data | Placeholder team data (replaceable later) |
| Card content | Photo + name + role + short bio |
| Placement | After `AboutSection`, before `ClientsSection` in `index.tsx` |
| Approach | Adapt the provided `scrollBy` component (not the embla carousel), restyle to match the page |

## Component

**File:** `src/components/team-section.tsx` (feature component, alongside `hero.tsx` / `train-scrollbar.tsx` — NOT in `ui/`, since it is a page-specific section, not a reusable primitive).

**Export:** `TeamSection` (named export).

### Structure

```
<section id="team" max-w-6xl>
  <header>  // motion slideIn, heading + subtitle + arrow buttons row
    <h2 font-display clamp>Наша команда</h2>
    <p>subtitle</p>
    <div arrows> ChevronLeft (disabled at start) | ChevronRight (disabled at end) </div>
  </header>
  <div ref=scrollContainer flex overflow-x-auto snap-x snap-mandatory scrollbar-hide>
    {team.map(member => (
      <div snap-start w-[260px] sm:w-[300px]>
        <card white rounded-2xl ring shadow hover:-translate-y-1>
          <img object-cover h-[320px]>
          <div p-5>
            <h3 font-display>name</h3>
            <p text-[#3b6bc4]>role</p>
            <p text-foreground/55>bio</p>
          </div>
        </card>
      </div>
    ))}
  </div>
</section>
```

### Behavior

- `scrollContainerRef` on the scroll container.
- `canScrollLeft` / `canScrollRight` state updated on scroll and on mount via `checkScrollability`.
- `scroll(direction)` calls `container.scrollBy({ left: ±80% clientWidth, behavior: "smooth" })`.
- Arrow buttons: `hidden sm:flex`, disabled state `opacity-30 cursor-not-allowed`, hover `bg-muted`.
- Arrow buttons positioned in the header row (justify-between), matching the provided component layout but styled with the page's tokens.

### Styling to match the landing page

- Section: `max-w-6xl mx-auto px-6 mt-20 md:mt-32` (consistent with sibling sections).
- Heading: `text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] font-display`.
- Cards: `bg-white rounded-2xl shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)] ring-1 ring-black/[0.04] transition hover:-translate-y-1`.
- Name: `font-display font-semibold`.
- Role: `text-[#3b6bc4] text-[14px] font-medium`.
- Bio: `text-foreground/55 text-[14px] leading-relaxed`.
- Entrance: framer-motion `whileInView` with `fadeUp`/`slideIn` variants, `viewport={{ once: true }}`. NOTE: `fadeUp`/`slideIn` are defined as local consts in `index.tsx` and not exported — `team-section.tsx` must define its own copies of these variant objects (same values: `hidden { opacity:0, y:30 }`, `show { opacity:1, y:0, transition { duration:0.6, ease:[0.22,1,0.36,1] } }`).
- Arrow buttons: `rounded-full bg-white ring-1 ring-black/[0.05] p-2 shadow-sm`.

## Placeholder Data

7 fictional team members:

| id | name | role | bio |
|---|---|---|---|
| 1 | Алексей Морозов | CEO & Сооснователь | 15 лет в ЖД-логистике. Отвечает за стратегию и отношения с операторами. |
| 2 | Данияр Сулейменов | CTO & Сооснователь | Архитектор платформы. Превращает отраслевые требования в технические решения. |
| 3 | Ирина Волкова | Lead Developer | Руководит frontend-командой. Отвечает за UX и производительность интерфейсов. |
| 4 | Тимур Беков | Product Designer | Проектирует интерфейсы диспетчерских и операторских панелей. |
| 5 | Анна Лебедева | ML Engineer | Развивает ИИ-аналитику: прогноз прибытия, выявление узких мест. |
| 6 | Руслан Алиев | DevOps Engineer | Обеспечивает стабильность и SLA 24/7 для промышленных инсталляций. |
| 7 | Максим Орлов | Head of Sales | Ведёт переговоры с операторами СНГ и сопровождает пилотные проекты. |

**Photos:** placeholder avatar service (e.g. `https://i.pravatar.cc/600?img=N`), replaceable later.

## CSS Utility

Add `scrollbar-hide` to `src/styles.css` (not currently defined):

```css
.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

## Wiring

In `src/routes/index.tsx`:
- Import `TeamSection` from `@/components/team-section`.
- Insert `<TeamSection />` after `<AboutSection />` and before `<ClientsSection />` inside `<main>`.

## Out of Scope

- Real team data/photos (placeholder only).
- Social links on cards.
- Mobile arrow buttons (hidden on `sm:flex`; mobile users swipe-scroll).
- Committing changes (per project rules, only commit when explicitly asked).
- No changes to the existing embla `carousel.tsx`.

## Verification

- `npm run lint` passes.
- `npm run build` (or `build:dev`) compiles without TS errors.
- Visual check: section appears after «О компании», carousel scrolls with arrows, arrows disable at edges, cards match landing-page styling.
