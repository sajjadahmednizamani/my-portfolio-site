import React from "react";
import { Github, Linkedin, Mail, Home, User, Code, Briefcase } from "lucide-react";
import "./App.css";

export default function Portfolio() {
  return (
    <div className="app">

      {/* ===== HORIZONTAL TOP NAVBAR ===== */}
      <header className="top-navbar">
        <div className="navbar-left">
          <img src="/myphoto.jpeg" alt="Sajjad Ahmed" className="navbar-profile-pic" />
          <h1>Sajjad Ahmed</h1>
        </div>
        <nav className="navbar-menu">
          <a href="#about"><Home size={16}/> Home</a>
          <a href="#background"><User size={16}/> Background</a>
          <a href="#skills"><Code size={16}/> Skills</a>
          <a href="#projects"><Briefcase size={16}/> Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="navbar-socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><Github /></a>
          <a href="https://www.linkedin.com/in/sajjad-ahmed-48b9a2390/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-content">

        {/* HERO / HOME */}
        <section id="about" className="hero-section">
          <div className="hero-left">
            {/* Profile picture in hero */}
            <img src="/myphoto.jpeg" alt="Sajjad Ahmed" className="hero-profile-pic" />

            <p className="greeting">Hi 👋</p>
            <h1>I'm Sajjad Ahmed</h1>
            <p>React Native Developer & AI App Builder creating beautiful UI/UX experiences for mobile & web apps.</p>

            <div className="hero-accent-box">
              <p>Currently building AI-powered mobile applications 🚀</p>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn-main">View Projects</a>
              <a href="/resume.pdf" className="btn-outline">Download CV</a>
            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section id="background" className="about-section">
          <h2>About Me</h2>
          <p>I am pursuing BS Computer Science from Sukkur IBA University (2022 - Present). Focused on mobile development & AI-powered applications.</p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <span>React Native</span>
            <span>JavaScript</span>
            <span>Redux</span>
            <span>Firebase</span>
            <span>API Integration</span>
            <span>Python</span>
            <span>OpenCV</span>
            <span>WordPress</span>
            <span>Database</span>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="portfolio-section">
          <h2>Projects</h2>
          <div className="portfolio-gallery">
            <div className="project-item">
              <h3>Sketchify AI App</h3>
              <p>AI image sketch & video generator with smooth interactive UI for end users.</p>
            </div>
            <div className="project-item">
              <h3>Chat Application</h3>
              <p>Real-time messaging app built using Firebase and React Native.</p>
            </div>
            <div className="project-item">
              <h3>Travel & Tourism App</h3>
              <p>Booking system with weather API integration, maps & personalized recommendations.</p>
            </div>
            <div className="project-item">
              <h3>Portfolio Website</h3>
              <p>Responsive portfolio website with modern design & React animations.</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="experience-section">
          <h2>Experience</h2>
          <ul>
            <li>Freelance React Native Developer (2024 - Present)</li>
            <li>Developed 5+ mobile applications from scratch.</li>
            <li>Integrated APIs, payment gateways, and cloud solutions.</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>
          <p>Shahdadpur, Sindh, Pakistan</p>
          <a href="mailto:sajjadahmednizamani9@gmail.com" className="email-btn">
            <Mail /> sajjadahmednizamani9@gmail.com
          </a>
        </section>

      </div>
    </div>
  );
}
