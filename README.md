# Obsidian Estates

PROJECT

Build Parmar Properties, a premium real-estate discovery and enquiry website. Stack: React + TypeScript + Tailwind CSS (Next.js patterns are fine if Lovable defaults to Vite/React Router instead).

This is a brand-new premium design — not a copy of any existing real-estate site, and not a generic property-marketplace template full of cards, badges and clutter.

Feel: sophisticated, trustworthy, calm, spacious, editorial, modern. Avoid: over-animation, flashy gradients, neon colors, heavy shadows/borders, generic SaaS look, crowded layouts.

Core principle: "Let the property photography and information sell the property, not the animations."

1. COLOR SYSTEM — Full Dark Navy & Gold (bold, private-members'-club premium)

The entire site sits on a deep navy background — not just the navbar/footer. Gold stays a restrained metallic accent, never a second background color. This should read like a private bank or five-star hotel brand, not "dark mode of a SaaS app."

Design tokens (CSS variables / Tailwind theme extension):

Token	Hex	Use
background-primary	
#0A1428	Main page background — deep navy, near-black
background-secondary	
#0F1D38	Section backgrounds, cards, elevated surfaces
background-tertiary	
#152847	Hover states, input fields, subtle panels
text-primary	
#F4F1E9	Headlines, primary text — warm ivory, not pure white
text-secondary	
#B8C2D4	Body copy, secondary text — soft blue-gray
text-muted	
#7C8AA3	Captions, metadata, placeholder text
border	
#22314F	Hairline dividers — barely visible, low contrast
accent-gold	
#C9A15A	Primary accent — CTAs, active nav, price, links, icons
accent-gold-hover	
#E0BC7C	Hover/pressed state on gold elements
accent-gold-muted	
#8A7440	Disabled gold, subtle gold-on-dark decorative lines
success	
#5FAE8A	Muted sage-green, not bright green
warning	
#D9A441	Warm amber (close to gold family so it doesn't clash)
error	
#C4645A	Muted terracotta-red, not harsh red
overlay	rgba(10,20,40,0.75)	Modal/gallery overlays — navy-tinted, not pure black

Usage rules (important for keeping it premium, not gaudy):

Gold is used sparingly — CTA buttons, active nav states, the price on property cards/detail pages, thin decorative divider lines, icon accents, and the logo mark. Never a large fill, never a background block.
Property image cards sit on background-secondary with a thin border so they visibly lift off the darker page background — this is what keeps the grid legible instead of everything blurring into one dark mass.
Body text is never pure white on pure black — use the ivory/blue-gray pairing above so it reads "editorial," not "terminal" or "hacker dashboard."
No gradients between navy and gold. Flat colors only, used as solid blocks or thin 1px lines.
Maintain WCAG AA contrast: text-primary/text-secondary on background-primary/background-secondary both pass comfortably. Double-check accent-gold for small text specifically — if a pairing fails, use text-primary with a gold icon/underline instead of gold text.
Admin dashboard can lean slightly more "control-room" (heavier use of background-tertiary for tables/rows) but keeps the same gold accent so it still reads as one brand, not a separate product.
Since the background never goes light, photography does the contrast work — use generous negative space around images so pictures pop against the navy rather than fighting with the site chrome.
2. TYPOGRAPHY

Pair an elegant serif/display font (headings) with a clean modern sans-serif (body/UI). Define a consistent scale:

Display heading, H1, H2, H3, H4
Body large, Body regular, Body small
Caption, Navigation, Button
Price (distinct numeric style)
Property metadata (small, muted)

Headings should not all be decorative — keep readability high.

3. GRID & SPACING
Desktop max content width ~1200–1440px, generous side margins, 12-column grid
Tablet: intelligently adapted grid
Mobile: 4-column/simplified grid, comfortable padding, nothing cramped
Use one consistent spacing scale (e.g. 4/8px base) — no arbitrary spacing values
4. NAVIGATION

Desktop navbar: Logo · Properties · Saved · Compare · About · Contact · (optional Account) — sticky.

Initial state: transparent/overlay on hero
On scroll: solid background, subtle border/shadow, slightly reduced height
Transition must be subtle and fast — no large animated navbar effects

Mobile navbar: Logo · Saved/heart icon · Menu icon. Mobile menu opens with a simple slide/fade.

5. HERO SECTION (dynamic rotation — NOT video)

This is the only section allowed noticeable animation.

Behavior (confirmed):

3 full-bleed property images, each paired with one short text phrase (e.g. "Find Your Home", "Discover Better Living", "Invest With Confidence")
They auto-rotate one at a time in a continuous loop: Image 1 + Text 1 → Image 2 + Text 2 → Image 3 + Text 3 → back to Image 1
Image and its matching text transition together as one slide, using a smooth crossfade/swipe — not a video file (keeps it lightweight and won't crash on mobile)
Only one slide visible/animating at a time; no parallax, no multi-layer motion, no GSAP-style sequences
Transition duration slightly longer than the rest of the site (still fast/premium, not slow)
Respect prefers-reduced-motion — disable auto-rotation/crossfade if set (show static first slide instead)
Implement as a lightweight interval-based crossfade (CSS opacity transition or a minimal carousel component), preloading all 3 images to avoid flicker/jank on Android/iOS

Hero also contains:

Primary CTA button
A search bar (Location, BHK, Budget, Property type) placed within/just below the hero
Desktop: horizontal single-row search bar
Mobile: stacked search fields
Should not visually dominate the hero — sits below the headline, not competing with it
6. HOME PAGE — SECTION ORDER
Navbar
Hero (rotating 3-image/text)
Featured Properties
Explore Properties (filter by Location / BHK / Budget / Type / Availability — elegant chips/cards)
Recently Added (+ optional "View All")
Recommended Properties (based on recently viewed / saved / preferences)
Recently Viewed (hidden entirely if empty — no empty-state clutter here)
Why Parmar Properties (editorial: expertise, experience, local knowledge, service — typography + whitespace + one strong image, avoid icon-grid overload)
Statistics (static numbers only — do not animate/count-up, e.g. "10+ Years Experience", "500+ Properties")
Testimonials (simple carousel: quote, name, optional role/location)
Final CTA ("Find a property that feels like home." → Explore Properties / Talk to Us)
Footer

Not every section should animate — reserve motion for the hero and micro-interactions only.

7. PROPERTY CARD (strict minimal spec)

Show only:

Property image (large, high quality)
Heart/save icon (top corner, over image)
Property name
Location

Do NOT show on the card: price, BHK, carpet area, developer, amenities, possession, configuration, status — all of that belongs on the detail page only.

Hover: very subtle image zoom or opacity shift — nothing dramatic. Click → opens Property Detail page.

Grid: 3 across desktop / 2 tablet / 1 or horizontal scroll on mobile.

8. PROPERTY LISTING PAGE

Navbar → Page title → Search bar → Filters + Sort → Property grid → Pagination/Load more.

Filters: Location, BHK, Price, Type, Availability, Area, Amenities
Sort: Newest, Price low→high, Price high→low
Desktop: sidebar or compact filter bar
Mobile: [Search] then [Filters] [Sort] row, filters open in a bottom sheet/drawer
9. PROPERTY DETAIL PAGE

Navbar → Breadcrumb → Image gallery → Title/Location/Save/Compare/Enquire → Overview grid (type, BHK, carpet area, price, availability, possession, location, status — icons used sparingly) → Configurations (clean cards, e.g. "2 BHK · 1,250 sq.ft · ₹3.2 Cr") → Amenities (simple icon grid) → Floor Plans (open/zoom/download) → Location (embedded map + address + nearby info + "Open in Google Maps") → Description → Similar Properties (same minimal cards) → Enquiry form.

Image gallery: large primary + supporting images on desktop; swipeable carousel on mobile; image count indicator, fullscreen view, next/prev, keyboard nav on desktop. Subtle transitions only.

Enquiry form fields: Name, Phone, Email, Property, Message, optional preferred contact method (WhatsApp / Phone / Email). No site-visit scheduling.

10. SAVED PROPERTIES PAGE

"My Saved Properties" — cards with Remove / View / Select-for-comparison, plus a "Compare Selected" CTA. Elegant minimal empty state when nothing saved.

11. COMPARE PAGE

User selects saved properties → clean comparison table covering Location, BHK, Area, Price, Possession, Availability, Amenities, Property type. Keep it uncluttered.

12. ACCOUNTS (optional)

Browsing works fully without login. If logged in, sync saved properties, recently viewed, preferences, comparison history. Login/signup must never block browsing.

13. ADMIN DASHBOARD (separate interface, admin-only, no developer-management module)

Sidebar: Dashboard · Properties · Configurations · Floor Plans · Inventory · Leads · Analytics · Settings

Dashboard: cards for Total Properties, Total Leads, Property Views, Saved Properties; plus Most Viewed / Most Saved / Most Compared properties and Recent Leads
Properties: add/edit/delete, image upload, description, location, price, BHK, area, amenities, availability
Configurations: BHK, variant, carpet area, price, availability
Floor Plans: upload/edit/delete, associate with configurations
Inventory: unit number, floor, facing, price, status (Available/Booked/Hold/Sold), notes
Leads: Name, Phone, Email, Property, Date, Status (New/Contacted/Closed) — simple table, not a CRM
Analytics: property views, most viewed/saved/compared, leads, lead-status distribution — simple readable charts only
14. RESPONSIVE BREAKPOINTS

Design intentionally (not just shrunk) for: 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440px+.

Mobile specifics:

Navbar: Logo · Saved icon · Menu
Cards: large image, name, location, save icon
Detail page: carousel, title, location, price, sticky bottom bar with "Enquire" / "WhatsApp"
Filters open as bottom sheet/drawer
15. ANIMATION BUDGET (keep very low)

Allowed: hero crossfade, button hover, subtle card hover, drawer/modal open, accordion, testimonial carousel — all 150–300ms (hero slightly longer). Not allowed: parallax, scroll-triggered animation everywhere, animated stat counters, heavy page transitions, continuous/looping motion outside the hero. Respect prefers-reduced-motion globally.

16. ACCESSIBILITY

Strong color contrast, full keyboard navigation, visible focus states, proper form labels, accessible buttons/forms, image alt text, semantic HTML hierarchy, screen-reader-friendly interactive controls.

17. COMPONENT LIBRARY TO BUILD

Buttons, Inputs, Selects, Checkboxes, Radio buttons, Filter chips, Property Card, Navbar, Footer, Modal, Drawer/Bottom sheet, Toast, Tabs, Accordion, Testimonial Carousel, Comparison Table, Empty state, Loading state, Error state, Admin table components.

Build priority for first pass: Navbar → Hero (rotating) → Featured Properties → Property Card component → Listing page → Detail page → Saved/Compare → then Admin.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e7b124b2-fb6e-4c7c-90a4-d3947c2d23f1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
