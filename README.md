# JKYog — Web Developer Technical Assessment

Welcome, and thanks for taking the time. This assessment has **two tasks**:

1. **Q1 — Debugging:** fix a broken React + TypeScript component.
2. **Q2 — Website:** build an event registration page.

Everything you need is in this repo. Read this file fully before you start.

---

## ⏱ Time & expectations

- **Suggested time:** ~4 hours total (≈1 hr for Q1, ≈3 hrs for Q2).
- This is calibrated for ~1 year of experience. We're not looking for perfection —
  we're looking for working code, clean structure, and good judgment under a time limit.
- If something is ambiguous, make a reasonable assumption and **write it down** in `NOTES.md`.
  Don't get stuck — moving forward with a documented assumption is the right call.

## 🤖 AI tools policy

You **may** use AI tools (Claude, ChatGPT). We use them daily and expect you to.

**But:** you must understand and be able to explain *every line* you submit. After review
we'll do a short live walkthrough where we ask "why did you do this?" and "how would you
change X if we needed Y?". Copy-pasting AI output you don't understand will show. Use AI
as a pair programmer, not an autopilot.

---

## 🚀 Setup & how to run

You need **Node.js 18+** and **npm**.

### Q1 — Debugging
```bash
cd q1-debugging
npm install
npm run dev
```
Open the URL Vite prints (usually http://localhost:5173).
⚠️ The app **crashes on load** — that's intended. Your job is to fix it. See
[`q1-debugging/README.md`](./q1-debugging/README.md) for the task details.

### Q2 — Website
```bash
cd q2-website
npm install
npm run dev
```
You'll see a grid of events. This is a **starter scaffold** — build the registration
experience on top of it. See [`q2-website/README.md`](./q2-website/README.md) for the
full requirements. Data comes from a public mock API (with a local fallback so it always runs).

---

## 📦 What to submit — required folder structure

Create a **public GitHub repo** with **exactly** this structure:

```
your-repo/
├── README.md            # how to install & run BOTH tasks (you write this)
├── NOTES.md             # your decisions, trade-offs, and AI usage (template provided)
├── q1-debugging/        # your fixed version of Q1
│   └── src/...
└── q2-website/          # your completed Q2 website
    └── src/...
```

- Start from the two folders in this repo — keep the same names.
- Do **not** commit `node_modules` (a `.gitignore` is already included).
- We should be able to `cd` into each folder, run `npm install && npm run dev`, and have it work.

## ✅ Submission checklist

- [ ] Both tasks live in `q1-debugging/` and `q2-website/`.
- [ ] Root `README.md` explains how to install and run each.
- [ ] `NOTES.md` is filled in (Q1 bug list + Q2 decisions + where you used AI).
- [ ] Meaningful commit history (small commits > one giant "final" commit).
- [ ] Repo is **public**. Reply with the link.

---

## 📊 How we evaluate

| Area | What we look for |
|------|------------------|
| **Correctness** | Does it actually work end-to-end? Edge cases handled? |
| **Code quality** | Readable, properly typed (no stray `any`), sensible structure, no dead code. |
| **Debugging reasoning** (Q1) | Can you explain the *root cause* of each bug, not just patch symptoms? |
| **State & data flow** (Q2) | Clean state management, no obvious bugs or unnecessary re-renders. |
| **UI/UX** (Q2) | Responsive, handles loading/empty/error states, accessible basics. |
| **Judgment** | Good trade-offs given the time limit; you know what to skip. |
| **Communication** | Clear README + NOTES; you can defend your choices live. |

Good luck — we're excited to see how you work. 🙏
