# Australian GameDev Events

A community calendar to help people find game development events across Australia.

Website: [gamesevents.github.io](https://gamesevents.github.io/)

The design is deliberately simple: **“3 iframes in a trenchcoat”** — two Google Calendar views and one Google Form, wrapped in a static GitHub Pages website. Google handles calendar and submission management so trusted community leaders can take over without needing to maintain an application.

## Start here, agents and maintainers

Read this README and the diaries in [`documentation/`](documentation/) before changing the project. The initial repository review and decisions are in [`documentation/2026-09-29_diary.md`](documentation/2026-09-29_diary.md).

For event work, start with the [website-to-ICS workflow](documentation/event-workflow.md), then read the [calendar formatting guide](documentation/event-formatting.md) and [current import queue](ics/README.md). These documents provide the selection preferences, research steps, duplicate checks, formatting, validation and upload/archive handoff without needing conversation history. The [2026 festival research](documentation/2026-festival-research.md) and [shortlist CSV](documentation/events/2026-festival-shortlist.csv) are worked examples.

Prepared imports awaiting upload live in [`ics/`](ics/). Old/already-uploaded files live in [`ics/archive/`](ics/archive/) and must be checked to avoid regenerating processed occurrences. The [historical festival manifest](documentation/events/2026-festival-imports.md) links the archived files and records the skipped events. The original September 26 full-calendar export is no longer in the checkout; obtain a fresh snapshot for complete duplicate coverage.

**`docs/` is the public website directory. Write documentation in `documentation/`.** This project overrides the usual convention of putting agent diaries and plans in `docs/`.

- Preserve the static, Google Calendar / Google Forms approach and the ability to hand management to community leaders.
- Manage event content in Google Calendar; routine event additions do not require website changes.
- Put decisions, plans, progress, and handoff notes in dated files under `documentation/`, and update the active diary during multi-step work.
- Keep generated event imports under `ics/`, and research CSVs under `documentation/events/`. Put files in `docs/` only when they are intended to be served on the website.
- Keep changes small and preserve existing uncommitted work. Follow the Operator's agent permissions; commits to `main` / `master` and publishing remain Operator responsibilities.
- Do not add a backend, database, framework, build pipeline, or automated calendar integration without an explicit request.

## Repository layout

| Path | Purpose |
| --- | --- |
| [`docs/index.html`](docs/index.html) | Website content, calendar embeds, form embed, subscription links, and community links. |
| [`docs/css/styles.css`](docs/css/styles.css) | Start Bootstrap Freelancer theme, including Bootstrap styles. |
| [`docs/js/scripts.js`](docs/js/scripts.js) | Navigation behaviour: shrinking navbar, scrollspy, and mobile menu collapse. |
| [`docs/assets/`](docs/assets/) | Public favicon, social preview image, and Merry H's event-board image. |
| [`documentation/`](documentation/) | Maintainer notes, decisions, dated diaries, research CSVs, and supplied calendar exports. |
| [`ics/`](ics/) | Pending event imports, with a current queue and upload status. |
| [`ics/archive/`](ics/archive/) | Old/already-uploaded files, used as processed history and formatting examples. |
| [`package.json`](package.json) | Minimal package metadata; no dependencies or build scripts. |
| [`LICENSE`](LICENSE) | MIT licence with the upstream Start Bootstrap notice. |

## How the calendar works

The page embeds the same public Google Calendar twice: an agenda view and a calendar grid. Both display in `Australia/Sydney`. A Google Form accepts event submissions. A separate mailing-list form and external community resources are linked from the page, including Merry H's Notion event board and Indie Digest.

The shared calendar ID is:

```text
e6f886bb015fd0782baab1c0a6779bec705be80e0ea616b61d91a55faddc522e@group.calendar.google.com
```

- [Subscribe in Google Calendar](https://calendar.google.com/calendar/u/0/r?cid=e6f886bb015fd0782baab1c0a6779bec705be80e0ea616b61d91a55faddc522e@group.calendar.google.com)
- [Public ICS export](https://calendar.google.com/calendar/ical/e6f886bb015fd0782baab1c0a6779bec705be80e0ea616b61d91a55faddc522e%40group.calendar.google.com/public/basic.ics)
- [Submit an event](https://docs.google.com/forms/d/e/1FAIpQLSeQmiwTdEI2wugkm4QHZqBi1TUiC0ahSbMNWVGbHEg2G5qO6Q/viewform)
- [Mailing-list form](https://docs.google.com/forms/d/e/1FAIpQLSc1R7Q0sn3e5eLz0vadkuTnH1SX8uOyd-V4yt2mp5KMw_K9lA/viewform)

There is no form-to-calendar automation in this repository. Maintainers should review submissions and add approved events in Google Calendar. Any Google-side automation or response storage would need to be checked separately.

Handing off day-to-day management means granting the appropriate Google Calendar and form access to trusted community leaders. Website access is needed only for changes to the page itself. Calendar access does not automatically grant form access.

If the shared calendar changes, update both iframe sources, the subscription link, and the ICS export link in `docs/index.html`, along with this README. Update form links and embeds if their destinations change.

## Preparing events with an agent

David's preferred workflow is to prepare files for manual import. No plugins or Calendar API setup are required. Follow the [event workflow](documentation/event-workflow.md) when given one event page, multiple websites, or an aggregator. Research and record the facts, check pending imports, archived occurrences and a recent complete calendar export, then produce ICS for eligible new events. Prioritise developer learning, networking, creation, and playtesting; exclude consumer-focused events and long-running exhibitions.

A sufficient request for a fresh agent is:

> Read README and `documentation/event-workflow.md`. Research upcoming Australian game-development events at these URLs: [paste links]. Prepare validated ICS files for eligible new events in `ics/`, skipping existing and processed occurrences, and update the research record and import queue.

An agent can prepare a downloadable `.ics` file for one event or a batch without Google account access or changes to the website. Provide an event announcement or source link, plus any details missing from it:

- Event title and description.
- Date, including year; start and end time, or explicit all-day dates.
- Event timezone or city, venue/address or online location.
- Official event or registration URL.
- Recurrence details, if applicable.

Resolve ambiguous dates, timezones, or durations before producing the final import. Use the event's local timezone and account for daylight saving; the website's Sydney display timezone is not a default for every event in Australia. Include the source URL in the description so attendees can check current information.

Save imports as `ics/YYYY-MM-DD_state_event-slug.ics`, and record what was prepared and whether it was imported in the active diary. Preparing a file does not add an event to the live calendar. High Score and GCAP should each be a single multi-day all-day entry. Keep practical conference hours in the description when published.

To import on a computer, open Google Calendar and go to **Settings → Import & export**. Select the `.ics` file, choose the **shared community calendar** as the destination, and import. Check the resulting title, dates, time, location, and links. Google defaults to the primary calendar, so select the destination deliberately. Importing is a one-time transfer; subsequent edits should be made in the destination calendar. See [Google's import instructions](https://support.google.com/calendar/answer/37118?hl=en).

An ICS import is the default handoff. A public embed or subscription URL does not grant editing permission; David or another trusted calendar editor chooses the destination and performs the import.

After David confirms upload or moves files to `ics/archive/`, update the pending queue, retain the batch manifest under `documentation/events/`, and record the processing status in the diary. Distinguish historical exports or drafts from confirmed imports where known. Do not regenerate a matching archived occurrence or assume that the archive is a complete live-calendar snapshot.

## Website maintenance

GitHub Pages serves `docs/` as the website root. There is no compilation or package-install step. The page loads Bootstrap JavaScript, Font Awesome, Google Fonts, Google Analytics, and a Start Bootstrap forms script from external services; the main theme CSS and navigation JavaScript are local.

For website changes, review the page at desktop and mobile widths, check navigation and subscription links, and verify the two calendar views and submission form. A local preview should serve `docs/` as its root because some asset links use absolute paths. Google embeds and CDN resources require an internet connection.

There is no automated test suite: `package.json` contains only a placeholder `test` script that exits with an error. For documentation-only changes, review links and run `git diff --check`.

## Attribution

The website uses [Start Bootstrap Freelancer](https://startbootstrap.com/theme/freelancer), version 7.0.6, with Bootstrap 5.1.3. Preserve the licence and attribution notices in the repository and theme files.
