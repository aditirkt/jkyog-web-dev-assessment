import type { EventItem } from "./types";
import fallback from "./events.fallback.json";

// Live mock API (MockAPI.io). Once the `events` resource is seeded, this is
// the source of truth. If the API is unreachable or empty, we fall back to
// local sample data so the app always runs.
export const API_BASE =
  "https://6a28ecfdf59cb8f65f1c194d.mockapi.io/jkyog/api/v1";

export async function fetchEvents(): Promise<EventItem[]> {
  try {
    const res = await fetch(`${API_BASE}/events`);
    if (!res.ok) throw new Error(`API responded ${res.status}`);
    const data = (await res.json()) as EventItem[];
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("API returned no events");
    }
    return data;
  } catch (err) {
    console.warn(
      "[api] Live API unavailable, using local fallback data:",
      (err as Error).message
    );
    return fallback as EventItem[];
  }
}

export async function fetchEvent(id: string): Promise<EventItem> {
  const events = await fetchEvents();
  const found = events.find((e) => String(e.id) === String(id));
  if (!found) throw new Error(`Event ${id} not found`);
  return found;
}

// Persist a registration + decrement seats on the server.
// Works against the live API; on the fallback path it just resolves so the
// candidate's UI flow still completes.
export async function registerForEvent(
  event: EventItem,
  seats: number
): Promise<EventItem> {
  try {
    const res = await fetch(`${API_BASE}/events/${event.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ seatsRemaining: event.seatsRemaining - seats }),
    });
    if (!res.ok) throw new Error(`API responded ${res.status}`);
    return (await res.json()) as EventItem;
  } catch (err) {
    console.warn("[api] Could not persist registration:", (err as Error).message);
    return { ...event, seatsRemaining: event.seatsRemaining - seats };
  }
}
