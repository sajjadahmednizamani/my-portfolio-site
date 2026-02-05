import React from "react";
import { Github, Linkedin, Mail, Home, User, Code, Briefcase } from "lucide-react";
import "./App.css";

export default function Portfolio() {
  return (
    <div className="app">

      {/* ===== SIDEBAR ===== */}
      <nav className="sidebar">
        <div className="profile">
          <img src="/myphoto.jpeg" alt="Sajjad Ahmed" />
          <h2>Sajjad Ahmed</h2>
          <p>React Native Developer</p>
        </div>

        <ul className="menu">
          <li><a href="#about"><Home size={18}/> Home</a></li>
          <li><a href="#background"><User size={18}/> Background</a></li>
          <li><a href="#skills"><Code size={18}/> Skills</a></li>
          <li><a href="#projects"><Briefcase size={18}/> Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-content">

        {/* HERO / HOME */}
        <section id="about" className="hero-section">
          <div className="hero-left">
            <p className="greeting">Hi 👋</p>
            <h1>I'm Sajjad Ahmed</h1>
            <p>React Native Developer & AI App Builder creating beautiful UI/UX 
              experiences for mobile & web apps.</p>

            {/* Accent box */}
            <div className="hero-accent-box">
              <p>Currently building AI-powered mobile applications 🚀</p>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn-main">View Projects</a>
              <a href="/resume.pdf" className="btn-outline">Download CV</a>
            </div>
            <div className="socials">
              <a href="https://github.com/" target="_blank"><Github /></a>
              <a href="https://www.linkedin.com/in/sajjad-ahmed-48b9a2390/" target="_blank"><Linkedin /></a>
            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section id="background" className="about-section">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I am pursuing BS Computer Science from Sukkur IBA University (2022 - Present). Focused on mobile development & AI-powered applications.</p>
              <div className="stats">
                <div className="stat">
                  <h3>10+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat">
                  <h3>450+</h3>
                  <p>Hours Coding</p>
                </div>
                <div className="stat">
                  <h3>95%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
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

        {/* PORTFOLIO */}
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
          <div className="experience-content">
            <p>
              Freelance React Native Developer (2024 - Present)
              <ul>
                <li>Developed 5+ mobile applications from scratch.</li>
                <li>Integrated APIs, payment gateways, and cloud solutions.</li>
              </ul>
            </p>
          </div>
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
