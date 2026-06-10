import { useEffect, useState } from "react";
import type { EventItem } from "./types";
import { fetchEvents } from "./api";

/**
 * STARTER SCAFFOLD — candidate-facing.
 *
 * This proves the data source works (fetch + loading state + render).
 * It is NOT the finished assessment. Your job (see the brief) is to add:
 *   - search by title + free/paid filter
 *   - event detail view + Register flow
 *   - a validated registration form (required name/email, valid email,
 *     seats requested <= seatsRemaining)
 *   - confirmation + decrement seatsRemaining on success
 *   - empty + error states, responsive layout, accessibility basics
 *
 * Feel free to restructure everything below. It's just a starting point.
 */
export function App() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="container">
      <header>
        <h1>JKYog Upcoming Events</h1>
        <p className="subtitle">
          Starter scaffold — build the registration experience on top of this.
        </p>
      </header>

      {loading ? (
        <p>Loading events…</p>
      ) : (
        <div className="grid">
          {events.map((ev) => (
            <article key={ev.id} className="card">
              <img src={ev.image} alt="" />
              <div className="card-body">
                <span className="badge">{ev.category}</span>
                <h2>{ev.title}</h2>
                <p className="meta">
                  {new Date(ev.date).toLocaleDateString(undefined, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  · {ev.location}
                </p>
                <p className="price">{ev.price === 0 ? "Free" : `$${ev.price}`}</p>
                <p className="seats">
                  {ev.seatsRemaining > 0
                    ? `${ev.seatsRemaining} seats left`
                    : "Sold out"}
                </p>
                {/*
                  TODO (your task): clicking this button must navigate to THIS
                  event's own detail/registration page (e.g. /events/:id).
                  Wire up routing — right now it does nothing.
                */}
                <button
                  className="btn-primary"
                  disabled={ev.seatsRemaining === 0}
                >
                  {ev.seatsRemaining === 0 ? "Sold out" : "View details →"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
