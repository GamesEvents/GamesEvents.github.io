# Calendar event formatting

Historical reference: `aus_games_events_2026-09-26.ics`, supplied by David and reviewed on 29 September 2026 by unfolding its lines and parsing the VEVENT records offline. That full-calendar export is no longer in the checkout. Its 359 records included recurring masters and exceptions, so this was not a count of calendar occurrences. The observations below preserve the formatting evidence; [archived generated events](events/2026-festival-imports.md) provide accessible examples.

For the full research-to-import process, start with [event-workflow.md](event-workflow.md).

## What the existing calendar does

Recent entries establish the clearest convention. Of the 95 records with a DTSTART in 2026, 80 use `STATE - ` at the start of the title, 81 have a Location field, 69 contain HTML in their descriptions, and only three have a separate URL property. These counts describe the export rather than a requirement to reproduce every historical variation.

| Field | Observed examples and convention |
| --- | --- |
| Title / SUMMARY | `NSW - Waypoint Constellations`, `VIC - Parallels 2026`, `ACT - Digital Dissent in Discussion`. Uppercase state, space, hyphen, space, then the recognisable event name. |
| Online title | `NSW/Online - Virtual Beer and Pixels` exists for a specifically online event. |
| Location / LOCATION | Venue followed by street address, suburb/city, state, postcode, and Australia when available. Examples include The Capitol in Melbourne and UNSW CBD Campus in Sydney. |
| Description / DESCRIPTION | Source or ticket URL, often near the beginning, then useful organiser information. Paragraphs, headings, lists, and links are common; plain text is also used. |
| Dates | Timed events use UTC values ending in `Z` or local values with a named `TZID`. All-day events use `VALUE=DATE`. |
| Recurrence | Monthly meetups use RRULE. Some dates are removed with EXDATE; individual changes can use RECURRENCE-ID. |

Sampled records included Waypoint Constellations, MASS Dev Day, Eye Candy Game Jam's launch night, Technically Games, Parallels 2026, Every Game Talk Possible, Making Waves, Digital Dissent in Discussion, and an AGDA submission deadline. Historical titles sometimes use city abbreviations, festival prefixes, or no prefix. Use the recent state convention for new entries.

## Consistent defaults for new events

These defaults interpret the recent examples and David's current selection preferences; they are not claims that every old event follows the same template.

**Title:** `STATE - Event name`. Use `NSW`, `VIC`, `QLD`, `SA`, `WA`, `TAS`, `ACT`, or `NT`. Preserve the organiser's recognisable name and year where useful. Use ordinary title casing rather than converting the entire name to uppercase. Keep long marketing subtitles out of the title. David prefers High Score and GCAP as single multi-day all-day entries, without daily suffixes.

**Location:** put the venue and verified address in LOCATION. Do not invent an address from a similarly named venue. For hybrid workshops, retain the physical venue and explain the online option in the description. For an online-only event, use `Online` and link to the public attendance/registration page.

**Description:** begin with the official event or ticket link. Follow with a short explanation of what attendees can learn, make, show, or discuss. Add only useful details such as the intended audience, registration requirement, eligibility, doors versus session times, or what to bring. Preserve essential restrictions: invitation-only, women/gender-diverse attendees, industry-only, or age limits. Link to the full organiser description instead of copying large pages of promotional text.

Plain-text template for an importable ICS description:

```text
https://organiser.example/event

Short description of the event and its relevance to game developers.

Registration: Ticket or RSVP requirement, if verified.
Audience: Relevant eligibility or age restrictions, if any.
Notes: Useful attendance details, such as bringing a playable prototype.
```

The export shows rich text stored inside Google's DESCRIPTION values, but that does not establish how a newly imported file will render HTML. Generate a readable plain-text DESCRIPTION for interoperability. Add an optional rich-text alternative only after checking the actual Google import result; the source link and readable content must still be available in plain text. A separate URL property can supplement the description link.

## Event selection and time handling

