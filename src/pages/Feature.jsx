import { useState } from "react";

const waterfalls = [
  {
    name: "Tudaya Falls",
    location: "Davao del Sur, Mt. Apo Natural Park",
    coordinates: { lat: 6.997, lng: 125.302 },
    type: "Plunge",
    totalHeight: "100 meters",
    numberOfDrops: 1,
    longestDrop: "100 meters",
    watercourse: "Kapatagan River",
    averageFlowRate: "2.5 m³/s",
    difficulty: "Moderate",
    stepsFromMainRoad: 1500,
    description: "One of the highest waterfalls in Mt. Apo Natural Park, cascading into a deep ravine.",
  },
  {
    name: "Aliwagwag Falls",
    location: "Cateel, Davao Oriental",
    coordinates: { lat: 7.330, lng: 126.190 },
    type: "Multi-tiered",
    totalHeight: "340 meters",
    numberOfDrops: 84,
    longestDrop: "20 meters",
    watercourse: "Cateel River",
    averageFlowRate: "5.0 m³/s",
    difficulty: "Easy",
    stepsFromMainRoad: 500,
    description: "A stunning multi-tiered waterfall known as the highest in the Philippines.",
  },
  {
    name: "Hagimit Falls",
    location: "Samal Island, Davao del Norte",
    coordinates: { lat: 7.083, lng: 125.633 },
    type: "Cascade",
    totalHeight: "15 meters",
    numberOfDrops: 3,
    longestDrop: "8 meters",
    watercourse: "Hagimit River",
    averageFlowRate: "1.2 m³/s",
    difficulty: "Easy",
    stepsFromMainRoad: 400,
    description: "Popular for family outings, this waterfall has several small cascades and natural pools.",
  },
  {
    name: "Tinuy-an Falls",
    location: "Bislig City, Surigao del Sur",
    coordinates: { lat: 8.045, lng: 126.327 },
    type: "Block",
    totalHeight: "55 meters",
    numberOfDrops: 1,
    longestDrop: "55 meters",
    watercourse: "Bislig River",
    averageFlowRate: "3.1 m³/s",
    difficulty: "Easy",
    stepsFromMainRoad: 800,
    description: "Often called the 'Niagara Falls of the Philippines' due to its wide curtain-like flow.",
  },
  {
    name: "Asik-Asik Falls",
    location: "Alamada, North Cotabato",
    coordinates: { lat: 7.365, lng: 124.883 },
    type: "Curtain",
    totalHeight: "70 meters",
    numberOfDrops: 1,
    longestDrop: "70 meters",
    watercourse: "Unnamed Spring-fed",
    averageFlowRate: "1.0 m³/s",
    difficulty: "Moderate",
    stepsFromMainRoad: 1200,
    description: "Unique for its spring-fed curtains flowing from a lush, green cliff.",
  },
  {
    name: "Limunsudan Falls",
    location: "Iligan City, Lanao del Norte",
    coordinates: { lat: 8.140, lng: 124.214 },
    type: "Plunge",
    totalHeight: "870 meters",
    numberOfDrops: 1,
    longestDrop: "870 meters",
    watercourse: "Limunsudan River",
    averageFlowRate: "2.2 m³/s",
    difficulty: "Hard",
    stepsFromMainRoad: 3500,
    description: "Second-highest waterfall in the Philippines, very remote and challenging to reach.",
  },
  {
    name: "Maria Cristina Falls",
    location: "Iligan City, Lanao del Norte",
    coordinates: { lat: 8.229, lng: 124.229 },
    type: "Plunge",
    totalHeight: "98 meters",
    numberOfDrops: 1,
    longestDrop: "98 meters",
    watercourse: "Agus River",
    averageFlowRate: "9.0 m³/s",
    difficulty: "Easy",
    stepsFromMainRoad: 300,
    description: "Iconic twin waterfall that powers a hydroelectric plant, also known as the 'Mother of Industry'.",
  },
  {
    name: "Dodiongan Falls",
    location: "Iligan City, Lanao del Norte",
    coordinates: { lat: 8.207, lng: 124.238 },
    type: "Plunge",
    totalHeight: "30 meters",
    numberOfDrops: 1,
    longestDrop: "30 meters",
    watercourse: "Dodiongan River",
    averageFlowRate: "1.8 m³/s",
    difficulty: "Moderate",
    stepsFromMainRoad: 1100,
    description: "A tall and narrow waterfall hidden behind forested hills.",
  },
  {
    name: "Mimbalot Falls",
    location: "Iligan City, Lanao del Norte",
    coordinates: { lat: 8.223, lng: 124.231 },
    type: "Cascade",
    totalHeight: "15 meters",
    numberOfDrops: 2,
    longestDrop: "10 meters",
    watercourse: "Mimbalot River",
    averageFlowRate: "1.3 m³/s",
    difficulty: "Easy",
    stepsFromMainRoad: 700,
    description: "Accessible and scenic, part of the city’s 'City of Majestic Waterfalls' title.",
  },
  {
    name: "Bahi Falls",
    location: "Gingoog City, Misamis Oriental",
    coordinates: { lat: 8.787, lng: 125.100 },
    type: "Plunge",
    totalHeight: "35 meters",
    numberOfDrops: 1,
    longestDrop: "35 meters",
    watercourse: "Bahi River",
    averageFlowRate: "2.0 m³/s",
    difficulty: "Moderate",
    stepsFromMainRoad: 1300,
    description: "Tucked away in the mountains, Bahi Falls requires trekking through forests.",
  },
  {
    name: "Ricoro Falls",
    location: "Barangay Ricoro, Gingoog City",
    coordinates: { lat: 8.793, lng: 125.110 },
    type: "Cascade",
    totalHeight: "50 meters",
    numberOfDrops: 2,
    longestDrop: "30 meters",
    watercourse: "Ricoro River",
    averageFlowRate: "1.5 m³/s",
    difficulty: "Hard",
    stepsFromMainRoad: 4000,
    description: "Reached through a 10-kilometer trek, ideal for seasoned hikers.",
  },
  {
    name: "Manibay Falls",
    location: "Sitio Manibay, Claveria, Misamis Oriental",
    coordinates: { lat: 8.755, lng: 125.027 },
    type: "Plunge",
    totalHeight: "45 meters",
    numberOfDrops: 1,
    longestDrop: "45 meters",
    watercourse: "Manibay River",
    averageFlowRate: "1.6 m³/s",
    difficulty: "Hard",
    stepsFromMainRoad: 3200,
    description: "A hidden gem requiring river crossing and steep hiking, best for adventurers.",
  },
  {
    name: "Lantawon Falls",
    location: "Sitio Lantawon, Claveria, Misamis Oriental",
    coordinates: { lat: 8.760, lng: 125.020 },
    type: "Plunge",
    totalHeight: "55 meters",
    numberOfDrops: 1,
    longestDrop: "55 meters",
    watercourse: "Lantawon River",
    averageFlowRate: "1.8 m³/s",
    difficulty: "Hard",
    stepsFromMainRoad: 3100,
    description: "Tall and majestic, nestled in high forest terrain with misty air.",
  },
  {
    name: "Malubog Falls",
    location: "Zamboanga del Sur",
    coordinates: { lat: 7.830, lng: 123.430 },
    type: "Cascade",
    totalHeight: "30 meters",
    numberOfDrops: 2,
    longestDrop: "20 meters",
    watercourse: "Malubog River",
    averageFlowRate: "1.0 m³/s",
    difficulty: "Moderate",
    stepsFromMainRoad: 1400,
    description: "A multi-tiered waterfall located within a dense forest.",
  },
  {
    name: "Baliangao Falls",
    location: "Misamis Occidental",
    coordinates: { lat: 8.250, lng: 123.750 },
    type: "Cascade",
    totalHeight: "20 meters",
    numberOfDrops: 2,
    longestDrop: "15 meters",
    watercourse: "Baliangao River",
    averageFlowRate: "1.1 m³/s",
    difficulty: "Easy",
    stepsFromMainRoad: 600,
    description: "Picturesque falls with clear waters, good for swimming and nature trips.",
  },
  {
    name: "Katibawasan Falls",
    location: "Camiguin",
    coordinates: { lat: 9.250, lng: 124.700 },
    type: "Plunge",
    totalHeight: "70 meters",
    numberOfDrops: 1,
    longestDrop: "70 meters",
    watercourse: "Katibawasan River",
    averageFlowRate: "1.9 m³/s",
    difficulty: "Easy",
    stepsFromMainRoad: 700,
    description: "A long, thin waterfall surrounded by ferns and orchids.",
  },
  {
    name: "Tuasan Falls",
    location: "Camiguin",
    coordinates: { lat: 9.255, lng: 124.705 },
    type: "Plunge",
    totalHeight: "20 meters",
    numberOfDrops: 1,
    longestDrop: "20 meters",
    watercourse: "Tuasan River",
    averageFlowRate: "1.2 m³/s",
    difficulty: "Easy",
    stepsFromMainRoad: 500,
    description: "Easily accessible and flows into a pool great for cooling off.",
  },
  {
    name: "Paniki Falls",
    location: "Bukidnon",
    coordinates: { lat: 7.930, lng: 125.000 },
    type: "Cascade",
    totalHeight: "25 meters",
    numberOfDrops: 1,
    longestDrop: "25 meters",
    watercourse: "Paniki River",
    averageFlowRate: "1.0 m³/s",
    difficulty: "Moderate",
    stepsFromMainRoad: 1500,
    description: "In a forest, Paniki Falls has crystal clear water and lush surroundings.",
  },
  {
    name: "Dagohoy Falls",
    location: "Bukidnon",
    coordinates: { lat: 7.920, lng: 125.010 },
    type: "Plunge",
    totalHeight: "30 meters",
    numberOfDrops: 1,
    longestDrop: "30 meters",
    watercourse: "Dagohoy River",
    averageFlowRate: "1.4 m³/s",
    difficulty: "Moderate",
    stepsFromMainRoad: 1600,
    description: "A peaceful waterfall with a large basin suitable for swimming.",
  },
  {
    name: "Mamalagon Falls",
    location: "Bukidnon",
    coordinates: { lat: 7.935, lng: 124.980 },
    type: "Multi-tiered",
    totalHeight: "60 meters",
    numberOfDrops: 3,
    longestDrop: "25 meters",
    watercourse: "Mamalagon River",
    averageFlowRate: "1.7 m³/s",
    difficulty: "Moderate",
    stepsFromMainRoad: 1700,
    description: "Known for its cascading tiers and refreshing pools.",
  },
];

