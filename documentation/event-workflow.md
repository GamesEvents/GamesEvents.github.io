# From event websites to upload-ready ICS

This is the reusable workflow for an agent with no conversation history. David supplies an event page, a list of websites, or an event aggregator. Research those sources and prepare files that David can upload to the shared **Game Developers of Australia** Google Calendar.

Read [README](../README.md), this guide, the [formatting guide](event-formatting.md), and the [import queue](../ics/README.md). The [2026 research notes](2026-festival-research.md) are a worked example, not an exhaustive list of events or a requirement to repeat that batch.

## Project boundaries and directories

The website is deliberately static: two Google Calendar iframes and one Google Form. Event preparation does not require changes to website source, a Calendar API, plugins, account credentials, or dependency installation. Use available tools and an existing Python environment when helpful. Follow the agent's harness permissions and the Operator's runtime rules.

| Path | Use |
| --- | --- |
| `docs/` | Public GitHub Pages website. Do not put research, diaries or imports here. |
| `documentation/` | This workflow, formatting rules, research notes and dated diaries. |
| `documentation/events/` | Research CSVs and historical batch manifests. |
| `documentation/calendar-exports/` | Suggested location for future dated complete-calendar snapshots, when obtained. |
| `ics/` | Newly prepared files awaiting upload; the README records the queue. |
| `ics/archive/` | Old/already-uploaded files moved here by David; processed history and formatting examples. Do not requeue these files. |

The original `aus_games_events_2026-09-26.ics` full-calendar export is no longer in this checkout. The archived festival batch contains only its 24 prepared events; it is **not** a replacement for a complete calendar export.

## 1. Research the supplied sources

For a single event, follow its organiser or registration link. For multiple websites or an aggregator, inspect listings and follow individual event links; do not turn the aggregator or whole festival into a calendar event.

Prefer upcoming occurrences relative to the current Australian date unless David requests historical dates or a different window. Verify the year: websites can retain last year's pages. Follow pagination, day filters and loaded schedules as needed; dynamically loaded programs can differ from their static overview. Stay within the supplied sources and their relevant event links unless wider research was requested.

For each candidate, establish:

- Recognisable name and its relevance to game developers.
- Australian state/territory, local date, start/end, and IANA timezone; or confirmed all-day dates.
- Venue and verified address, or the online attendance link.
- Official event/registration URL, supporting timing source, and the date checked.
- Short original summary, registration requirements and audience restrictions.
- Recurrence, cancellation/postponement, source conflicts, and missing facts where applicable.

Use dated organiser announcements, current ticket pages and detailed running orders to resolve conflicting aggregator metadata. Record the competing values and the reason for selecting one. Do not silently choose a duration, treat “Late” as midnight, or use a default `00:00` header as an attendance time. Verify that a venue is for this event rather than an unrelated label or old template block.

Explain an unfamiliar organiser's game-industry role when that makes the event's relevance clearer, as with [the archived Xsolla breakfast](../ics/archive/2026-10-06_vic_xsolla-breakfast-meetup-2026.ics). Use a primary company source for that explanation. Keep descriptions short rather than copying entire announcements.

## 2. Apply David's selection preferences

Include Australian developer learning, technical or creative talks, workshops, careers, professional networking, game jams, and prototype playtesting. Creator-focused tabletop events can qualify when they involve design, development or prototype feedback.

Exclude ordinary board-game nights, tournaments, consumer expos, general public concerts and long-running exhibitions. A public-facing event can qualify when its actual scheduled session includes developer discussion or playtesting. Do not block the calendar for months because an exhibition has a long run.

High Score and GCAP should each be a single multi-day all-day event covering their confirmed conference dates, with useful daily hours in the description. This does not authorise all-day festival placeholders or every other multi-day event.

If essential date/time facts remain missing, record the candidate as needing review and continue with other clear events. The previous Play Now date-only listing was a documented exception for an approved batch; do not automatically invent all-day listings for future missing-time events. Ask only for the consequential missing information that cannot be verified from sources.

## 3. Keep a research record

For multiple candidates, save a UTF-8 CSV under `documentation/events/`, plus concise source/conflict decisions in the active dated diary. The [2026 shortlist](events/2026-festival-shortlist.csv) is a sample. Its daily High Score/GCAP rows predate David's grouping decision; future research should reflect the final chosen event structure.

Keep the original requested columns: `event_name`, `state`, `event_url`, `start_datetime`, `end_datetime`, `duration`, `summary`. Also record timezone, location, timing status, existing-calendar status/UID, supporting source URL, date checked, and useful notes. Use lowercase state abbreviations in `state` and uppercase prefixes in calendar titles. Timed datetimes use ISO 8601 with verified local UTC offsets; durations use ISO 8601 such as `PT2H`.

For all-day entries, record explicit `start_date` and `end_date_exclusive` columns or clearly labelled notes rather than fictitious timed datetimes. Missing clock times stay blank. Quote CSV values correctly; use a CSV writer rather than concatenating comma-separated strings. If a spreadsheet skill is applicable in the agent's harness, follow it.

A CSV is research, not Google's import CSV format. It is not an automatic approval gate: when asked to make ICS files, generate clear eligible new events within that request. If David asks for a shortlist first, stop at that requested deliverable.