- Include development talks, workshops, careers events, industry networking, game jams, creator showcases, and prototype playtesting.
- Ordinary board-game nights, tournaments, public concerts, consumer expos, and long-running gallery exhibitions fall outside the current scope. Tabletop **development** events can qualify when they offer design discussion or playtesting.
- Use individual scheduled sessions rather than an exhibition's entire run or a festival-wide placeholder. High Score and GCAP are approved exceptions: use one all-day entry covering each conference's dates, with published daily hours in its description.
- Capture the event's local IANA timezone. Melbourne uses `Australia/Melbourne`; Sydney uses `Australia/Sydney`. The export's calendar-level timezone is Melbourne, while the website displays Sydney time. Neither makes every Australian event an east-coast event.
- Resolve dates including the year, daylight saving, overnight ends, missing times, and conflicting sources before generating the final ICS. Midnight in a date-only festival listing can be a default value; it is not proof that the event starts at midnight.
- The CSV is research data. Blank datetime fields mean missing information, and flagged conflicts need review. Do not infer an event starts at midnight from a default festival header. For this approved batch, Play Now is represented by its confirmed date, with its unpublished hours and venue stated explicitly in the description; this is a date marker rather than a claim about attendance hours. Do not use that exception as a default for future incomplete announcements.

## Avoiding duplicate imports

Compare the event name, source link, local date/time, and location against pending `ics/` files, processed `ics/archive/` files, and a recent complete calendar export. Matching archived occurrences must not be regenerated. Deduplicate individual and combined archive records by UID; a prepared batch is not a complete calendar snapshot. Inspect RRULE, EXDATE, RDATE, and RECURRENCE-ID before deciding whether a recurring occurrence is present. A matching series title is not enough.

Two specific findings in the September export demonstrate why:

- Beer and Pixels has an ongoing monthly series, but `EXDATE:20261013T080000Z` removes its October festival occurrence. The newly announced session needs separate consideration.
- A record named `NSW - Playmakers Arcade - Sydney Games Festival Edition` is a monthly first-Wednesday series beginning in May. Its October recurrence falls on 7 October, while the published festival event is on 14 October. Review this series before creating or changing a festival entry.

Retain matching existing UIDs as research references. Do not assume re-importing an edited ICS will update an existing Google event. Handle existing-event corrections deliberately in the destination calendar. Use a stable new UID for each genuinely new event, and record preparation and confirmed import status in the diary.

For the September 2026 batch, David requested skipping existing events. Parallels, Technically Games, and the related Playmakers Arcade series were therefore skipped along with the five exact matches. The explicitly excluded Beer and Pixels occurrence was prepared as a new one-off event with a new UID and no RRULE.

## ICS serialization checklist

Use [RFC 5545](https://www.rfc-editor.org/rfc/rfc5545) for serialization, separately from the human-facing formatting above:

- UTF-8 text, CRLF line endings, and content-line folding at 75 octets without splitting UTF-8 characters.
- VCALENDAR with VERSION and PRODID; each VEVENT has its own UID, UTC DTSTAMP, DTSTART, SUMMARY, and verified DTEND.
- Escape backslashes, commas, semicolons, and newlines in TEXT values. Preserve readable URLs in the description.
- For one-off timed imports, convert the verified local times to UTC with a timezone-aware library. This avoids depending on incomplete VTIMEZONE definitions.
- For recurring events expressed in local time, use an appropriate TZID and VTIMEZONE so the wall-clock time follows daylight saving.
- DTEND is exclusive. For an all-day event on 8 October, use DTSTART date 8 October and DTEND date 9 October. Midnight at the end of an evening belongs to the following date.
- Do not add attendees, invitations, or reminders unless requested.

When sampling a large export, unfold continuation lines before interpreting properties. Read a bounded selection of SUMMARY, DESCRIPTION, LOCATION, date, and recurrence fields rather than printing the entire file.

Save prepared files under the repository's root [`ics/`](../ics/) directory and update its pending queue. David moves old/already-uploaded files to [`ics/archive/`](../ics/archive/); preserve their UIDs and update status/links when that happens. Keep research, historical manifests and formatting documentation here in `documentation/`; `docs/` remains the public website.
