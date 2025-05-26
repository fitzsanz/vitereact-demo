// src/pages/About.jsx
import './About.css';
import member1 from '/src/assets/member1.png';
import member2 from '/src/assets/member3.png';
import member3 from '/src/assets/member4.png';

function About() {
  return (
    <div className="about-container">
      <h1>About Our App</h1>
      <p className="story">
        Welcome to <strong>Waterfall Finder</strong>, your go-to guide for discovering both hidden and iconic waterfalls around Northern Mindanao.
        This project was inspired by our unforgettable treks through Ricoro Falls, Manibay Falls, and Lantawon Falls—each one a stunning gem tucked away
        behind long hikes, dangerous rivers, and steep terrain. After struggling to find reliable information ourselves, we decided to build a tool
        that helps other adventurers explore with confidence and appreciation.
      </p>

      <h2>Why Waterfall Finder?</h2>
      <ul className="reasons">
        <li>Discover both famous and hidden waterfalls.</li>
        <li>Find safe, accessible routes with ease.</li>
        <li>Plan your adventure with verified local insights.</li>
      </ul>

      <h2>BSIT-2C: Group 7</h2>
      <div className="team">
        <div className="member">
          <img src={member1} alt="Fitz Sanz" />
          <h3>Fitz Sanz</h3>
          <p>Front-end Developer</p>
        </div>
        <div className="member">
          <img src={member2} alt="Quenshen Labusan" />
          <h3>Quenshen Labusan</h3>
          <p>Content & Research</p>
        </div>
        <div className="member">
          <img src={member3} alt="Rex Paderna" />
          <h3>Rex Paderna</h3>
          <p>UI/UX Designer</p>
        </div>
      </div>
    </div>
  );
}

export default About;