function Feature() {
  const [search, setSearch] = useState("");

  const filteredWaterfalls = waterfalls.filter((fall) => {
    const keyword = search.toLowerCase();
    return (
      fall.name.toLowerCase().includes(keyword) ||
      fall.location.toLowerCase().includes(keyword) ||
      fall.type.toLowerCase().includes(keyword) ||
      fall.description.toLowerCase().includes(keyword) ||
      fall.averageFlowRate.toLowerCase().includes(keyword) ||
      fall.watercourse.toLowerCase().includes(keyword) ||
      fall.totalHeight.toLowerCase().includes(keyword) ||
      fall.longestDrop.toLowerCase().includes(keyword) ||
      fall.difficulty.toLowerCase().includes(keyword) ||
      fall.stepsFromMainRoad.toString().includes(keyword)
    );
  });

  return (
    <div style={{ padding: "1rem", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Explore Waterfalls in Mindanao</h1>
      <input
        type="text"
        placeholder="Search waterfalls by any keyword..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.5rem",
          margin: "1rem 0 2rem",
          width: "100%",
          fontSize: "1rem",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
        }}
      >
        {filteredWaterfalls.map((fall, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{fall.name}</h3>
            <p><strong>Location:</strong> {fall.location}</p>
            <p><strong>Coordinates:</strong> {fall.coordinates.lat}, {fall.coordinates.lng}</p>
            <p><strong>Type:</strong> {fall.type}</p>
            <p><strong>Total Height:</strong> {fall.totalHeight}</p>
            <p><strong>Number of Drops:</strong> {fall.numberOfDrops}</p>
            <p><strong>Longest Drop:</strong> {fall.longestDrop}</p>
            <p><strong>Watercourse:</strong> {fall.watercourse}</p>
            <p><strong>Average Flow Rate:</strong> {fall.averageFlowRate}</p>
            <p><strong>Difficulty:</strong> {fall.difficulty}</p>
            <p><strong>Steps from Main Road:</strong> {fall.stepsFromMainRoad}</p>
            <p>{fall.description}</p>

            <iframe
              title={`map-${fall.name}`}
              src={`https://maps.google.com/maps?q=${fall.coordinates.lat},${fall.coordinates.lng}&z=15&output=embed`}
              style={{
                width: "100%",
                height: "200px",
                border: 0,
                borderRadius: "6px",
                marginTop: "auto",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
