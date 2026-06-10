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
2. Event detail view with a **Register** button.
3. Registration form — validate: name & email required, valid email format,
   seats requested cannot exceed `seatsRemaining`.
4. On success: confirmation + decrement that event's `seatsRemaining`.
5. Loading, empty ("no results"), and error states.
6. Responsive (mobile + desktop) + accessibility basics (labels, semantic HTML).

## Deliverable

- Clean, typed, well-structured components (no giant single file).
- A `NOTES.md` covering your decisions, trade-offs, and where you used AI.

You may use Claude/ChatGPT, but be ready to explain every line in a live walkthrough.
