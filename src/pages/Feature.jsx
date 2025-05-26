// src/pages/Feature.jsx
import { useState } from "react";

const waterfalls = [
  { name: "Tudaya Falls", location: "Davao", difficulty: "Moderate" },
  { name: "Aliwagwag Falls", location: "Davao Oriental", difficulty: "Easy" },
  { name: "Hagimit Falls", location: "Samal", difficulty: "Easy" },
];

function Feature() {
  const [search, setSearch] = useState("");

  const filteredWaterfalls = waterfalls.filter((fall) =>
    fall.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Explore Waterfalls</h1>
      <input
        type="text"
        placeholder="Search waterfalls..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredWaterfalls.map((fall, index) => (
          <li key={index}>
            <strong>{fall.name}</strong> - {fall.location} ({fall.difficulty})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feature;