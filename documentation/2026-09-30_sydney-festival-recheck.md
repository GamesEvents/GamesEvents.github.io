# Sydney Games Festival programme recheck — 30 September 2026

David asked whether the festival had posted more events since the 29 September research. I reviewed the [current live day-by-day programme](https://sydneygamesfestival.org/program/) for the pre-festival section and every day from 12–18 October, then compared candidate names, dates and URLs against the [earlier shortlist](events/2026-festival-shortlist.csv), the [archived import manifest](events/2026-festival-imports.md), and the empty [pending queue](../ics/README.md).

The programme now shows three additional listings that fit the calendar's game-development focus. They are **absent from the earlier research and archived import batch**. That does not establish when the organisers published them, nor whether someone has independently added them to the live Google Calendar.

| Candidate | Local time (AEDT) | Why it qualifies | Organiser source / detail to retain |
| --- | --- | --- | --- |
| NSW - Board Game Social + Tabletop Dev Night | Wed 14 Oct, 18:00–21:00 | Designated tables let tabletop designers show new games and RPGs to players; relevant to prototype feedback, despite the wider casual social. | [Fortress Sydney booking page](https://events.humanitix.com/sydney-games-festival-tabletop-dev-night-fortress-sydney), Fortress Sydney, 28 Broadway, Chippendale NSW 2008. The festival card shows 18:00–22:00 but the booking page shows 18:00–21:00; use/check the organiser time before an import. |
| NSW - Sydney Tertiary Student Showcase | Thu 15 Oct, 18:00–21:00 | Sydney tertiary game students show playable projects, explain their development process and meet other aspiring makers. | [Fortress Sydney booking page](https://events.humanitix.com/sydney-games-festival-student-showcase-fortress-sydney), 2315 Bar at Fortress Sydney, 28 Broadway, Chippendale NSW 2008. |
| NSW - Eye Candy Game Jam: CBD Showcase Day | Fri 16 Oct, 12:00–19:00 | Game-jam creators present finished work beside the Every Game Talk Possible industry event; distinct from the 2 October launch already in the earlier shortlist. | [UNSW Game Making Society booking page](https://events.humanitix.com/eye-candy-game-jam-showcase), UNSW CBD Campus Room 401, level 4/210 George St, Sydney NSW 2000. |

All three have an official event page, year, clock times, Sydney location and a clear reason to include them. Tickets/attendance conditions should be checked again before publishing or uploading; the event pages have booking links but no verified claim of remaining capacity is made here.

Other programme entries now visible include the week-long Digital LAN Showcase, trivia, regular tabletop/card nights, a concert, New Games in the park, and All Play Day. These are primarily consumer play or long-running showcases, so they do not meet the current developer-focused selection preference. The Cyberpunk Games Night mentions some locally designed video games, but its main programme is a general game night, so it is not included in this pass. The older Playmakers Arcade listing remains on the festival's 14 October schedule, while the prior calendar export showed a first-Wednesday recurrence on 7 October; resolve that existing-entry discrepancy rather than importing a duplicate.

## Duplicate coverage and next step

- No candidate name or organiser URL was found in the 29 September shortlist, archived festival import manifest, current pending queue, or the trial site's dated data snapshot. That is a **local-history comparison only**.
- The original complete 26 September calendar export is absent. An attempt to open the current public ICS export through the available read-only web route failed, and the browser blocked the calendar-export URL. I did not bypass the browser restriction. The live calendar status of these three events remains unverified.
- This was a programme **check**, not a request to add events, so no ICS files or Google Calendar entries were created. Before import, compare against a fresh complete export supplied by David or check the shared calendar directly, then prepare only absent occurrences following [event-workflow.md](event-workflow.md).
- The [social media plan](2026-09-29_social-media-plan.md) should continue to highlight already-researched events. Once any of these three appear on the live shared calendar, the Sydney spotlight could add the student showcase or Eye Candy showcase as a fresh example. Do not imply these three are on the calendar before verifying that.

No website source, archived ICS, existing CSV or live service was changed during this recheck.

## Follow-up: ICS prepared on 30 September

David subsequently requested import files for these three candidates. [The pending import queue](../ics/README.md) now lists three individual ICS files and one combined three-event file. The combined and individual files have identical VEVENT data and UIDs; choose one import route. The tabletop night uses the organiser's 18:00–21:00 interval and explains the conflicting festival end time in its description. All times were converted from `Australia/Sydney` (AEDT, UTC+11) to UTC.

Validation independently unfolded and parsed every file, checked CRLF and the 75-octet content-line limit, required fields, unique/stable UIDs, exact combined-versus-individual equality, and each local start/end round-trip. No live-calendar duplicate comparison was possible; inspect the shared calendar before importing. These files are **prepared, not confirmed uploaded**.
