export default function Project() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-card">
        <img src="/project1.jpg" alt="Project 1" />
        <h3>Portfolio Website</h3>
        <p>A personal portfolio bult with React and hosted on Netlify.</p>
      </div>
      
     
      <div className="project-card">
        <img src="/project2.jpg" alt="Project 2" />
        <h3>Data Analysis Dashboard</h3>
        <p>Analyzed COVID-19 datanand bult an interactive dashboard using Python.</p>
      </div>

      <div className="project-card">
        <img src="/project3.jpg" alt="Project 3" />
        <h3>Mobile App</h3>
        <p>Creating a task-tracking app with React Native for Android/ios.</p>
      </div>
    </div>
  );
}
