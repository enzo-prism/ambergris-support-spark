# Design Notes

Visual and layout rules for belizekids.org. Use this when changing UI so the bugs below do not return.

## Brand

- Primary green: `#16784C` (`belize-green` / `belize-blue` — they currently share this value)
- Teal: `#0F766E`
- Gold/coral: `#8A6500` / `#C88A04`
- Headings use Montserrat. Body uses Inter.
- Do not force every heading to brand green in global CSS. Green-on-green headings on tinted cards become unreadable. Set color per surface (`text-white` on green panels, `text-gray-900` or `text-belize-green` on light panels).

## Layout rules

- The navbar is `fixed`. Page heroes and legal pages need enough top padding (`pt-24`–`pt-32`) so titles clear it.
- Cover photos must use a sized parent (`aspect-*`, `h-52`, `absolute inset-0`) plus `object-cover`. Do not set a global `img { height: auto }` — it overrides `h-full`.
- Do not apply `min-width: 44px; min-height: 44px` to every `a` and `button`. That stretches footer links, logos, and icon buttons. Use Button sizes or `.touch-target` instead.
- Floating stat chips on hero images must sit **inside** the photo, not hang off the corner. Parent overflow is clipped on mobile.
- Mobile sheet close control needs header `pr-14` so it does not cover the logo.

## Patterns to avoid

- Fake progress bars at 100% (partnerships are labels, not metrics).
- Fundraiser bars over 100% width. Cap the bar at 100% and show a “goal reached” label.
- Dead buttons (for example “View All Projects” without a `Link`).
- “Visit our main website” CTAs that loop back to the same origin.
- `object-contain` photos with white captions over letterboxed gray.

## Last visual pass (2026-08-30)

Fixed contrast on green panels, mobile tap-target overflow, hero clipping, privacy/terms overlap with the navbar, classroom fundraiser bar, partnership cards, and cover-image cropping.

Follow-up from the live visual pass:
- Contact Typeform gets a branded frame, full-height iframe, and a persistent “Open the contact form” action so the welcome/OK screen is not the only path.
- Coming soon / clinic empty states use the same mint surfaces as the rest of the site instead of bare gray boxes.
