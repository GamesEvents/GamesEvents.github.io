# Three styles for Australian GameDev Events

These proposals keep the site's purpose and operating model: help people find Australian game-development events through a shared Google Calendar, and submit events through a Google Form. Each trial page is a complete static alternative. Event management continues in Google; choosing a style does not introduce a build, backend or new account integration.

| Style | Theme | Character | Trial page |
| --- | --- | --- | --- |
| 1 | Community Noticeboard | Warm paper, rust-red ink and an open, welcoming layout. | [index_style_1.html](../docs/index_style_1.html) |
| 2 | Studio Workbench | Charcoal, amber and a compact calendar-led layout. | [index_style_2.html](../docs/index_style_2.html) |
| 3 | Festival Field Guide | Forest green, pale paper and a publication-style directory. | [index_style_3.html](../docs/index_style_3.html) |

## Shared behaviour and scope

Every page retains the current calendar ID, Sydney display timezone, agenda and month embeds, submission form, Google Calendar subscription, ICS download, mailing-list link, analytics ID, festival/community links, contact links, and Merry H's event board/image. The useful links include MIGW, Sydney Games Festival, and the ScreenHub MIGW 2026 guide. No sample events, fabricated counts or hard-coded event schedule are introduced.

Each alternative has its CSS and small view-switch script inside the HTML. The only local assets are the existing favicon and Merry H image. Typography uses system fonts, so there is no font download, Bootstrap dependency or compilation. A selected page can replace `index.html` on its own while continuing to use the existing assets.

While the three trials coexist, shared calendar/form identifiers and community links are duplicated intentionally to make each file an independent replacement. Keep them synchronised if those destinations change before a winner is chosen. After selection, routine maintenance can focus on the adopted index.

The calendar controls offer **Upcoming**, **Month**, and **Both views**. Larger screens start with both panels; smaller screens start with Upcoming. Changing views does not fetch or parse events: it changes which of the two live Google embeds is visible. Without JavaScript, both views remain usable. The month frame can scroll horizontally on narrow screens; an ordinary link opens the calendar separately. The form has a separate open-form link too.

Accessibility defaults include a skip link, one main heading, semantic section headings, titled iframes, visible keyboard focus, underlined text links, generous control targets, and no essential animation. Page layouts adapt to mobile with wrapping navigation and smaller headings. Colours are defined in readable CSS variables near the start of each file.

Google controls the contents and visual styling of its embedded Calendar and Form. These designs style the surrounding page and panel frames. In particular, Style 2 deliberately keeps the calendar/form surfaces light within a dark shell; it does not invert Google colours or attempt to reproduce homelab's custom calendar engine.

## Style 1 — Community Noticeboard

### Idea and audience

A local community noticeboard: approachable, practical and easy to browse. It should feel equally comfortable for a first-time student, an indie developer organising a playtest, and an industry regular checking next week's events. The emphasis is on meeting people and finding the next useful gathering, rather than selling a festival or presenting a corporate platform.

### Palette and materials

Use warm paper (`#f6f1e7`) for the page, near-white (`#fffcf7`) for panels, dark ink (`#252b28`) for copy, and rust (`#a73725`) for actions and links. Muted olive-grey (`#566158`) supports explanatory copy, while restrained grey-green rules separate sections. The colour comes from ink and paper, rather than gradients or simulated cork textures.

The header has a solid rust strip and a simple text wordmark. Calendar panes have thin borders, small square corners and strong section labels. There are no floating cards or ornamental shadows. The white Google content looks like a natural extension of the paper surface.

### Typography and layout

Use the system sans-serif stack throughout, with a bold headline and comfortably spaced body copy. The introductory heading is short — “Find your next GameDev event.” — and the accompanying paragraph explains the kinds of events people can find. This keeps the top of the page useful without turning it into a large promotional banner.

