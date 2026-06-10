# Q2 — Build an Event Registration Page

A starter scaffold. It fetches events and renders them read-only so you have a
working data source. **Your job is to build the registration experience on top.**

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). You should see a grid
of JKYog events.

## Data source

Events come from a public mock API:

```
GET https://6a28ecfdf59cb8f65f1c194d.mockapi.io/jkyog/api/v1/events
GET https://6a28ecfdf59cb8f65f1c194d.mockapi.io/jkyog/api/v1/events/:id
PUT https://6a28ecfdf59cb8f65f1c194d.mockapi.io/jkyog/api/v1/events/:id
```

See `src/api.ts`. If the API is unreachable, the app automatically uses local
sample data (`src/events.fallback.json`) so it always runs.

## What to build (see the full brief for details)

1. Search events by title + filter by free/paid.
2. **Each event card must have a button** (e.g. "View Details" / "Register").
   **Clicking it navigates to that event's own page** — a detail/registration page
   showing the full event info. Use client-side routing (e.g. React Router) or a
   view-state switch; either is fine, but the URL/view must change to the selected event.
3. On the event page: a **Register** button that opens the registration form.
4. Registration form — validate: name & email required, valid email format,
   seats requested cannot exceed `seatsRemaining`.
5. On success: confirmation + decrement that event's `seatsRemaining`.
6. Loading, empty ("no results"), and error states.
7. Responsive (mobile + desktop) + accessibility basics (labels, semantic HTML).

## Design — use the JKYog theme

Style the UI with the **official JKYog brand palette** (saffron + deep purple + cream).
Don't ship default/unstyled HTML — we want to see design sense.

| Role | Color | Hex |
|------|-------|-----|
| **Primary action** (buttons, links) | Saffron orange | `#EF6F1F` |
| Primary action — hover/pressed | Deep orange | `#E5652A` |
| **Brand accent** (headers, highlights) | Brand purple | `#35349B` |
| Accent — deep | Navy | `#241881` |
| **Page background** | Cream | `#FDF3E4` |
| Surface / cards | Milky white | `#FFFBF2` |
| Borders / dividers | Warm gray | `#F0EBE1` |
| **Heading text** | Near-black brown | `#291900` |
| Body / muted text | Earth brown | `#645743` |
| Success (e.g. confirmation) | Green | `#28A736` |
| Error (e.g. validation) | Red | `#EF1F1F` |

- The **button** in requirement #2 should use the saffron primary (`#EF6F1F`) with the
  deep-orange hover state (`#E5652A`).
- The starter is intentionally **unstyled** — the design is yours to build from scratch.
- Tailwind / CSS modules / styled-components all fine; consistency matters more than the tool.

## Deliverable

- Clean, typed, well-structured components (no giant single file).
- A `NOTES.md` covering your decisions, trade-offs, and where you used AI.

You may use Claude/ChatGPT, but be ready to explain every line in a live walkthrough.
