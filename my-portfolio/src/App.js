import React, { useEffect, useState } from "react";
import "./App.css";
import myImage from "./IMG_4740.JPG";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FilmPhotography from './FilmPhotography';


function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
          section.classList.add("visible"); // Add visible class when section is in view
        } else {
          section.classList.remove("visible"); // Remove when out of view
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "WizardCentral",
      category: "Web Development",
      description: "Secure file upload and viewing app using Java and Spring Boot.",
      details: "Developed in an Agile environment with Jira and Jenkins, focusing on backend security and performance optimization.",
      tech: ["Java", "Spring Boot", "Jira", "Jenkins"],
    },
    {
      title: "OpalTravel Database Management",
      category: "Data Management",
      description: "Enhanced database functionality and UI improvements.",
      details: "Worked on SQL query efficiency and front-end improvements using HTML and SQL.",
      tech: ["SQL", "HTML"],
    },
    {
      title: "Geometry Processing Pipeline",
      category: "Systems Programming",
      description: "2D point analysis pipeline using C and Python.",
      details: "Includes a Generator Program (Python) and a Searcher Program (C) for distance calculations and triangle formation analysis.",
      tech: ["C", "Python"],
    },
    {
      title: "Support Generator for 3D Printers",
      category: "Software Development",
      description: "Python-based tool for reading and visualizing SLC files.",
      details: "Implemented unit and acceptance tests, following eXtreme Programming practices.",
      tech: ["Python", "SLC", "Testing"],
    },
    {
      title: "Shark Control Program Statistics",
      category: "Data Analysis",
      description: "Analysis of QLD Shark Control Program dataset.",
      details: "Conducted research and raw data analysis using R Studio.",
      tech: ["R Studio", "Data Analysis"],
    },
    {
      title: "Robot Maze Navigation",
      category: "Embedded Systems",
      description: "Programmed a sensor-based robot to navigate a maze.",
      details: "Collaborated on an Arduino and C++ project for autonomous movement.",
      tech: ["Arduino", "C++"],
    },
    {
      title: "Water Pollution Alarm System",
      category: "Machine Learning",
      description: "Trained a system to classify drinkable water.",
      details: "Developed a Python-based machine learning model for water quality classification.",
      tech: ["Python", "Machine Learning"],
    },
    {
      title: "Cardify – Flashcard Website",
      category: "Web Development",
      description: "Flashcard management website built using Django and JavaScript.",
      details: "Developed backend functionalities for the public flashcard library, implementing views and URL configurations in Django. Enhanced admin capabilities for managing user-generated flashcards and website settings.",
      tech: ["Django", "JavaScript"],
    },
    {
      title: "Portfolio Website",
      category: "Personal Project",
      description: "Designed and developed a personal portfolio website to showcase software engineering skills, projects, and hobbies.",
      details: "Integrated interactive sections, including About Me, Projects, Skills, and Contact. Utilized React, CSS animations, and responsive design techniques for a seamless user experience. Implemented a Film Photography page to display the user's photography work and added a custom design to showcase their creative side. Deployed the website using GitHub Pages for easy access and sharing.",
      tech: ["React", "CSS", "GitHub Pages"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Router>
     
      <div className="App">
        {/* Full-Screen Intro Section */}
        <section className="intro">
          <div className="intro-content">
            <h1 className="main-title">Hi, I'm Apurva!</h1>
            <p className="sub-text">
              Welcome to my portfolio!
            </p>
            <div className="intro-buttons">
              <a href="#about" className="btn">
                About
              </a>
              <a href="#projects" className="btn">
                Projects
              </a>
              <a href="#contact" className="btn">
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* About, Projects, and Contact Sections */}
        <section id="about" className="about-section">
        <div className="about-content">
          <img src={myImage} alt="Apurva" className="about-image" />
          <div className="about-text">
            <h2>About Me</h2>
            <p>Hi! I'm Apurva—just Apurva, no last name (and no, it’s not a system error 😆). I'm a Software Engineering student at The University of Sydney. I’m a passionate developer with a love for bringing ideas to life through code. Whether it’s building sleek web experiences, solving complex problems, or experimenting with creative design, I thrive on turning concepts into reality.</p>
            <p> When I’m not coding, you’ll probably find me capturing moments through my film camera, planning the next fun get-together, or diving into a good book before bed. I also love exploring watercolor painting (still a work in progress!) and occasionally baking cookies just for the cozy vibes.
              I’m always excited to learn, collaborate, and create. Let’s make something amazing together!</p>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div class="skills-container">
          <div class="skill-column">
              <div class="skill-category">
                  <h3>Programming Languages</h3>
                  <div class="skill">Python</div>
                  <div class="skill">Java</div>
                  <div class="skill">R</div>
                  <div class="skill">C</div>
                  <div class="skill">JavaScript</div>
                  <div class="skill">SQL</div>
              </div>
          </div>

          <div class="skill-column">
              <div class="skill-category">
                  <h3>Tools & Technologies</h3>
                  <div class="skill">AWS</div>
                  <div class="skill">Docker</div>
                  <div class="skill">Git</div>
                  <div class="skill">Linux</div>
                  <div class="skill">Jenkins</div>
                  <div class="skill">Gradle</div>
              </div>
          </div>

          <div class="skill-column">
              <div class="skill-category">
                  <h3>Frameworks</h3>
                  <div class="skill">Django</div>
                  <div class="skill">Spring Boot</div>
                  <div class="skill">React</div>
              </div>
          </div>

          <div class="skill-column">
              <div class="skill-category">
                  <h3>Software Engineering Practices</h3>
                  <div class="skill">Design Patterns</div>
                  <div class="skill">Agile</div>
                  <div class="skill">Multithreading</div>
                  <div class="skill">Database Management</div>
              </div>
          </div>
      </div>


      </section>


      <section id="projects" className="projects-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          {selectedProject && (
            <div className="project-modal" onClick={() => setSelectedProject(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.details}</p>
                <h4>Technologies Used:</h4>
                <ul>
                  {selectedProject.tech.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <button onClick={() => setSelectedProject(null)}>Close</button>
              </div>
            </div>
          )}
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            Email me at: <a href="mailto:apur2881@uni.sydney.edu.au"> apur2881@uni.sydney.edu.au</a>
          </p>
        </section>

        <footer>
          <p>© 2025 Apurva</p>
        </footer>
        <Routes>
          
          <Route path="/film-photography" component={FilmPhotography} />  {/* Define the route for FilmPhotography */}
        </Routes>
      </div>
      </Router>
  );
}

export default App;