On desktop the intro and calendar subscription actions sit next to each other. Below, the Upcoming list takes roughly one third of the calendar area and Month takes the remainder. This is the closest of the three to the existing agenda-plus-calendar arrangement, but uses deliberate frame heights rather than aspect-ratio boxes that become cramped as the viewport changes.

Useful links follow the calendar. Festival resources are easy to scan first, with community links grouped alongside. About and the contribution explanation use straightforward text columns. The submission form occupies the main width further down, followed by Merry H's board.

### Mobile and interaction

The top navigation wraps into a second row without a menu plugin. The headline reduces in size, subscription actions wrap, and Upcoming becomes the starting calendar view. The visitor can choose Month or Both views using clearly labelled buttons. Links and actions use a rust underline or filled rust button, with an obvious contrasting focus outline.

### Strengths and trade-offs

This is the most familiar community-facing option and the least visually demanding. It is friendly without looking like an events ticketing company. It also works well with Google's light embeds. Its long, open page uses more vertical space than Style 2, and the warmth is intentionally quieter than an arcade aesthetic.

## Style 2 — Studio Workbench

### Idea and audience

A practical studio desk for people who check the calendar often. The visual references are development tools and production schedules: compact headings, strong alignment and a clear hierarchy of actions. It should feel relevant to working game creators without pretending to be a terminal or exposing technical controls to community visitors.

### Palette and materials

Use charcoal (`#171b20`) for the page, a slightly lighter slate (`#222932`) for section surfaces, off-white (`#f2f0e8`) for copy and amber (`#f0c560`) for emphasis. Secondary text is cool grey (`#b9c3cf`); borders use a solid slate line. Light embedded calendars and forms are set in restrained dark frames with labelled header bars.

The main button is amber with dark text. Secondary controls are outlined rectangles. A simple geometric mark accompanies the wordmark; it supplies a small game-tool reference without neon lighting, scanlines, fake status indicators or animated decoration.

### Typography and layout

Use a monospace stack for the wordmark, navigation, panel labels and small control text. Keep longer descriptions in a system sans-serif for readability. The heading “What's on in Australian GameDev.” is direct, with a compact paragraph and a horizontal action row.

The desktop calendar reverses the visual emphasis of Style 1: Month appears first and takes the wider column, with Upcoming alongside as a companion list. Headers are denser and panel framing is more prominent. This borrows homelab's useful division into bounded panels, clear titles and simple controls, while continuing to embed Google Calendar.

Useful links become a compact directory below the calendar. About is a practical explanation rather than a separate large colour block. The contribution section pairs a short explanation with the form on desktop, keeping the form's width large enough to use comfortably. Merry H's board remains a linked reference lower on the page.

### Mobile and interaction

The toolbar wraps instead of hiding important actions. Upcoming is the initial view on a small screen; Month remains available without compressing both views into unreadable columns. Amber marks the selected calendar-view button, hover and keyboard focus. The form layout becomes one column.

### Strengths and trade-offs

This is the strongest option for frequent visitors who want the calendar immediately. It is visually distinct from the existing turquoise theme and from the two light proposals. The trade-off is the visible light/dark transition at Google's embedded content; retaining original iframe colours preserves readability and avoids fragile filters. It is more utilitarian and less inviting than Style 1 for a visitor who is new to the community.

## Style 3 — Festival Field Guide

### Idea and audience

A small printed field guide to Australia's game-development community. The reference is a useful festival program or community publication: a persistent contents area, generous reading space, editorial headings and a carefully organised directory. It favours discovering both events and the communities around them.

### Palette and materials

Use pale paper (`#f5f4eb`), white (`#ffffff`) calendar surfaces, deep forest ink (`#243e32`) and green (`#286448`) for links and primary actions. Muted green-grey (`#53695c`) supports notes. Rules are more noticeable than rounded boxes. Colour is concentrated in the wordmark, section headings and links, giving the page a calm printed identity.

Avoid map illustrations, decorative leaves or state silhouettes. The “field guide” idea comes from the page's structure and typography, not generic Australian imagery or an invented travel aesthetic.

