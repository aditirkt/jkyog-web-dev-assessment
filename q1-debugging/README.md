# Q1 — Debugging Task

A React + TypeScript component (`src/UserList.tsx`) that fetches and displays a
list of users. **It has multiple bugs** — it crashes and behaves incorrectly.

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). On first load the app
**crashes** — that's expected. Your job is to fix it.

## The component should

1. Fetch users from `https://jsonplaceholder.typicode.com/users`.
2. Let you search by name as you type (case-insensitive).
3. Let you "favorite" a user by clicking them — favorites float to the top.
4. Show a loading state **and** an error state.

## Deliverable

1. Fix every bug so all four requirements work.
2. Add the missing error state.
3. In `NOTES.md`, for each bug, write: **what** it was, **why** it broke, **how** you fixed it.

> We care most about your explanation of the root causes. You may use AI tools,
> but be ready to explain every line in a live walkthrough.
