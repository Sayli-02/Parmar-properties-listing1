# Parmar Properties — Interactive Prototype Plan

## Goal
Build a complete, polished Mumbai-focused real-estate discovery experience using realistic demo inventory. Browsing, saving, comparing, filtering, galleries, enquiries, and administration interactions will work in the browser, but data will not persist between sessions and login will not be implemented in this pass.

## Public experience
- Establish the supplied deep-navy, ivory, blue-gray, and restrained-gold design system, with editorial serif headings and a modern sans-serif interface font.
- Add a shared sticky navigation and footer, including desktop and mobile menus, saved-property access, and subtle scrolled navigation styling.
- Build the home page with a three-property image crossfade, matching headline rotation, search controls, and the requested editorial section sequence.
- Create reusable property cards that show only photography, save control, name, and Mumbai location.
- Build a listing page with search, location/BHK/budget/type/availability/area/amenities filters, sorting, result counts, and a mobile filter drawer.
- Build a property detail page with responsive gallery and fullscreen viewer, overview, configurations, amenities, floor plans, map presentation, nearby landmarks, description, similar properties, and enquiry form.
- Build saved and compare pages, with selection controls, removal, a minimal empty state, and a clean comparison table.
- Use browser state for saved items, recently viewed items, comparison selection, filters, galleries, and form feedback.

## Admin prototype
- Add a visually separate admin shell using the same brand system.
- Include Dashboard, Properties, Configurations, Floor Plans, Inventory, Leads, Analytics, and Settings views.
- Provide realistic interactive tables, forms, statuses, modal/drawer flows, and readable charts using demo data.
- Clearly treat all management actions as prototype interactions rather than persistent operations.

## Content and imagery
- Create a cohesive set of premium residential visuals suitable for Mumbai, including hero imagery, listing photography, editorial imagery, and floor-plan presentation.
- Populate realistic fictional Mumbai properties across Worli, Bandra, Juhu, Lower Parel, Powai, and South Mumbai.
- Avoid invented claims about real developments; property names, testimonials, statistics, and contact details will be clearly fictional launch content.

## Accessibility and responsive behavior
- Support keyboard navigation, visible focus treatment, proper labels, semantic hierarchy, accessible dialog/drawer controls, and meaningful alt text.
- Respect reduced-motion preferences globally; disable hero auto-rotation when requested.
- Validate layouts at 320, 390, 768, 1024, 1280, and 1440px widths, including the mobile menu, stacked search, filter sheet, detail gallery, and sticky enquiry controls.

## Routes
- `/` — home
- `/properties` — searchable listing
- `/properties/$slug` — property details
- `/saved` — saved properties
- `/compare` — comparison
- `/about` and `/contact` — concise brand and enquiry pages
- `/admin` plus focused admin subsections

Each content route will include unique page title, description, Open Graph, and Twitter metadata.

## Technical approach
- Keep TanStack Start routing and Tailwind CSS v4.
- Use shared typed demo-property data and small focused components for the site shell, controls, cards, filters, galleries, and admin tables.
- Use semantic design tokens only; no gradients, large gold fills, heavy shadows, or card-heavy SaaS patterns.
- Use local generated image assets and preload the three hero images.
- Use lightweight CSS transitions and existing carousel/dialog/drawer primitives; no heavy animation framework.
