// src/pages/Feature.jsx
import { useState } from "react";

const waterfalls = [
  { name: "Tudaya Falls", location: "Davao del Sur", difficulty: "Moderate", description: "One of the highest waterfalls in Mt. Apo Natural Park, cascading into a deep ravine." },
  { name: "Aliwagwag Falls", location: "Davao Oriental", difficulty: "Easy", description: "A stunning multi-tiered waterfall known as the highest in the Philippines." },
  { name: "Hagimit Falls", location: "Samal Island, Davao del Norte", difficulty: "Easy", description: "Popular for family outings, this waterfall has several small cascades and natural pools." },
  { name: "Tinuy-an Falls", location: "Bislig City, Surigao del Sur", difficulty: "Easy", description: "Often called the 'Niagara Falls of the Philippines' due to its wide curtain-like flow." },
  { name: "Asik-Asik Falls", location: "Alamada, North Cotabato", difficulty: "Moderate", description: "Unique for its spring-fed curtains flowing from a lush, green cliff." },
  { name: "Limunsudan Falls", location: "Iligan City", difficulty: "Hard", description: "Second-highest waterfall in the Philippines, very remote and challenging to reach." },
  { name: "Maria Cristina Falls", location: "Iligan City", difficulty: "Easy", description: "Iconic twin waterfall that powers a hydroelectric plant, also known as the 'Mother of Industry'." },
  { name: "Dodiongan Falls", location: "Iligan City", difficulty: "Moderate", description: "A tall and narrow waterfall hidden behind forested hills." },
  { name: "Mimbalot Falls", location: "Iligan City", difficulty: "Easy", description: "Accessible and scenic, part of the city’s 'City of Majestic Waterfalls' title." },
  { name: "Bahi Falls", location: "Gingoog City, Misamis Oriental", difficulty: "Moderate", description: "Tucked away in the mountains, Bahi Falls requires trekking through forests." },
  { name: "Ricoro Falls", location: "Barangay Ricoro, Gingoog City", difficulty: "Hard", description: "Reached through a 10-kilometer trek, ideal for seasoned hikers." },
  { name: "Manibay Falls", location: "Sitio Manibay, Claveria", difficulty: "Hard", description: "A hidden gem requiring river crossing and steep hiking, best for adventurers." },
  { name: "Lantawon Falls", location: "Sitio Lantawon, Claveria", difficulty: "Hard", description: "Tall and majestic, nestled in high forest terrain with misty air." },
  { name: "Malubog Falls", location: "Zamboanga del Sur", difficulty: "Moderate", description: "A multi-tiered waterfall located within a dense forest." },
  { name: "Baliangao Falls", location: "Misamis Occidental", difficulty: "Easy", description: "Picturesque falls with clear waters, good for swimming and nature trips." },
  { name: "Katibawasan Falls", location: "Camiguin", difficulty: "Easy", description: "A long, thin waterfall surrounded by ferns and orchids." },
  { name: "Tuasan Falls", location: "Camiguin", difficulty: "Easy", description: "Easily accessible and flows into a pool great for cooling off." },
  { name: "Paniki Falls", location: "Bukidnon", difficulty: "Moderate", description: "Situated near a cave system, this waterfall is great for nature trekkers." },
  { name: "Mabugnao Falls", location: "Bayugan City, Agusan del Sur", difficulty: "Moderate", description: "Tucked within a protected forest, serene and largely untouched." },
  { name: "Palahik Falls", location: "Sultan Kudarat", difficulty: "Moderate", description: "Remote waterfall surrounded by mossy rocks and lush jungle." }
];

function Feature() {
  const [search, setSearch] = useState("");

  const filteredWaterfalls = waterfalls.filter((fall) =>
    fall.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="feature-page" style={{ padding: "1rem" }}>
      <h1>Explore Waterfalls in Mindanao</h1>
      <input
        type="text"
        placeholder="Search waterfalls..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "0.5rem", margin: "1rem 0", width: "100%" }}
      />
      <ul>
        {filteredWaterfalls.map((fall, index) => (
          <li key={index} style={{ marginBottom: "1rem", listStyle: "none", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
            <h3>{fall.name}</h3>
            <p><strong>Location:</strong> {fall.location}</p>
            <p><strong>Difficulty:</strong> {fall.difficulty}</p>
            <p>{fall.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feature;
