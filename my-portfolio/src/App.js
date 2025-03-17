import React, { useEffect, useState } from "react";
import "./App.css";
import myImage from "./assets/IMG_4740.JPG";



function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
          section.classList.add("visible"); 
        } else {
          section.classList.remove("visible"); 
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  

  const experiences = [
    {
      title: "Software Development Project - Asiga",
      description:
        "Worked on enhancing software for high-precision 3D printers. Developed and optimized algorithms for support generation and print quality improvements.",
      details:
        "Collaborated with a team to enhance slicing algorithms and improve material efficiency in high-precision printing. Implemented and tested new features for internal software tools.",
      tech: ["Python", "3D Printing"],
    },
    {
      title: "Engineering Mentor - University of Sydney",
      description:
        "Guided first-year engineering students, helping them adapt to university life.",
      details:
        "Conducted mentoring sessions, assisted with any issues they were facing, introduced them to university resouces, and provided career guidance.",
      tech: ["Mentoring", "Leadership", "Technical Guidance"],
    },
    {
      title: "HR Committee - Network of Women",
      description:
        "Part of the HR team for the Network of Women society, responsible for recruitment, event coordination, and engagement initiatives.",
      details:
        "Worked on organizing events, improving member engagement, and streamlining recruitment processes. Focused on fostering a supportive community for women.",
      tech: ["HR Management", "Event Planning", "Community Engagement"],
    },
  ];
  const [selectedExperience, setSelectedExperience] = useState(null);


  const projects = [
    {
      title: "WizardCentral",
      category: "Web Development",
      type: "🟢 Team",
      description: "Secure file upload and viewing app using Java and Spring Boot.",
      details: "Developed in an Agile environment with Jira and Jenkins, focusing on backend security and performance optimization.",
      tech: ["Java", "Spring Boot", "Docker", "Git", "Gradle", "Agile"],
    },
    {
      title: "Opal Travel Database Management",
      category: "Data Management",
      type: "🔵 Individual",
      description: "Enhanced database functionality and UI improvements.",
      details: "Worked on SQL query efficiency and front-end improvements using HTML and SQL.",
      tech: ["SQL", "Database Management"],
    },
    {
      title: "Geometry Processing Pipeline",
      category: "Systems Programming",
      type: "🔵 Individual",
      description: "2D point analysis pipeline using C and Python.",
      details: "Includes a Generator Program (Python) and a Searcher Program (C) for distance calculations and triangle formation analysis.",
      tech: ["C", "Python"],
    },
    {
      title: "Support Generator for 3D Printers",
      category: "Software Development",
      type: "🟢 Team",
      description: "Python-based tool for reading and visualizing SLC files.",
      details: "Implemented unit and acceptance tests, following eXtreme Programming practices.",
      tech: ["Python", "Git", "SLC", "Testing"],
    },
    {
      title: "Shark Control Program Statistics",
      category: "Data Analysis",
      type: "🔵 Individual",
      description: "Analysis of QLD Shark Control Program dataset.",
      details: "Conducted research and raw data analysis using R Studio.",
      tech: ["R Studio", "Data Analysis"],
    },
    {
      title: "Robot Maze Navigation",
      category: "Embedded Systems",
      type: "🟢 Team",
      description: "Programmed a sensor-based robot to navigate a maze.",
      details: "Collaborated on an Arduino and C++ project for autonomous movement.",
      tech: ["Arduino", "C++"],
    },
    {
      title: "Water Pollution Alarm System",
      category: "Machine Learning",
      type: "🟢 Team",
      description: "Trained a system to classify drinkable water.",
      details: "Developed a Python-based machine learning model for water quality classification.",
      tech: ["Python", "Machine Learning"],
    },
    {
      title: "Cardify – Flashcard Website",
      category: "Web Development",
      type: "🟢 Team",
      description: "Flashcard management website built using Django and JavaScript.",
      details: "Developed backend functionalities, integrated AWS, and implemented Docker for deployment.",
      tech: ["Django", "JavaScript", "AWS", "Docker", "Git", "React"],
    },
    {
      title: "Portfolio Website",
      category: "Personal Project",
      type: "🔵 Individual",
      description: "Designed and developed a personal portfolio website.",
      details: "Built using React and CSS, featuring a Film Photography page and interactive UI elements.",
      tech: ["React", "CSS", "GitHub Pages"],
    },
  ];
  const skillToCourse = {
    "Python": ["INFO1110 - Introduction to Programming", "COMP2123 - Data Structures and Algorithms"],
    "Java": ["INFO1113 - Object-Oriented Programming"],
    "R": ["MATH1005 - Statistical Thinking with Data"],
    "C": ["COMP2017 - Systems Programming"],
    "JavaScript": ["ELEC3609 - Internet Software Platforms", "ISYS2110 - Analysis and Design of Web Info Systems" ],
    "SQL": ["ISYS2120 - Data and Information Management"],
    "AWS": ["ELEC3609 - Internet Software Platforms"],
    "Docker": ["SOFT2412 - Agile Software Development Practices"],
    "Git": ["SOFT2412 - Agile Software Development Practices"],
    "Linux": ["COMP2017 - Systems Programming"],
    "Jenkins": ["SOFT2412 - Agile Software Development Practices"],
    "Gradle": ["SOFT2412 - Agile Software Development Practices"],
    "Django": ["ELEC3609 - Internet Software Platforms"],
    "Spring Boot": ["SOFT2412 - Agile Software Development Practices"],
    "React": ["ELEC3609 - Internet Software Platforms"],
    "Design Patterns": ["SOFT2201 - Software Construction & Design"],
    "Agile": ["SOFT2412 - Agile Software Development Practices"],
    "Multithreading": ["COMP2017 - Systems Programming"],
    "Database Management": ["ISYS2120 - Data and Information Management"],
  };
  


  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [projectsForSkill, setProjectsForSkill] = useState([]);

  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSkillClick = (skill) => {
    const filteredProjects = projects.filter((project) =>
      project.tech.includes(skill)
    );
    const relatedCourses = skillToCourse[skill] || [];

    setSelectedSkill(skill);
    setProjectsForSkill(filteredProjects);
    setSelectedCourses(relatedCourses);
  };



  return (
    
     
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
              <a href="#skills" className="btn">Skills</a>
              <a href="#projects" className="btn">
                Projects
              </a>
              <a href="#experience" className="btn">Experience</a>
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
            <p>Hi! I'm Apurva—just Apurva, no last name (and nope, it’s not a system error 😄). I'm a Software Engineering student at The University of Sydney. I’m a Software Engineering student at The University of Sydney, and I’m deeply passionate about crafting intuitive, innovative, and scalable solutions. Whether it’s building sleek web applications, solving challenging problems, or experimenting with creative design, I’m always focused on turning ideas into impactful realities.</p>
            <p> When I’m not coding, I’m likely capturing moments through my film camera, planning the next fun get-together with friends, or unwinding with a good book. I’m also exploring the world of watercolor painting (a work in progress!) and baking cookies to fill the house with cozy vibes. I thrive in environments where learning, collaboration, and creativity meet, and I’m always eager to contribute and grow. Let’s connect and create something incredible together! 🚀</p>

          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-column">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            {["Python", "Java", "R", "C", "JavaScript", "SQL"].map((skill) => (
              <div key={skill} className="skill" onClick={() => handleSkillClick(skill)}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-column">
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            {["AWS", "Docker", "Git", "Linux", "Jenkins", "Gradle"].map((skill) => (
              <div key={skill} className="skill" onClick={() => handleSkillClick(skill)}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-column">
          <div className="skill-category">
            <h3>Frameworks</h3>
            {["Django", "Spring Boot", "React"].map((skill) => (
              <div key={skill} className="skill" onClick={() => handleSkillClick(skill)}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-column">
          <div className="skill-category">
            <h3>Software Engineering Practices</h3>
            {["Design Patterns", "Agile", "Multithreading", "Database Management"].map((skill) => (
              <div key={skill} className="skill" onClick={() => handleSkillClick(skill)}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedSkill && (
        <div className="skill-modal" onClick={() => setSelectedSkill(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedSkill}</h2>

            {projectsForSkill.length > 0 && (
              <>
                <h3>Projects using {selectedSkill}:</h3>
                <ul>
                  {projectsForSkill.map((project, index) => (
                    <li key={index}>
                      <strong>{project.title}</strong>: {project.description}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Related Courses */}
            <h3>Courses covering {selectedSkill}:</h3>
            {selectedCourses.length > 0 ? (
              <ul>
                {selectedCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            ) : (
              <p>No specific course found for this skill.</p>
            )}

            <button onClick={() => setSelectedSkill(null)}>Close</button>
          </div>
        </div>
      )}


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
                
                {/* Show Project Type (Team / Individual) */}
                <p><strong>Type:</strong> {selectedProject.type}</p>

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

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <h2>Experience</h2>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card"
                onClick={() => setSelectedExperience(exp)}
              >
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
          {selectedExperience && (
            <div className="experience-modal" onClick={() => setSelectedExperience(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{selectedExperience.title}</h2>
                <p>{selectedExperience.details}</p>
                <h4>Key Skills:</h4>
                <ul>
                  {selectedExperience.tech.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <button onClick={() => setSelectedExperience(null)}>Close</button>
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
       

      </div>
      
  );
}

export default App;