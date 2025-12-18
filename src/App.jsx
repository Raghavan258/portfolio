import React from "react";

const PROJECTS = [
  {
    name: "EcoSense – Smart Campus Ecosystem",
    domain: "IoT / Smart Systems / Sustainability",
    description:
      "Smart campus solution that combines distributed air-quality monitoring, IoT emergency communication, and an environmental knowledge dashboard.",
    highlights: [
      "Distributed AQI monitoring across campus",
      "Identifies healthy air-quality zones for safer navigation",
      "IoT-based emergency communication mesh",
    ],
    tech: "IoT Sensors, Microcontrollers (Arduino / ESP), Wireless Communication Modules, Dashboard & Visualization Tools, Web Technologies",
    github: "https://github.com/Y-K-SAI-SRIKAR/KBN_CDSPRK_1155",
  },
  {
    name: "Automated Greenhouse System",
    domain: "Embedded Systems / IoT",
    description:
      "Sensor-based greenhouse that monitors temperature, soil moisture, and light to maintain optimal plant growth.",
    highlights: [
      "Controls fan, irrigation pump, and lighting automatically",
      "Reduces manual effort and optimizes water usage",
    ],
    tech: "Arduino, DHT Sensor, Soil Moisture Sensor, LDR, Relay Module, Embedded C++",
    github: "https://github.com/Raghavan258/Projects",
  },
  {
    name: "Multipurpose Agriculture Robot",
    domain: "Robotics / Embedded Systems",
    description:
      "Bluetooth-controlled robot for agricultural tasks like movement, grass cutting, waste collection, and irrigation.",
    highlights: [
      "Soil moisture-based automatic watering system",
      "Showcases low-cost mechatronics integration",
    ],
    tech: "Arduino, L293D Motor Driver, HC-05 Bluetooth, Soil Moisture Sensor, DC Motors",
    github: "https://github.com/Raghavan258/Projects",
  },
  {
    name: "Electricity Bill Generator",
    domain: "Python / Data Handling",
    description:
      "Python tool that generates electricity bills with separate urban and rural tariffs and stores them in Excel.",
    highlights: [
      "Automatic bill number generation and retrieval",
      "Excel-based storage for simple record management",
    ],
    tech: "Python, openpyxl, Excel",
    github: "https://github.com/Raghavan258/Projects",
  },
  {
    name: "Object Detection in TORCS Simulator",
    domain: "Computer Vision / Autonomous Systems",
    description:
      "Object detection pipeline on TORCS racing simulator frames as a step toward autonomous driving perception.",
    highlights: [
      "Real-time frame processing using OpenCV",
      "Simulation-based experimentation environment",
    ],
    tech: "Python, OpenCV, TORCS Simulator",
    github: "https://github.com/Raghavan258/Projects",
  },
  {
    name: "Indian Constitution Awareness Portal",
    domain: "Frontend Development / Web Applications",
    description:
      "Role-based web platform to promote awareness of the Indian Constitution, built for a frontend frameworks hackathon.",
    highlights: [
      "Roles: Admin, Educator, Citizen/Student, Legal Expert",
      "MongoDB-backed data and clean responsive UI",
    ],
    tech: "HTML, CSS, JavaScript, Frontend Frameworks, MongoDB, Netlify",
    github: "https://github.com/Raghavan258/IndianConstitutionProject",
  },
];

const SKILLS = {
  "Programming Languages": ["Python", "C", "C++", "Java", "JavaScript"],
  "Embedded & IoT": [
    "Arduino",
    "ESP32",
    "Raspberry Pi",
    "Sensors (DHT, LDR, Soil Moisture)",
    "Motor Drivers (L293D)",
    "Bluetooth HC-05",
  ],
  "Web Development": [
    "HTML",
    "CSS",
    "JavaScript",
    "React (Vite)",
    "REST APIs",
    "MongoDB",
    "Netlify / Vercel",
  ],
  "Computer Vision & Data": ["OpenCV", "NumPy", "Excel / openpyxl", "Data handling & EDA"],
};

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="nav-logo">S V R</span>
        <span className="nav-title">SREENIVASAN VENKATA RAGHAVAN</span>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <p className="hero-kicker">B.Tech · Artificial Intelligence & Data Science</p>
        <h1 className="hero-heading">
          Building practical solutions in{" "}
          <span className="hero-highlight">Embedded Systems, IoT, and AI</span>.
        </h1>
        <p className="hero-subtitle">
          Projects across embedded automation, robotics, Python tools, web apps, and computer vision
          with a focus on real-world impact and clean implementations.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-ghost">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <p className="section-text">
        I am a B.Tech student in Artificial Intelligence & Data Science with hands-on experience in
        embedded systems, IoT, robotics, and computer vision.
      </p>
      <p className="section-text">
        I enjoy turning ideas into working prototypes, from smart campus ecosystems and automated
        greenhouses to Python utilities and role-based web portals.
      </p>
      <p className="section-text">
        I am looking for opportunities in AI, data science, and software development where I can
        contribute to real products while learning from experienced teams.
      </p>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.name}</h3>
        <span className="project-domain">{project.domain}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <ul className="project-highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="project-tech">
        <span className="project-tech-label">Tech Stack: </span>
        {project.tech}
      </p>
      <div className="project-links">
        <a
          href={project.github}
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-text">
        A selection of projects across smart campuses, embedded systems, IoT, Python, web
        development, and computer vision.
      </p>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <p className="section-text">
        Focused on strong fundamentals across programming, embedded systems, web technologies, and
        computer vision.
      </p>
      <div className="skills-grid">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="skill-card">
            <h3 className="skill-title">{category}</h3>
            <ul className="skill-list">
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p className="section-text">
        Open to internships and project collaborations in AI, data science, embedded systems, and
        web development.
      </p>
      <div className="contact-links">
        <a
          href="https://github.com/Raghavan258"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/venkata-raghavan-sreenivasan/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:sreenivasanvenkataraghavan@gmail.com">
          sreenivasanvenkataraghavan@gmail.com
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} SREENIVASAN VENKATA RAGHAVAN. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="page">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
