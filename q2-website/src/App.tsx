import { useEffect, useState } from "react";
import type { EventItem } from "./types";
import { fetchEvents } from "./api";

/**
 * STARTER SCAFFOLD — candidate-facing.
 *
 * This ONLY proves the data source works (fetch + loading state + render a
 * bare list). It is intentionally unstyled and minimal.
 *
 * YOUR job (see the brief) is to design and build the full experience:
 *   - design the UI with the JKYog brand palette (see README)
 *   - a button on each event that navigates to that event's own page
 *   - search by title + free/paid filter
 *   - event detail page + a validated registration form
 *     (required name/email, valid email, seats requested <= seatsRemaining)
 *   - confirmation + decrement seatsRemaining on success
 *   - empty + error states, responsive layout, accessibility basics
 *
 * Restructure everything below — it's just a starting point.
 */
export function App() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="container">Loading events…</p>;

  return (
    <main className="container">
      <h1>JKYog Upcoming Events</h1>
      <p>{events.length} events loaded from the API. Now build the real thing.</p>
      <ul>
        {events.map((ev) => (
          <li key={ev.id}>
            {ev.title} — {new Date(ev.date).toLocaleDateString()} —{" "}
            {ev.location} — {ev.price === 0 ? "Free" : `$${ev.price}`} —{" "}
            {ev.seatsRemaining} seats left
          </li>
        ))}
      </ul>
    </main>
  );
}
