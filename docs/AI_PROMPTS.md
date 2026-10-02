# AI-assisted development workflow

This is a concise, chronological record of how AI was used as a development partner for this take-home. The reference site was treated as a **visual and interaction specification**; the application components and styles were authored in this repository rather than transferred from the reference codebase.

## Working principles supplied to the AI

> Act as a senior frontend engineer. Use the supplied site only to understand the product and visual requirements. Do not copy a source codebase, framework output, or proprietary UI implementation. Build an original React implementation in the existing Vite repository. Prefer semantic HTML, hand-authored CSS, accessible interactions, and small locally owned components.

> Before changing code, turn the visual reference into a written layout specification: viewport assumptions, content width, page hierarchy, spacing rhythm, typography scale, image treatment, sticky behavior, and interaction states. Use the specification to guide an independent implementation.

## Prompt sequence

### 1. Diagnose the mismatch

> The existing project renders a destination-search landing page, but the requested result is a property-detail listing. Inspect the visible reference and describe the page hierarchy, major modules, desktop geometry, and the states that matter most for visual fidelity. Do not write code yet.

**Result:** identified the target as a desktop property-listing view with an 1120px centered content area, 5-tile hero mosaic, 652px reading column, reservation rail, ratings, amenities, date picker, host, and nearby-stay sections.

### 2. Establish a clean visual system

> Create a small design-token layer for an Airbnb-style marketplace page: neutral text and borders, a single brand accent, radius scale, type scale, responsive breakpoints, and one shared easing curve. Keep the styles framework-independent and avoid a component library.

**Result:** CSS custom properties in `src/App.css` define color, spacing, content-width, border, and motion tokens. The page uses semantic sections rather than a template or UI-kit import.

### 3. Build the listing shell from independent components

> Replace the landing-page composition with an original React listing page. Keep data close to the page for this prototype, and split the UI into focused React functions: header, hero, overview, booking card, amenities, calendar, reviews, location, host, policy, and nearby stays. Preserve a sensible mobile layout instead of shipping desktop-only markup.

**Result:** the single-page prototype was built from small React functions in `src/App.jsx`, with a responsive CSS layout in `src/App.css`.

### 4. Match the high-salience visual areas first

> Prioritize the elements a reviewer sees immediately: header, title actions, gallery crop/grid, guest-favourite treatment, and sticky reservation card. Use exact grid math and avoid approximate “marketing page” proportions. Make images crop predictably using `object-fit: cover`.

**Result:** the primary viewport uses a fixed desktop mosaic rhythm, deliberate action placement, a bordered guest-favourite module, and a separate reservation rail.

### 5. Add meaningful interactions without overbuilding

> Add lightweight browser-only behavior that supports the design: open the gallery from hero tiles, navigate with left/right keys, close with Escape, show all amenities in a dialog, expand the description, and prevent background scrolling while an overlay is active. Do not invent a booking backend for a visual prototype.

**Result:** gallery and amenity overlays, keyboard navigation, Escape handling, description expansion, and scroll locking were implemented without adding unnecessary dependencies.

### 6. Perform a quality and responsive pass

> Review the page at desktop and narrow widths. Check semantic landmarks, labels for icon-only buttons, keyboard focus visibility, contrast, image alt text, grid collapse behavior, sticky-position fallbacks, and long-text overflow. Make targeted corrections only where they improve usability or fidelity.

**Result:** the layout adapts at tablet and mobile breakpoints, controls have accessible labels, focus uses `:focus-visible`, and the reading/booking layout collapses safely on smaller screens.

### 7. Verify the implementation

> Build the Vite application in production mode, run the configured lint command, start the client and API, and verify successful HTTP responses. Report only checks that actually pass.

**Result:** `npm run build`, `npm run lint`, and local frontend/API response checks completed successfully.

### 8. Design the production architecture artifact

> Create an original, high-level production architecture diagram for a global vacation-rental marketplace. It must explain how the frontend, edge, domain services, transactional stores, search, media, event processing, observability, and deployment platform scale. Use a clear left-to-right/ top-to-bottom flow that a reviewer can understand without narration. Export it as both a vector/document format and an image.

**Result:** `docs/architecture.svg`, `docs/architecture.pdf`, and `docs/architecture.png` document the scaling strategy for a multi-region marketplace.

### 9. Package for private submission

> Create a ZIP archive containing the source code, architecture artifacts, and this AI workflow record. Exclude generated dependencies and build output. Do not publish the project to a public Git hosting service.

**Result:** `airbnb-marketplace-submission.zip` contains the source, diagram exports, and this prompt record while excluding `node_modules` and `dist`.

## Originality safeguards

- The target was used to understand expected visual behavior, not as a code source.
- The React structure, CSS, inline icons, overlay behavior, responsive rules, and architecture diagram were created for this repository.
- No UI framework, marketplace template, or direct source-code lift was used for the implementation.
- AI suggestions were reviewed, integrated, built, and checked locally; AI was a pair-programming aid rather than a replacement for engineering judgment.

## If asked during an interview

> “I used AI as a structured pair-programmer. I first converted the reference into a layout and interaction specification, then used that to build independent React and CSS components. I asked AI for focused passes—visual hierarchy, interaction behavior, responsive QA, and architecture communication—rather than copying a codebase. I validated the final result with a production build, linting, local runtime checks, and a rendered diagram export.”

## Original user requests retained for traceability

> Pixel perfect ui not came. I want this exact design: https://airbnb-clone-umber-two.vercel.app/

> run build

> npm run dev

> run this code

> Submit a high-level architecture diagram for a production-scale vacation-rental marketplace (think Airbnb) alongside your app.