### Typography and layout

Use Georgia for major editorial headings and the wordmark, with a readable system sans-serif for body copy, controls and embedded-panel labels. The serif is tied to the publication theme; it is not combined with decorative luxury treatments. The main heading is “GameDev events, across Australia.”

At wide desktop sizes, a left-hand contents column holds the site name, section navigation and a subscription link. It stays available while the main column scrolls. The main column has an introduction, the calendar, an expanded Useful Links directory, the community explanation, submission form, and Merry H reference. Fine horizontal rules divide the reading flow.

The calendar still supports an agenda-plus-month view, but the page allows it to become a vertical pair earlier than the other designs when the contents column reduces available width. The resource directory uses descriptive rows rather than a tile grid, encouraging people to read what each community resource offers.

### Mobile and interaction

The contents column becomes an ordinary top header on smaller screens; it does not become a drawer or obstruct the calendar. The headline and section spacing become smaller. Upcoming remains the default narrow-screen view. Links use clear green underlines, buttons use square edges, and keyboard focus remains visible against pale backgrounds.

### Strengths and trade-offs

This is the most distinctive editorial direction and gives the community resources a stronger identity. It is a good fit if the site is intended to become a trusted starting point as well as a calendar. The extra navigation column needs more desktop width, so it uses a different breakpoint and can stack calendar panes earlier. Its longer resource descriptions and publication rhythm are less compact than Style 2.

## What was borrowed from homelab

Reviewed `/usr/local/dev/Thalia/websites/homelab/src/dashboard/agenda.hbs`, `week.hbs`, the dashboard panel partial and calendar-panel documentation. The useful ideas are compact panel headings, predictable content heights, explicit view choices and separating an agenda from a grid view. Style 2 uses those principles most directly.

Homelab's custom calendar renderers depend on its event API, source management and server-side parsing. These trial pages use none of those components. They keep the two Google Calendar iframes and the Google Form, matching the project's current handoff and maintenance requirements. No homelab files were edited.

## Trying and adopting a style

Open any trial HTML file in your browser, or serve the existing `docs/` directory with your normal local preview tool. The page shell works without a build; live Google embeds and analytics need internet access. If opening local files affects embedded content in your browser, judge the shell locally and check Google behaviour using your usual static-site preview.

When choosing a winner, compare desktop and phone widths, try all three calendar view controls, check keyboard focus and navigation, open the festival/community links, and scroll/use the event form. The shared calendar and form identifiers are identical across the alternatives; choosing a style does not move data.

To adopt a proposal, retain a copy of the current index and replace `docs/index.html` with the chosen trial file. Because styles and view-switch JavaScript are inline, the chosen HTML and existing assets are sufficient. The original CSS/JS files can remain in place until separately reviewed; they are not loaded by these alternatives. Any publish/commit remains a separate Operator action.

## Validation status

Offline checks passed for all three files: HTML structure, unique IDs, anchor/ARIA references, exactly three titled embeds matching the original destinations, preservation of every original external link, local assets, balanced CSS structure and responsive rules, and JavaScript syntax. Palette checks measured at least 4.5:1 for text/link/action combinations and 3:1 for focus outlines against their surrounding surfaces. These are palette checks, not a claim that Google's iframe contents or the entire rendered page have been accessibility-audited.

The actual view-switch scripts were exercised without a browser or network. Desktop and mobile defaults, every view button, hidden-panel state, pressed-button accessibility state, breakpoint changes, and preservation of a visitor's choice after resize passed. Without the script, both panels remain visible and the inactive controls remain hidden. `git diff --check` passed, and the original index's SHA-256 was unchanged.

Browser rendering was blocked earlier by the browser's local-file URL policy, so automated rendered desktop/mobile review is not claimed. David's direct trial is the remaining visual review before adopting a winner. There was no package installation, Thalia conversion, homelab modification, calendar mutation, commit or publishing.
