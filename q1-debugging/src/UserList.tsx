import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export function UserList() {
  const [users, setUsers] = useState<User[]>();
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      favorites.splice(favorites.indexOf(id), 1);
    } else {
      favorites.push(id);
    }
    setFavorites(favorites);
  };

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search)
  );

  const sorted = filtered.sort((a, b) => {
    return favorites.includes(b.id) - favorites.includes(a.id);
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {sorted.map((user) => (
          <li onClick={() => toggleFavorite(user.id)}>
            {favorites.includes(user.id) ? "⭐ " : ""}
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
