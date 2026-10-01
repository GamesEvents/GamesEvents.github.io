# Static prototype maintenance

Main `docs/index.html` stays unchanged. Expanded trials share plain CSS/JS and a reviewed catalogue; no calendar API, automatic Google read or build.

## Files

- `docs/index_style_{1,2,3}.html`: different home-page component order.
- `docs/{migw,sydney,communities,igda,squiggly_river}_style_{1,2,3}.html`: matching side pages.
- `docs/css/style-trials.css`: theme tokens/layout/responsive rules.
- `docs/js/style-trials.js`: rendering/progressive enhancement; no network fetch or iframe inspection.
- `docs/js/events-data.js`: public reviewed catalogue and directory.
- `docs/assets/festival-*.svg`, `docs/assets/path-*.svg`: original illustrations.

Keep public records free of private correspondence. Archived ICS remain in root `ics/archive/`; public ICS download stays Google's live export. Do not publish historical batches as current exports.

## Data

`window.GAME_EVENTS_DATA`: `checkedOn`, `coverage`, `events`, `communities`. Event fields: stable `id`, `title`, lowercase `state`, `festival` (`migw`/`sydney`), `categories`, timed `start`/`end` ISO offset values or date-only `startDate`/exclusive `endDate`, `timezone`, `summary`, published `location`, `url`, `sourceUrl`, `access`, `caveat`, `format`, `beginner`, and optional `community` relation. `sourceUrl` links the source used for timing when it differs from the event details URL.

Categories: `conference`, `talk`, `workshop`, `playtest`, `networking`, `showcase`, `careers`. Multiple editorial format tags are valid. They do not imply price, eligibility, ticket availability or access. Only the four published hybrid introductory workshops get `format=hybrid` and `beginner=true`.

High Score: 3–4 October, exclusive end 5 October. GCAP: 5–7 October, exclusive end 8 October. Play Now: date-only 8 October, exclusive end 9 October; unpublished hours/venue, invitation-only. Timed records preserve daylight saving offsets and local timezone. Playmakers' calendar-series discrepancy is a visible guide caveat, not a correction/import.

32 distinct researched events; original CSV has 35 daily rows. Already-listed/archived events are valid browsing content, not import requests. Coverage is VIC/NSW festival selections; QLD directory profile does not claim dated QLD events.

## Editing and interaction

Edit shared data once to change facts across pages. Recheck source before updating review date; do not stamp stale facts with today's date. Use safe normal JS literals and check syntax with an existing runtime. Editorial festival dates/intro copy in HTML need separate edition updates.

Catalogue sections use `data-festival` or `data-community` for scope. Empty subsets retain official links/calendar route. Highlight IDs are explicit editorial choices; missing/ended records are omitted. No fake ticket/booking/personal-data state.

Query parameters `state`, `category`, `q`, `from`, `to`, `period` apply to local guide only. `period=all` includes historical selection; default is not-yet-ended. Date-range matching includes overlapping local dates. Unknown/invalid values are ignored. Style 3 intent links include category plus `#programme` to open its optional guide. Directory state filtering is independent.

Carousel removes ended timed events by current instant and date-only events by their event-local date/exclusive end. An expired guide offers historical selection/live Calendar rather than claiming past events are upcoming. No persistent storage or account feature.

## Checks and adoption

Use an already-installed Node for `node --check`, an existing HTML parser for relative links/assets/anchors, unique IDs and ARIA targets; validate dates/offsets against IANA timezone, categories, coverage and conference consolidation. Exercise combined filters, query validation, date overlap, reset, expired highlights and calendar/carousel selection. Run `git diff --check`.

Review actual phone/desktop rendering and live Google embeds before adoption. Agent's previous file URL was blocked by browser security policy; don't route around the denial. Offline checks cannot certify visual rendering or iframe internals. No installs needed/authorised.

Copy selected trial index over `index.html`, keep its assets/side pages, update matching home links. Remove unchosen trials only after David selects. Original Google ownership/import workflow stays in [event-workflow.md](event-workflow.md).
