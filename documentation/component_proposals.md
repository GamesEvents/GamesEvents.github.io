# Component and feature proposals

Written 29 September 2026 **before implementation**, for the expanded static trials and a future Thalia version. Read with [style_proposals.md](style_proposals.md).

## Product and ownership

Help Australian game creators find learning, feedback and connections. Professionals, independent creators and students need different starting points. Creation workshops and prototype playtesting qualify; consumer expos, ordinary board-game nights and months-long exhibitions generally do not. Tabletop developer sessions can qualify through their creator focus.

Google Calendar remains authoritative for routine events; Google Forms handles submissions. Volunteer management should remain transferable. Richness has a real cost: a static catalogue duplicates event editing. Audience and maintenance are independent axes—a professional site can still be low maintenance.

| Model | Volunteers maintain | Benefit | Cost |
| --- | --- | --- | --- |
| Calendar + directory | Google events and occasional community/link reviews. | Lowest website upkeep; useful between festivals. | Limited discovery and category filtering. |
| Curated catalogue | Google events plus public dated records and tags. | Real search, filters and festival collections. | Two copies can drift; coverage/review date essential. |
| Editorial guide | Catalogue, highlights, imagery and festival introductions. | Strong discovery and practical explanation. | Highest seasonal workload; imagery rights and stale recommendations. |
| Future integrated service | One reviewed record serving listings, calendar and collections. | Less duplicate entry. | Software ownership, permissions, moderation and reconciliation. |

## Discovery components

Effort means ongoing content work. Static means plain HTML/CSS/JS and reviewed public data. A parent page cannot search, filter, read or restyle Google's cross-origin iframe contents.

| Component | Purpose | Static approach | Future Thalia approach | Effort |
| --- | --- | --- | --- | --- |
| Keyword search | Find title, subject or venue. | Search local catalogue; explicit empty state. | Reviewed event/community search. | Medium |
| State/territory | Reduce travel; find nearby communities. | All eight jurisdictions; honest gaps. Directory filtered separately. | State, city, region and online options. | Low for profiles; medium for events |
| Category | Talks, workshops, conferences, playtests, networking, showcases, careers. | Multiple editorial format tags. | Controlled taxonomy with review. | Medium |
| Date window | Find events on a chosen day/range. | Local dates; include overlapping multi-day entries. | Occurrence-aware timezone queries. | Low once data exists |
| Festival filter | Search one programme. | Subset by festival ID. | Festival/edition relations. | Medium |
| Format | Distinguish in-person, hybrid and online. | Published format only; never infer interactivity from streaming. | Separate attendance/stream URLs. | Medium |
| Beginner route | Find introductory activities. | Curated path; no blanket eligibility claim. | Reviewed experience metadata. | Medium |
| Audience | Professional, indie, student, educator, hobbyist. | Suggested paths separate from admission rules. | Multiple relevance tags, separate access fields. | Medium |
| Price | Help people with limited budgets. | Confirmed amounts only; unknown stays unknown. | Currency, concessions and review date. | High; defer |
| Accessibility | Support informed attendance choices. | Organiser links; never infer access. | Verified facts, provenance, review date. | High; defer |
| Map/travel | Judge distances and overlapping sessions. | Published addresses and outbound maps. | Verified locations and route queries. | Medium/high |
| View controls | Suit scanning and planning. | Guide plus live Google agenda/month. | Custom agenda/day/week/month. | Low for embeds |
| Clear/count/empty | Explain filtering and recover. | Native controls, live count, reset, calendar link. | Same semantics with query results. | Low |
| Share filters | Send someone Victorian playtests. | Validated URL query parameters. | Stable server routes. | Low |

## Presentation components and alternative layouts

| Component | Purpose/layout | Static maintenance | Future development |
| --- | --- | --- | --- |
| Compact masthead | Browse, festivals, communities, subscribe, submit. | Ordinary links, no menu library. | Shared navigation/templates. |
| Hero photo | Show real people making games. | Needs permission, accurate caption, credit and crops. | Media library with rights/focal point. |
| Illustrated hero | Explain creativity without implying an actual event photo. | Original SVG; selected for Style 2. | Reusable editorial assets. |
| No-hero entrance | Put tasks/content first. | Selected for Styles 1/3. | Remains valid long-term. |
| Upcoming carousel | A few chosen real events, manual previous/next and position. | No autoplay; expire ended events; honest exhausted state. | Scheduled highlights/fallback. |
| Festival feature spread | Contrast Melbourne and Sydney as entrances. | Intro copy/art and official links. | Edition/campaign records. |
| Horizontal shelf | Secondary discovery through scrollable cards. | Keyboard/touch usable, real links. | Query-driven collections. |
| Dense programme rows | Scan dates, title, state and category. | Style 1; details disclosure. | Server-rendered operational view. |
| Expanded event cards | Explain relevance and practical details. | Style 2; more text and vertical space. | Card/detail templates. |
| Day-grouped programme | Understand a festival's sequence. | Group by start day; multi-day conferences shown once. | Occurrence/overlap-aware schedule. |
| Intent routes | Learn / get feedback / meet peers. | Style 3; link to actual category filters. | Optional personalised paths. |
| Community directory | Place, focus and organiser links. | Evergreen profiles; no invented next-meetup dates. | Ownership/review reminders. |
| Community profile | Who it is for, joining, how to check the next announcement. | IGDA and Squiggly River pages. | Community editors and related events. |
| Festival overview | Relevant selection, practical advice and official programme. | MIGW/Sydney pages in every style. | Annual editions/relations. |
| Discipline collection | Audio, narrative, art, code, production, tabletop design. | Additional tags feasible; defer beyond broad categories. | Reviewed taxonomy. |
| First-visit checklist | Bring a project, check registration/access, prepare questions. | Evergreen advice distinct from event-specific promises. | Shared guidance components. |
| Related events | Follow learning with practice/networking. | Manual links require review. | Transparent category-based suggestions. |
| Resource shelf | Festival guide, community sites, Indie Digest, Merry H. | Keep existing destinations; periodic link reviews. | Tagged resources. |
| Quiet-season state | Remain useful after a snapshot expires. | Live calendar, directory, historical selection. | Fresh queries/past editions. |
| Source/review date | Help attendees assess freshness. | Source links and checked date visible. | Per-field provenance and review queue. |

