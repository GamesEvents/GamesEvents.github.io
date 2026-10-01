/* Progressive enhancement for the static trials. No calendar API or iframe access. */
(() => {
  "use strict";
  const data = window.GAME_EVENTS_DATA;
  if (!data) return;
  const categories = { conference: "Conferences", talk: "Talks", workshop: "Workshops", playtest: "Playtests", networking: "Networking", showcase: "Showcases", careers: "Careers" };
  const states = { nsw: "NSW", vic: "VIC", qld: "QLD", sa: "SA", wa: "WA", tas: "TAS", act: "ACT", nt: "NT" };
  const filterKeys = ["q", "state", "category", "from", "to", "period"];
  const style = document.body.dataset.style || "1";
  const now = () => new Date();

  function validDate(value) {
    return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value + "T12:00:00Z")) && new Date(value + "T12:00:00Z").toISOString().slice(0, 10) === value;
  }
  function previousDate(date) {
    const d = new Date(date + "T12:00:00Z");
    d.setUTCDate(d.getUTCDate() - 1);
    return d.toISOString().slice(0, 10);
  }
  function localDate(date, timezone) {
    const parts = new Intl.DateTimeFormat("en-AU", { timeZone: timezone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(date);
    const part = name => parts.find(p => p.type === name).value;
    return `${part("year")}-${part("month")}-${part("day")}`;
  }
  function bounds(event) {
    const first = event.startDate || event.start.slice(0, 10);
    let last = event.endDate ? previousDate(event.endDate) : event.end.slice(0, 10);
    if (!event.endDate && event.end.slice(11, 19) === "00:00:00" && last > first) last = previousDate(last);
    return { first, last };
  }
  function upcoming(event, at = now()) {
    return event.endDate ? localDate(at, event.timezone) < event.endDate : Date.parse(event.end) > at.getTime();
  }
  function normaliseFilters(values) {
    const clean = {
      q: String(values.q || "").trim().slice(0, 160),
      state: Object.hasOwn(states, values.state) ? values.state : "",
      category: Object.hasOwn(categories, values.category) ? values.category : "",
      from: validDate(values.from || "") ? values.from : "",
      to: validDate(values.to || "") ? values.to : "",
      period: values.period === "all" ? "all" : "upcoming"
    };
    // Reversed ranges are corrected rather than producing an unexplained empty list.
    if (clean.from && clean.to && clean.from > clean.to) [clean.from, clean.to] = [clean.to, clean.from];
    return clean;
  }
  function matches(event, filters, at = now()) {
    if (filters.period !== "all" && !upcoming(event, at)) return false;
    if (filters.state && event.state !== filters.state) return false;
    if (filters.category && !event.categories.includes(filters.category)) return false;
    const { first, last } = bounds(event);
    if (filters.from && last < filters.from) return false;
    if (filters.to && first > filters.to) return false;
    const haystack = [event.title, event.summary, event.location, event.state, event.access, event.format, ...event.categories.map(c => categories[c])].join(" ").toLocaleLowerCase("en-AU");
    return !filters.q || haystack.includes(filters.q.toLocaleLowerCase("en-AU"));
  }
  function filterEvents(events, filters, at = now()) {
    return events.filter(event => matches(event, normaliseFilters(filters), at));
  }
  function dateText(value, options = {}) {
    return new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "short", timeZone: "UTC", ...options }).format(new Date(value + "T12:00:00Z"));
  }
  function dateLabel(event) {
    const { first, last } = bounds(event);
    return first === last ? dateText(first) : `${dateText(first)} – ${dateText(last)}`;
  }
  function timeText(value, timezone) {
    return new Intl.DateTimeFormat("en-AU", { timeZone: timezone, hour: "numeric", minute: "2-digit" }).format(new Date(value));
  }
  function whenText(event) {
    const year = bounds(event).first.slice(0, 4);
    if (event.startDate) return `${dateLabel(event)} ${year} · ${event.dateOnly ? "hours not announced" : "multi-day conference; check daily timetable"} · ${event.timezone}`;
    const zone = event.start.endsWith("+11:00") ? "AEDT" : event.start.endsWith("+10:00") ? "AEST" : event.timezone;
    const endDay = event.end.slice(0, 10) !== event.start.slice(0, 10) ? ` (${dateText(event.end.slice(0, 10))})` : "";
    return `${dateLabel(event)} ${year} · ${timeText(event.start, event.timezone)} – ${timeText(event.end, event.timezone)}${endDay} ${zone} · ${event.timezone}`;
  }
  function el(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function link(text, href, className) {
    const node = el("a", text, className);
    node.href = href;
    return node;
  }
  function eventArticle(event, compact, headingLevel = "h3") {
    const article = el("article", undefined, "event");
    article.dataset.eventId = event.id;
    const date = el("div", dateLabel(event), "date-block");
    const content = el("div", undefined, "event-content");
    const heading = el(headingLevel);
    heading.append(link(event.title, event.url));
    const metadata = `${states[event.state]} · ${event.categories.map(c => categories[c]).join(" / ")}${event.format === "hybrid" ? " · Hybrid" : ""}${event.beginner ? " · Introductory" : ""}`;
    content.append(el("p", metadata, "event-meta"), heading, el("p", event.summary, "event-summary"));
    const details = compact ? el("details") : el("div", undefined, "event-practical");
    if (compact) details.append(el("summary", "Time, place and entry details"));
    details.append(el("p", whenText(event), "event-datetime"));
    details.append(el("p", event.location || "Venue not announced in the reviewed sources."));
    if (event.access) details.append(el("p", event.access, "event-access"));
    if (event.caveat) details.append(el("p", event.caveat, "event-caveat"));
    const source = el("p", undefined, "event-source");
    source.append(link("Check organiser details", event.url));
    if (event.sourceUrl && event.sourceUrl !== event.url) source.append(document.createTextNode(" · "), link("Timing source", event.sourceUrl));
    if (event.contextUrl) source.append(document.createTextNode(" · "), link("About Xsolla", event.contextUrl));
    details.append(source);
    content.append(details);
    article.append(date, content);
    return article;
  }
  function fromURL() {
    const params = new URLSearchParams(window.location.search);
    return normaliseFilters(Object.fromEntries(filterKeys.map(key => [key, params.get(key) || ""])));
  }
  function openProgramme() {
    const drawer = document.querySelector(".programme-drawer");
    if (drawer && (window.location.hash === "#programme" || filterKeys.some(key => new URLSearchParams(window.location.search).has(key)))) {
      drawer.open = true;
      if (window.location.hash === "#programme") document.getElementById("programme").scrollIntoView({ block: "start", behavior: "auto" });
    }
  }
  function setupCatalogue(root) {
    const form = root.querySelector("[data-filters]");
    const controls = Object.fromEntries(filterKeys.map(key => [key, form.elements.namedItem(key)]));
    const list = root.querySelector("[data-events]");
    const count = root.querySelector("[data-count]");
    const empty = root.querySelector("[data-empty]");
    const share = root.querySelector("[data-share]");
    const correction = root.querySelector("[data-range-note]");
    const scoped = data.events.filter(event => (!root.dataset.festival || event.festival === root.dataset.festival) && (!root.dataset.community || event.community === root.dataset.community));
    let filters = fromURL();
    function writeControls() { filterKeys.forEach(key => { controls[key].value = filters[key]; }); }
    function updateURL() {
      const url = new URL(window.location.href);
      filterKeys.forEach(key => {
        const value = filters[key];
        if (value && !(key === "period" && value === "upcoming")) url.searchParams.set(key, value);
        else url.searchParams.delete(key);
      });
      // History may be unavailable for some direct file previews; filtering still works.
      try { window.history.replaceState(null, "", url); } catch (_) { /* no persistence required */ }
      url.hash = "programme";
      share.href = url.href;
    }
    function render(updateHistory) {
      const found = filterEvents(scoped, filters);
      list.replaceChildren();
      let group, groupDate;
      found.forEach(event => {
        if (root.dataset.group === "day") {
          const day = bounds(event).first;
          if (day !== groupDate) {
            groupDate = day;
            group = el("section", undefined, "day-group");
            group.append(el("h3", dateText(day, { weekday: "long" })));
            list.append(group);
          }
          group.append(eventArticle(event, false, "h4"));
        } else list.append(eventArticle(event, style === "1"));
      });
      count.textContent = `${found.length} ${found.length === 1 ? "event" : "events"} · ${filters.period === "all" ? "reviewed selection" : "upcoming in the reviewed selection"}`;
      empty.hidden = found.length > 0;
      if (updateHistory) updateURL();
      else share.href = window.location.href.split("#")[0] + "#programme";
    }
    function readControls(event) {
      if (event) event.preventDefault();
      const values = Object.fromEntries(filterKeys.map(key => [key, controls[key].value]));
      const reversed = values.from && values.to && values.from > values.to;
      filters = normaliseFilters(values);
      correction.hidden = !reversed;
      writeControls();
      render(true);
    }
    function reset() {
      filters = normaliseFilters({});
      correction.hidden = true;
      writeControls();
      render(true);
    }
    writeControls();
    render(false);
    form.hidden = false;
    root.querySelector("[data-guide-output]").hidden = false;
    form.addEventListener("submit", readControls);
    form.addEventListener("change", readControls);
    controls.q.addEventListener("input", readControls);
    root.querySelectorAll("[data-reset]").forEach(button => button.addEventListener("click", reset));
    root.querySelector("[data-show-all]").addEventListener("click", () => {
      filters = normaliseFilters({ period: "all" });
      correction.hidden = true;
      writeControls();
      render(true);
    });
    window.addEventListener("popstate", () => { filters = fromURL(); writeControls(); render(false); openProgramme(); });
  }
  function setupDirectory(root) {
    const field = root.querySelector("[data-community-state]");
    const list = root.querySelector("[data-communities]");
    const count = root.querySelector("[data-community-count]");
    const empty = root.querySelector("[data-community-empty]");
    function render() {
      const found = data.communities.filter(item => !field.value || item.state === field.value);
      list.replaceChildren();
      found.forEach(item => {
        const row = el("article", undefined, "community-row");
        const name = el("div");
        const heading = el("h3");
        heading.append(link(item.name, `${item.page}_style_${style}.html`));
        name.append(heading, el("p", `${states[item.state]} · ${item.city}`, "community-place fine-print"));
        const info = el("div");
        info.append(el("p", item.summary));
        row.append(name, info);
        const actions = el("div", undefined, "actions");
        actions.append(link("Community guide", `${item.page}_style_${style}.html`), link("Organiser website", item.url));
        row.append(actions);
        list.append(row);
      });
      count.textContent = `${found.length} ${found.length === 1 ? "community" : "communities"} in this starting directory`;
      empty.hidden = found.length > 0;
    }
    render();
    root.querySelector("[data-directory-controls]").hidden = false;
    field.addEventListener("change", render);
    root.querySelector("[data-community-reset]").addEventListener("click", () => { field.value = ""; render(); });
  }
  function setupCalendar(root) {
    const tools = root.querySelector("[data-calendar-tools]");
    const panels = root.querySelector(".calendar-panels");
    const buttons = [...tools.querySelectorAll("button")];
    const media = window.matchMedia("(min-width: 1000px)");
    let chosen = false;
    function select(mode) {
      panels.dataset.selection = mode;
      panels.querySelectorAll("[data-calendar-panel]").forEach(panel => { panel.hidden = mode !== "both" && panel.dataset.calendarPanel !== mode; });
      buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.view === mode)));
    }
    buttons.forEach(button => button.addEventListener("click", () => { chosen = true; select(button.dataset.view); }));
    select(root.dataset.defaultView || (media.matches ? "both" : "agenda"));
    tools.hidden = false;
    media.addEventListener("change", () => { if (!chosen && !root.dataset.defaultView) select(media.matches ? "both" : "agenda"); });
  }
  function setupCarousel(root) {
    const chosenIds = (root.dataset.highlights || "").split(",");
    const events = chosenIds.map(id => data.events.find(event => event.id === id)).filter(Boolean).filter(event => upcoming(event));
    const stage = root.querySelector("[data-carousel-stage]");
    const previous = root.querySelector("[data-previous]");
    const next = root.querySelector("[data-next]");
    const status = root.querySelector("[data-carousel-status]");
    const controls = root.querySelector("[data-carousel-controls]");
    let index = 0;
    function render() {
      const event = events[index];
      const article = el("article", undefined, "carousel-slide");
      const date = el("div", dateLabel(event), "carousel-date");
      date.append(el("p", `${states[event.state]} · ${categories[event.categories[0]]}`, "fine-print"));
      const content = el("div");
      const heading = el("h3");
      heading.append(link(event.title, event.url));
      content.append(heading, el("p", event.summary), el("p", whenText(event), "fine-print"));
      if (event.access) content.append(el("p", event.access, "event-access"));
      if (event.caveat) content.append(el("p", event.caveat, "event-caveat"));
      content.append(link("View event details", event.url, "button secondary"));
      article.append(date, content);
      stage.replaceChildren(article);
      status.textContent = `${index + 1} of ${events.length}`;
      status.append(el("span", `: ${event.title}`, "sr-only"));
      previous.disabled = events.length <= 1;
      next.disabled = events.length <= 1;
    }
    if (events.length) {
      render();
      controls.hidden = false;
      previous.addEventListener("click", () => { index = (index + events.length - 1) % events.length; render(); });
      next.addEventListener("click", () => { index = (index + 1) % events.length; render(); });
    } else root.querySelector("[data-carousel-empty]").hidden = false;
  }

  // Small pure surface for offline checks and future reuse; no service/API dependency.
  window.GAME_EVENTS_UTILS = Object.freeze({ validDate, bounds, upcoming, normaliseFilters, filterEvents, whenText, dateLabel, localDate });
  document.querySelectorAll("[data-catalogue]").forEach(setupCatalogue);
  document.querySelectorAll("[data-directory]").forEach(setupDirectory);
  document.querySelectorAll("[data-calendar]").forEach(setupCalendar);
  document.querySelectorAll("[data-carousel]").forEach(setupCarousel);
  openProgramme();
  window.addEventListener("hashchange", openProgramme);
})();
