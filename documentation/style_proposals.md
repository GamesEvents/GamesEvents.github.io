# Three different browsing flows

Expanded 29 September 2026 after David requested more diverse flows, components, audiences and maintenance models. These replace the first visual trials; [index.html](../docs/index.html) stays unchanged. Read [component_proposals.md](component_proposals.md) for the wider idea bank and future Thalia brief.

| Style | Direction | Audience emphasis | Volunteer work | Trial |
| --- | --- | --- | --- | --- |
| 1: Programme Desk | Compact directory and working filter rail. | Professionals/organisers. | Medium catalogue updates. | [index_style_1.html](../docs/index_style_1.html) |
| 2: Festival Atlas | Illustrated publication, city features and upcoming carousel. | Independent creators/festival visitors. | High editorial work. | [index_style_2.html](../docs/index_style_2.html) |
| 3: Common Room | Choose an activity, find a community, follow the live agenda. | Students/hobbyists/newcomers. | Low calendar-first model; optional guide adds work. | [index_style_3.html](../docs/index_style_3.html) |

## Shared facts, different journeys

Plain static HTML/CSS/JS under `docs/`; no framework, build or new dependencies. All retain the live agenda/month embeds, Google event form, subscribe/ICS links, mailing list, existing resources, analytics identifier and Merry H's board. Google controls iframe interiors. Calendar and form have direct-open links too.

A dated public guide reuses the 29 September research: 32 distinct VIC/NSW events, High Score and GCAP once each across their days. Already-imported events belong in a browsing guide. This is not a live Google Calendar read. Filters affect the guide only; coverage, source links and checked date are visible. Missing-state and expired-snapshot cases offer the live calendar and historical selection.

One shared [events-data.js](../docs/js/events-data.js) supplies all trials. Shared [style-trials.js](../docs/js/style-trials.js) handles rendering, filters, query URLs, directory filtering, calendar views and carousel. [style-trials.css](../docs/css/style-trials.css) contains shared foundations and different layout/theme rules. HTML fixes each style's page order. These are plain files, not a build pipeline.

Without JavaScript, official programme links, static text/navigation and Google embeds remain available. Controls are hidden until initialised; a noscript message explains the absent guide. Native labels/selects/buttons, visible focus, semantic headings, titled frames and no autoplay are defaults.

## 1 — Programme Desk

An operational programme for someone arriving with a question: Victorian playtests next week, audio talks, or sessions around GCAP. Professionals and organisers get immediate facts, while anyone can use the same controls.

Warm white `#f4f2ec`, ink `#202d34`, slate `#52616a` and deep blue `#194c70`; fine rules, square edges, system sans-serif and tabular dates. A blue masthead rule anchors the page. No decorative landing hero or carousel.

The compact introduction leads directly to a programme. On desktop a filter rail sits beside dense event rows; on phones it becomes a normal form. Search, state, category and date range combine. Each row has a date block, title, tags and short summary. Native disclosures expose timezone, venue, access and caveats. Festival/community entrances come next, then a companion live calendar and contribution/resources.

Festival pages prioritise practical overview and searchable schedule. Community pages put joining/announcement links and conditions before related events. Medium upkeep means maintaining catalogue facts/tags alongside Google, without rotating art or highlight copy. The strongest option for fast scanning, with less serendipitous discovery than Style 2.

## 2 — Festival Atlas

A creative-fortnight guide for indie developers choosing a city, discovering formats and planning a trip. Festival context precedes the calendar.

Lilac paper `#f3f0fa`, violet ink `#302349`, muted purple `#665675`, accent `#6036a1`, flat peach/lilac art. Bold system sans-serif headings and editorial spacing. Original SVG illustrations show making, conversation and playable forms; they are not photos of actual events. Melbourne and Sydney have different compositions. No gradients or external font downloads.

A split illustrated hero leads into a manual upcoming carousel, then a Melbourne/Sydney feature spread. Previous/next buttons and position are explicit; ended events expire, no autoplay. Once the dated selection ends, the carousel offers the live calendar instead of calling old events upcoming. A broad toolbar filters expanded event cards. Festival pages group by start day; a multi-day conference appears once with its full span. Community features and calendar reference follow discovery.

Festival subpages have large illustrations, activity chapters and day-grouped programmes. Community subpages read as short profiles. Highest upkeep: catalogue, highlights, guide copy, seasonal transitions and artwork/rights. Best expression of a future editorial service if volunteers want this role; quiet-season care is essential.

## 3 — Common Room

Start with “What do I want to do?”: learn, get feedback, meet other makers. Students and hobbyists get an entrance before a date grid, without assuming every event is beginner-friendly or open to under-18s.

Mint `#edf4ef`, white surfaces, forest ink `#213d33`, muted green `#4f665b`, action `#256044`. System sans-serif, clear rules and broad spacing. Small original line illustrations distinguish intent routes. No large landing hero or carousel.

Three activity links lead to a state-filtered community directory. Then the live agenda is primary, with Month available through view controls. The dated selection sits inside a collapsed “Explore the festival selection” section. Intent links open it with a real category filter. Festival links, preparation advice and contribution/resources finish the page.

Festival pages offer learning/feedback/connection routes before their programme. Community pages emphasise what to expect and how to check the next announcement. IGDA admission conditions are visible; Squiggly River dates are not inferred from a monthly pattern.

Lowest viable workload: Google events plus occasional directory/profile checks. The optional dated guide still duplicates work and can be removed after trial. The evergreen directory/calendar flow survives that removal. Less immediate full-programme browsing than Style 1, less editorial drama than Style 2, useful between festivals.

## Additional pages

Every style has matching pages and internal navigation:

| Purpose | Style 1 | Style 2 | Style 3 |
| --- | --- | --- | --- |
| MIGW developer guide | [MIGW](../docs/migw_style_1.html) | [MIGW](../docs/migw_style_2.html) | [MIGW](../docs/migw_style_3.html) |
| Sydney festival guide | [Sydney](../docs/sydney_style_1.html) | [Sydney](../docs/sydney_style_2.html) | [Sydney](../docs/sydney_style_3.html) |
| Community directory | [Directory](../docs/communities_style_1.html) | [Directory](../docs/communities_style_2.html) | [Directory](../docs/communities_style_3.html) |
| IGDA starting points | [IGDA](../docs/igda_style_1.html) | [IGDA](../docs/igda_style_2.html) | [IGDA](../docs/igda_style_3.html) |
| Squiggly River | [Brisbane](../docs/squiggly_river_style_1.html) | [Brisbane](../docs/squiggly_river_style_2.html) | [Brisbane](../docs/squiggly_river_style_3.html) |

## Trial and adoption

Keep relative page paths and shared assets together. Open each index and follow its side-page links; no build/install is needed. Google embeds need internet access. Compare finding a Victorian playtest, searching audio, viewing MIGW, finding Brisbane peers, recovering from no results, switching Calendar views and opening the form. Check phone/desktop layout and keyboard use.

Copy the chosen index over `docs/index.html`, retain shared assets/matching side pages, and change that style's home links to `index.html`. It remains a drop-in replacement within this repository; copying HTML alone to another repo is insufficient now that it has shared assets. Remove unchosen trials after review rather than maintaining three forever. Publishing/committing remains David's decision.

Updating Google does not update the dated guide. Recheck official pages, update review/coverage information and retain stable IDs and access/caveat fields. See [static-prototypes.md](static-prototypes.md) for schema/maintenance. Agent local rendering was blocked by browser URL policy; do not bypass it. Offline source/behaviour checks supplement, but do not replace, David's rendered review before adoption.
