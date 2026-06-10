import { useEffect, useState } from "react";
import type { EventItem } from "./types";
import { fetchEvents } from "./api";

/**
 * STARTER SCAFFOLD — candidate-facing.
 *
 * This ONLY proves the data source works (fetch + loading state + render basic
 * cards, including each event's image). It is intentionally plain/neutral.
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
      <div className="grid">
        {events.map((ev) => (
          <article key={ev.id} className="card">
            <img src={ev.image} alt={ev.title} />
            <div className="card-body">
              <small>{ev.category}</small>
              <h2>{ev.title}</h2>
              <p>{new Date(ev.date).toLocaleDateString()} · {ev.location}</p>
              <p>{ev.price === 0 ? "Free" : `$${ev.price}`}</p>
              <p>
                {ev.seatsRemaining > 0
                  ? `${ev.seatsRemaining} seats left`
                  : "Sold out"}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
