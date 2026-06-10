import { UserList } from "./UserList";

export function App() {
  return (
    <main style={{ maxWidth: 640, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>User Directory</h1>
      <p>
        This component is supposed to fetch users, let you search by name, and
        favorite users (favorites float to the top). It currently has several
        bugs. Find and fix them — see the assessment brief.
      </p>
      <UserList />
    </main>
  );
}
