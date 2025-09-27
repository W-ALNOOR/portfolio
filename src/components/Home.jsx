import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>
        I’m <strong>WAHEED ALNOOR</strong>, a passionate developer who loves
        creating clean, responsive, and impactful projects.  
      </p>

      <h2>Mission Statement</h2>
      <p>
        My mission is to use technology to build solutions that make life easier
        and more meaningful. Through web development, data analysis, and
        continuous learning, I strive to grow and contribute to innovative
        projects.
      </p>

      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </div>
  );
}

