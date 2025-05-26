// src/pages/Home.jsx
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <header className="hero">
          <h1>Waterfall Finder</h1>
          <p className="tagline">
            Discover Mindanao’s most majestic waterfalls. Plan, search, and explore hidden gems na mas pinasayon using our app!
          </p>
        </header>

        <section className="about">
          <h2>What’s This App For?</h2>
          <p>
            Waterfall Finder helps nature lovers like you to locate and learn about waterfalls around Subsaharan Mindanao! 
            From basic infos to things you need to know before hitching your way padulong sa spot? Naa diri tanan.
          </p>
        </section>

        <section className="nav">
          <h2>Let's Go!</h2>
          <div className="nav-links">
            <Link to="/feature">🌴 View All Falls</Link>
            <Link to="/map">🗺️ Map View</Link>
            <Link to="/feature">🔍 Search</Link>
            <Link to="/feature">⭐ Favorites</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
