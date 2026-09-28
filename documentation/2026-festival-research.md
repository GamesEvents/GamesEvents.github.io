# 2026 festival event research

Checked on 29 September 2026. The shortlist is [`events/2026-festival-shortlist.csv`](events/2026-festival-shortlist.csv). It is research input, not a Google Calendar import CSV. The approved imports are now in [`../ics/`](../ics/): [batch index](../ics/README.md) and [combined import](../ics/2026-festival-new-events.ics). Live import has not been confirmed.

## Scope and sources

Reviewed [Melbourne International Games Week's industry program](https://gamesweek.melbourne/events/industry-events), [its DLC program](https://gamesweek.melbourne/events/dlc), and the live day-by-day [Sydney Games Festival program](https://sydneygamesfestival.org/program/). Individual festival listings and organiser/ticket pages were used for dates, hours, venue, and audience. Each CSV row records the page supporting its selected time in `source_url` and provides a useful event link in `event_url`.

The shortlist covers developer conferences, technical and creative talks, careers, beginner creation workshops, industry networking, a game-jam launch, and playtesting. Ordinary board-game sessions, tournaments, concerts, consumer expos, and long-running exhibitions were excluded. DevCon qualifies as a tabletop **creator** event with talks and prototype feedback. Waypoint qualifies through developer storytelling and playable creator work. Making Waves qualifies through audio-development commentary, workshops, and networking.

The research CSV retains two daily rows for High Score and three for GCAP, using the festival's published daily attendance windows. David subsequently requested a single multi-day all-day entry for each conference: High Score on 3–4 October and GCAP on 5–7 October. The generated ICS files follow that decision, with practical daily hours in their descriptions. The broad festival placeholders already in the calendar were not added to this shortlist.

## CSV fields

| Field | Meaning |
| --- | --- |
| `event_name` | Proposed calendar title, using the state-prefix convention. |
| `state` | Lowercase Australian state/territory abbreviation. |
| `event_url` | Official event, organiser, or registration page for further information. |
| `start_datetime`, `end_datetime` | ISO 8601 local datetime with UTC offset. Blank when no reliable clock time is published. |
| `duration` | Elapsed duration in ISO 8601 form, e.g. `PT4H` or `PT1H30M`. Blank if the interval is incomplete. |
| `summary` | Short original summary of the event's developer relevance. |
| `timezone` | IANA timezone used to resolve the datetimes. |
| `location` | Published venue/address or hybrid location. |
| `timing_status` | `published`, `published_with_conflict`, or `date_only`. |
| `existing_calendar_status` | Match against the supplied September 26 export; see below. |
| `existing_uid` | UID of a matching or related exported event/series, if any. |
| `source_url` | Source supporting the selected clock time; useful when the festival and organiser disagree. |
| `checked_on` | Research date, not a guarantee that the event remains unchanged. |
| `notes` | Eligibility, missing information, source discrepancies, and existing-calendar differences. |

This CSV deliberately preserves explicit offsets as text. Melbourne and Sydney are on `+10:00` for the 2–3 October rows and `+11:00` for daytime events from 4 October. Duration is computed from the resolved instants. Numeric/date-only placeholders were not substituted for missing times.

## Existing-calendar statuses

The downloaded export is the comparison baseline; no live calendar access was used.

- `not_in_export`: no matching event for these dates was found in the supplied export.
- `already_listed`: the exported event agrees with the selected attendance window.
- `existing_time_differs`: a matching event is present, but its published attendance window differs. Review the existing event rather than importing a duplicate.
- `recurrence_excluded`: an existing recurring series explicitly removes this date. For Beer and Pixels, the festival occurrence may need a separate entry after checking the current calendar.
- `related_series_review`: a related series exists, but its recurrence does not describe this dated event correctly. Review before import.

For this batch, skip `already_listed`, `existing_time_differs`, and `related_series_review` entries, following David's request to skip existing events. Include the explicitly excluded Beer and Pixels occurrence as a new one-off event. The selected organiser times are retained for new entries with source conflicts. `not_in_export` is not proof that somebody has not added the event since September 26.

## Specific timing and duplication findings

| Event | Finding and selected research value |
| --- | --- |
| Xsolla breakfast | [Organiser page](https://events.xsolla.com/xsollabreakfastmeetupinmelbourne) and its agenda say 08:30–10:00 on 6 October; the festival's detail page says 08:45–10:00. CSV uses the organiser's 08:30 and flags the conflict. The page also contains unrelated old template blocks; use its Melbourne event heading, agenda, and venue. |
| MASS Launch Party | [Organiser ticket page](https://events.humanitix.com/mass-launch-party) says 19:00–23:00; festival metadata says 23:30 and body text says “Late”. CSV uses 23:00 and flags the conflict. Industry-only. |
| DevCon | [Organiser ticket page](https://events.humanitix.com/tgda-devcon-2026) says 16:30–22:30; festival says 22:00. CSV uses 22:30 and flags the conflict. An earlier informal meetup is mentioned but lacks sufficient venue details for its own entry. |
| Parallels | [Festival running order](https://gamesweek.melbourne/events/industry-events/freeplays-parallels) and [organiser running order](https://events.humanitix.com/parallels-2026) finish at 22:30; the ticket header and export end at 23:00. CSV represents doors at 19:00 through the show end at 22:30 and flags both the source conflict and export difference. The 22:30 afterparty is separate. |
| Technically Games | Festival lists 17:30–22:00 on 10 October; export has 17:30–21:30. CSV uses the festival time and marks an existing-event correction candidate. |
| Every Game Talk Possible | [Organiser ticket page and stream timetable](https://events.humanitix.com/egtp-2026) support 12:00–20:00, agreeing with the export. Sydney festival schedule says 19:30. CSV retains 20:00 and flags the source conflict; this is not a new event. |
| Play Now | Festival publishes 8 October with a default midnight header but no actual attendance hours. [VicScreen's official page](https://vicscreen.vic.gov.au/playnow/) also confirms 8 October 2026 without hours or venue. CSV leaves datetimes/duration blank; the approved batch includes a date-only entry that explicitly says hours and venue are unpublished. Invitation-only; submissions are closed. |
| Megadev | Festival body says “Late”, but [the organiser explicitly says midnight](https://eventhost.au/-/megadev-2026/about). CSV ends at 00:00 on 12 October. |
| Beer and Pixels | Festival publishes 13 October, 18:30–22:30. The export excludes the corresponding October occurrence from its existing monthly series. |
| Playmakers Arcade | Live festival schedule publishes 14 October, 17:00–21:00 at UTS Startups. The export's festival-named series instead recurs on first Wednesdays, including 7 October; review this related series. |

Sydney's static week overview still calls Wednesday “Board Game Dev Night”. The current loaded schedule instead lists Playmakers Arcade and Avant Harde Drive. The CSV follows the loaded schedule.

All Play Day was excluded from the initial shortlist because the full event is a general public games day. Its description mentions meeting developers and helping shape games; a separately scheduled developer demo/playtest session could be reconsidered if published. No full-day consumer entry was created.

MASS Open House and broad showcases were omitted from this first pass: they describe drop-in space or general public gameplay rather than a focused developer session. No exhibition runs, festival-wide blocks, or consumer concerts were added. Event access requirements remain in notes so invitation-only or audience-restricted listings are not mistaken for open meetups.

## Xsolla context

This event was discovered through [MIGW's Xsolla industry listing](https://gamesweek.melbourne/events/industry-events/xsolla-breakfast-meet-up), which links to the organiser RSVP page. [Xsolla's official site](https://xsolla.com/) identifies its video-game payments, web shops and other business tools for developers and publishers. The event description now explains that role and the breakfast's relevance to studio teams and industry partners, and includes both the company and MIGW links. Invitation confirmation is required; submitting an RSVP does not guarantee a place.

The organiser page was rechecked during generation: its opening agenda remains 08:30–08:40 and breakfast/networking 08:40–10:00, while its small top block and MIGW still show 08:45. The approved research value of 08:30 is retained. Unrelated Cologne/2024 template content was ignored.

## Prepared batch and handoff

Prepared 24 distinct new events as 24 individual files plus one combined 24-event import under root `ics/`. High Score and GCAP were combined as requested. Play Now uses a transparent date-only description; no attendance time or address was invented. Timed entries use the selected CSV offsets converted to UTC. The source CSV and supplied export remain unchanged.

Skipped eight existing listings: Eye Candy launch, MASS Dev Day, Waypoint Constellations, Every Game Talk Possible, Making Waves, Parallels, Technically Games, and the related Playmakers Arcade series. Existing timing or recurrence issues are recorded above for direct calendar review, without generating duplicate correction events.

Import the combined file once, or choose individual files; do not import both versions. Confirm the destination is the shared calendar and check the resulting dates, descriptions, links, and locations. Record import status in the active diary only after David or another editor confirms it. No plugin, API credentials, dependency installation, or website build is required for this file-based workflow.