## 4. Check duplicates and processed history

Check **both** pending `ics/*.ics` files and archived `ics/archive/**/*.ics` files, plus the newest complete calendar export available. An archive may contain individual files and a combined batch with the same UIDs; deduplicate those records by UID before counting or comparing events.

The public export URL is linked in [README](../README.md). When a read-only download is available, save a dated snapshot under `documentation/calendar-exports/` and record its retrieval time and coverage. Otherwise use an Operator-supplied export. Read only bounded samples from a large export: unfold continuation lines and parse VEVENT records offline, rather than printing thousands of lines.

Compare source URL and its aliases, recognisable title, local occurrence date/time and venue. UID alone cannot identify an event that has not yet been assigned one. A matching archived occurrence is processed history and should be skipped; a new date of the same named meetup may be a genuinely new occurrence. An old full-calendar snapshot or an archived batch does not prove the live calendar is current or complete.

For series, evaluate RRULE, RDATE, EXDATE and RECURRENCE-ID for the relevant occurrence. An explicitly excluded date may need a new one-off entry. A related series with a questionable date/time needs review, rather than a second event created to hide the discrepancy. Existing end-time differences are correction candidates; do not generate duplicates as updates. Skip matching events unless David explicitly requests a correction workflow.

Record decisions such as `not_in_export`, `already_listed`, `already_archived`, `already_prepared`, `existing_time_differs`, `recurrence_excluded`, or `related_series_review`, along with the comparison baseline and matching UID. If no complete recent snapshot is available, state the limited duplicate coverage, skip known archived/pending matches, and leave uncertain matches for review. Continue useful work on clearly new events.

## 5. Generate files consistently

Apply [event-formatting.md](event-formatting.md): `STATE - Event name`, verified LOCATION, source URL first in a readable plain-text DESCRIPTION, useful developer relevance and attendance restrictions. Include a separate URL property. Do not add attendees, invitations or reminders.

Create one file per new event as `ics/YYYY-MM-DD_state_event-slug.ics`. For a batch, also offer one combined file containing the same events with the **same UIDs**, so David can import everything once or select individual files. Clearly explain that the two routes are alternatives.

Use stable event IDs and preserve IDs of pending files when regenerating the same event. The 2026 batch used `uuid.uuid5(uuid.NAMESPACE_URL, "https://gamesevents.github.io/|" + event_url + "|" + local_start_date)`, followed by `@gamesevents.github.io`. Use a canonical event URL and ISO local start date; add a stable session identifier if one page represents multiple distinct sessions on the same date. Do not use random new IDs each time. Stable IDs do not establish that re-importing updates Google events.

Use UTF-8, CRLF, proper TEXT escaping and folding at 75 octets without splitting UTF-8 characters. Each VEVENT needs UID, UTC DTSTAMP, DTSTART, SUMMARY and the verified DTEND. For one-off timed events, convert local instants to UTC using a timezone-aware library such as Python `zoneinfo`. For all-day events use `VALUE=DATE` and an exclusive end date. Overnight events finish on the next date. Do not infer future recurrence from a single dated announcement.

Working serialization examples are [the timed EMERGENT event](../ics/archive/2026-10-03_vic_emergent-2026.ics), [multi-day High Score](../ics/archive/2026-10-03_vic_high-score-2026.ics), and [the combined festival batch](../ics/archive/2026-festival-new-events.ics). Read small examples or a bounded sample, and generate fresh event facts rather than copying old dates, UIDs or timestamps.

## 6. Validate and hand over

Parse/unfold the generated files independently and verify:

- Individual files contain one event each; the combined batch contains exactly the selected new events with identical per-event data and UIDs.
- Required properties, TEXT escaping, UTF-8, CRLF and line-fold lengths are valid.
- Every timed start/end round-trips to the verified local values, including daylight saving; each end is after its start.
- All-day end dates are exclusive; overnight ends use the following date.
- Title prefixes, descriptions, locations, URLs and restrictions match the research facts.
- No existing/archived/pending occurrence is duplicated, and no new UID collides with a different event.
- Local manifest/documentation links exist and `git diff --check` passes.

Update `ics/README.md` with the current pending batch, local dates/times, individual and combined links, skipped entries, missing facts and **prepared, not yet confirmed uploaded** status. Record sources, decisions, duplicate baseline and validation in the diary. Final handoff should link the files, state the event count and any material unresolved details, and give manual-import instructions. Do not claim live upload without confirmation.

David imports on a computer through Google Calendar **Settings → Import & export**, selecting the shared **Game Developers of Australia** calendar. See [Google's instructions](https://support.google.com/calendar/answer/37118?hl=en). Import the combined file or selected individual files, and check the resulting events. Calendar upload and website publishing are separate actions.

After David confirms processing or moves files to `ics/archive/`, treat them as history. Update upload/archive status and links, retain sources and UIDs, and keep processed batches out of the pending queue. Never infer that every file in a mixed archive was uploaded: preserve any known distinction between historical exports, discarded drafts and confirmed imports. Do not archive, delete or overwrite pending files on your own merely because they are old.