## Planning, contribution and administration

| Feature | Static possibility | Future version | Decision now |
| --- | --- | --- | --- |
| Subscribe | Existing Google and public ICS links. | Retain standards-based subscriptions. | Implement everywhere. |
| Personal shortlist | Local browser storage, expiry/privacy explanation. | Optional itinerary/account sync. | Defer. |
| Per-event/itinerary ICS | Generate only after reviewing public publication intent and stable IDs. | Reviewed records, stable UID/update policy. | Keep archive private to repository workflow; public link is Google's export. |
| RSVP/tickets | Link organiser; don't pretend to reserve locally. | Still delegate booking unless requested otherwise. | Implement links. |
| Submit | Existing Google Form and direct link. | Structured draft/moderation/permissions. | Preserve Google. |
| Corrections | Existing contact/submission route. | Event-specific review queue. | Keep contact; no fake workflow. |
| Mailing list | Existing form link. | Opt-in state/category preferences. | Preserve. |
| Cancelled/sold out | Only verified, maintained labels. | Review/expiry/reconciliation. | Don't guess. |
| Festival editions | Refresh or archive static guides. | Annual records/permalinks. | 2026 date/coverage explicit. |
| Volunteer handoff | Schema, source records, Google ownership. | Researcher/reviewer/community-editor roles. | Document now. |
| Import/dedup queue | Existing CSV-to-ICS workflow and archive. | Stable source/event/occurrence identity. | Keep current workflow. |
| Calendar sync | Manual comparison of two stores. | Requires authority/conflict decisions first. | Deferred; no live-read claim. |
| Organiser profiles | Changes via existing contact. | Scoped editing/review history. | Deferred. |
| RSS/digest | Possible but another manually updated artefact. | Reviewed changes and opt-in feeds. | Deferred. |
| Review dashboard | Diary, unresolved facts and dated records. | Audit trail, expiry, reminders. | Document; no pretend admin UI. |
| Shared ownership | Trusted Google editors with documented access. | Roles/recovery procedures. | David owns operational access. |

## Honest metadata and coverage

Use the existing reviewed CSV to create one public catalogue. Preserve the research CSV and archived ICS. Collapse High Score and GCAP to one multi-day entry each. Include 32 distinct events, including already-listed events: a browsing guide is not an import queue. Times retain their event-local timezone and daylight-saving offset. Play Now remains explicitly date-only, with unpublished hours/venue and invitation-only access.

Records need stable ID, title, state, festival, categories, local start/end, timezone, summary, published venue, source URL, checked date, admission conditions, timing caveats and known format. Tags are editorial descriptions, not promises of eligibility. Beginner applies only to explicitly introductory workshops. Unknown prices, accessibility, future meetup dates and ticket availability stay unknown.

Coverage is VIC/NSW festival selections, not all Australian events. QLD has a community profile, not a dated event. No SA/WA/TAS/ACT/NT listings are invented. Guide filters never filter the live Google embeds.

For future Thalia, consider Event, Occurrence, FestivalEdition, Community, Venue, Source and Review records. Keep local timezone, exclusive all-day ends, recurrence identity and field provenance. Determine whether Google remains authoritative before building sync. First reduce duplicate entry and support ownership/review; add more controls afterwards.

## Selected experiments

| | 1: Programme Desk | 2: Festival Atlas | 3: Common Room |
| --- | --- | --- | --- |
| Audience | Professional/organiser | Indie/festival visitor | Student/hobbyist/newcomer |
| Upkeep | Medium catalogue | High editorial | Low calendar+directory; optional catalogue costs medium |
| First screen | Search, rail, dense rows | Illustrated hero, highlights, city guides | Intent routes, communities |
| Filters | Desktop side rail | Horizontal toolbar | Directory state first; optional guide |
| Calendar | Companion after programme | Reference after discovery | Primary live content |
| Festival | Practical programme | Illustration, chapters, day groups | Activity routes, entry guidance |
| Community | Contacts/conditions | Feature profile | First-visit preparation |

Implement real search/state/category/date filtering, manual upcoming carousel, festival/community pages, directory filtering and live embeds. No framework, plugin, API integration, build or package install. A low-maintenance winner can remove the optional catalogue and keep evergreen directory/calendar content.

Profile sources: [IGDA Melbourne](https://igdamelbourne.au/), [entry conditions](https://igdamelbourne.au/code-of-conduct-and-event-conditions-of-entry), [Squiggly River](https://squigglyriver.com/), [manifesto](https://squigglyriver.com/manifesto/), [meetup FAQ](https://squigglyriver.com/meetups/). Squiggly River is in Brisbane/Meanjin, QLD. Its FAQ is older material; direct readers to latest organiser announcements for dates/venue, rather than publishing inferred recurrence.
