import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <span className="card-icon">👨‍💻</span>
          <span className="highlight-role">Swikar Jadhav</span>
        </div>
        <div 
          ref={hamburgerRef}
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <ul 
          ref={menuRef}
          className={`nav-links ${isMenuOpen ? 'active' : ''}`}
        >
          <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#achievements" onClick={() => setIsMenuOpen(false)}>Achievements</a></li>
          <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
          <li><a href="#coding-profiles" onClick={() => setIsMenuOpen(false)}>Coding Profiles</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      <section id="hero" className={`hero ${visibleSections['hero'] ? 'visible' : ''}`}>
        <div className="hero-content card">
          <div className="card-header">
            <span className="card-icon">🚀</span>
            <h1>Hi, I'm Swikar Jadhav</h1>
          </div>
          <h2>Full Stack Developer | DevOps Enthusiast | AI/ML Engineer</h2>
          <p>Engineer passionate about building smart AI systems, scalable web apps, and secure cloud pipelines.</p>
          <div className="cta-buttons">
            <a href="https://drive.google.com/file/d/1UZ3813t6HKQb4cFUXylS1Ef184usFLW0/view?usp=drive_link" className="btn highlight-tech">Download Resume</a>
            <a href="#contact" className="btn highlight-tech">Get in Touch</a>
          </div>
        </div>
      </section>

      <section id="experience" className={`experience ${visibleSections['experience'] ? 'visible' : ''}`}>
        <h2>Experience</h2>
        <div className="experience-cards">
          <div className="experience-item card">
            <div className="card-header">
              <span className="card-icon">🤖</span>
              <h3><span className="highlight-role">AI/ML Intern</span></h3>
            </div>
            <div className="card-meta">
              <span className="card-date">February 2025 - April 2025</span>
              <span className="card-location">Pune, India</span>
            </div>
            <ul className="card-list">
              <li><span className="highlight">Autonomous AI agent</span> for real-time surveillance, capable of stealth system entry/exit, reducing traceable footprints by <span className="highlight">95%</span>.</li>
              <li>Achieved <span className="highlight">90% accuracy</span> in face and speaker recognition by integrating <span className="highlight">DeepFace</span>, <span className="highlight">WAV2VEC</span>, and audio-CCTV stream analysis.</li>
              <li>Built <span className="highlight">IP tracking</span>, <span className="highlight">OSINT profiling</span>, and <span className="highlight">zero-click exploit</span> modules to support national security system.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className={`projects ${visibleSections['projects'] ? 'visible' : ''}`}>
        <h2>Projects</h2>
        <div className="project-cards">
          <div className="project-item card">
            <div className="card-header">
              <span className="card-icon">💬</span>
              <h3>SocioBot <span className="card-date">(Aug 2024)</span></h3>
            </div>
            <div className="card-meta">
              <span className="highlight-tech">Botpress</span>, <span className="highlight-tech">React.js</span>, <span className="highlight-tech">MongoDB</span>, <span className="highlight-tech">Express.js</span>
            </div>
            <ul className="card-list">
              <li>Developed <span className="highlight">Sociobot</span>, a multilingual chatbot on Botpress, utilizing <span className="highlight">web scraping</span> to handle queries related to NGO websites.</li>
              <li>Created a <span className="highlight">ticketing system</span> for unresolved queries, with tickets reviewed and addressed by an <span className="highlight">admin panel</span>.</li>
              <li>Built an interactive web application using <span className="highlight-tech">React.js</span> and <span className="highlight-tech">MongoDB</span>, and integrated the chatbot as a plugin for various websites.</li>
            </ul>
          </div>
          <div className="project-item card">
            <div className="card-header">
              <span className="card-icon">🧑‍💻</span>
              <h3>CodeSync <span className="card-date">(Apr 2024)</span></h3>
            </div>
            <div className="card-meta">
              <span className="highlight-tech">React.js</span>, <span className="highlight-tech">Node.js</span>, <span className="highlight-tech">Express.js</span>, <span className="highlight-tech">jQuery</span>, <span className="highlight-tech">CSS</span>, <span className="highlight-tech">Judge API</span>
            </div>
            <ul className="card-list">
              <li>Developed a web application enabling <span className="highlight">real-time collaboration</span> on codebases, enhancing productivity and teamwork.</li>
              <li>Integrated robust <span className="highlight">code compilation</span> for C++, C, Python, and Java, allowing users to compile and test code within the platform.</li>
              <li>Implemented <span className="highlight">real-time code synchronization</span> using <span className="highlight-tech">WebSockets</span> and <span className="highlight-tech">Socket.IO</span>, ensuring instant visibility of changes.</li>
            </ul>
          </div>
          <div className="project-item card">
            <div className="card-header">
              <span className="card-icon">📊</span>
              <h3>Loan Risk Analysis <span className="card-date">(Sep 2024)</span></h3>
            </div>
            <div className="card-meta">
              <span className="highlight-tech">React.js</span>, <span className="highlight-tech">NumPy</span>, <span className="highlight-tech">Pandas</span>, <span className="highlight-tech">Scikit-learn</span>, <span className="highlight-tech">Matplotlib</span>
            </div>
            <ul className="card-list">
              <li>Uses a <span className="highlight">Random Forest model</span> with <span className="highlight">PPA score</span> and statistical insights to enhance risk assessment.</li>
              <li>Computes <span className="highlight">p-values</span> and <span className="highlight">correlation matrix</span> to determine the significance and relationships between loan factors.</li>
              <li>Provides an overall <span className="highlight">loan approval decision</span> with factor-wise risk contributions for smarter financial strategies.</li>
            </ul>
          </div>
          <div className="project-item card">
            <div className="card-header">
              <span className="card-icon">👤</span>
              <h3>Face Recognition Attendance System <span className="card-date">(Jul 2023)</span></h3>
            </div>
            <div className="card-meta">
              <span className="highlight-tech">Python</span>, <span className="highlight-tech">OpenCV</span>, <span className="highlight-tech">face_recognition</span>, <span className="highlight-tech">NumPy</span>, <span className="highlight-tech">Tkinter</span>, <span className="highlight-tech">SQLite</span>
            </div>
            <ul className="card-list">
              <li>Developed an automated attendance system achieving <span className="highlight">98% accuracy</span> in face recognition using <span className="highlight">dlib's HOG</span> and <span className="highlight">CNN</span> face detection algorithms.</li>
              <li>Implemented <span className="highlight">real-time tracking</span> with <span className="highlight">30 FPS</span> processing speed and <span className="highlight">multi-face detection</span> capability supporting up to 10 simultaneous recognitions.</li>
              <li>Created an intuitive <span className="highlight">GUI dashboard</span> with <span className="highlight">attendance analytics</span>, <span className="highlight">export functionality</span>, and <span className="highlight">automated email reports</span> for seamless management.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className={`skills ${visibleSections['skills'] ? 'visible' : ''}`}>
        <h2>Technical Skills</h2>
        <div className="skills-cards">
          <div className="skill-category card">
            <div className="card-header">
              <span className="card-icon">⚡</span>
              <h3>Languages</h3>
            </div>
            <ul className="card-list">
              <li><span className="highlight-tech">Python</span></li>
              <li><span className="highlight-tech">Java</span></li>
              <li><span className="highlight-tech">C++</span></li>
              <li><span className="highlight-tech">JavaScript</span></li>
              <li><span className="highlight-tech">SQL</span></li>
            </ul>
          </div>
          <div className="skill-category card">
            <div className="card-header">
              <span className="card-icon">🌐</span>
              <h3>Web Technologies</h3>
            </div>
            <ul className="card-list">
              <li><span className="highlight-tech">React.js</span></li>
              <li><span className="highlight-tech">Node.js</span></li>
              <li><span className="highlight-tech">Express.js</span></li>
              <li><span className="highlight-tech">Redux</span></li>
              <li><span className="highlight-tech">REST APIs</span></li>
              <li><span className="highlight-tech">Next.js</span></li>
            </ul>
          </div>
          <div className="skill-category card">
            <div className="card-header">
              <span className="card-icon">🛠️</span>
              <h3>DevOps & Tools</h3>
            </div>
            <ul className="card-list">
              <li><span className="highlight-tech">Git</span></li>
              <li><span className="highlight-tech">Linux</span></li>
              <li><span className="highlight-tech">Postman</span></li>
              <li><span className="highlight-tech">GCP</span></li>
              <li><span className="highlight-tech">AWS</span></li>
              <li><span className="highlight-tech">Docker</span></li>
            </ul>
          </div>
          <div className="skill-category card">
            <div className="card-header">
              <span className="card-icon">🗄️</span>
              <h3>Databases</h3>
            </div>
            <ul className="card-list">
              <li><span className="highlight-tech">MongoDB</span></li>
              <li><span className="highlight-tech">MySQL</span></li>
              <li><span className="highlight-tech">SQLite</span></li>
            </ul>
          </div>
          <div className="skill-category card">
            <div className="card-header">
              <span className="card-icon">🧠</span>
              <h3>Machine Learning</h3>
            </div>
            <ul className="card-list">
              <li><span className="highlight-tech">Scikit-learn</span></li>
              <li><span className="highlight-tech">Pandas</span></li>
              <li><span className="highlight-tech">NumPy</span></li>
              <li><span className="highlight-tech">Matplotlib</span></li>
              <li><span className="highlight-tech">SpeechBrain</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="achievements" className={`achievements ${visibleSections['achievements'] ? 'visible' : ''}`}>
        <h2>Achievements</h2>
        <div className="achievements-cards">
          <div className="achievements-item card">
            <div className="card-header">
              <span className="card-icon">🏆</span>
              <h3>Master Code for Change Hackathon</h3>
            </div>
            <div className="card-meta">
              <span className="card-date">2024</span>
            </div>
            <ul className="card-list">
              <li>Secured <span className="highlight">5th position</span> out of <span className="highlight">25 teams</span> by developing an innovative <span className="highlight">multilingual chatbot</span> for Katalyst NGO, enhancing their digital outreach capabilities.</li>
            </ul>
          </div>
          <div className="achievements-item card">
            <div className="card-header">
              <span className="card-icon">🔒</span>
              <h3>Internship</h3>
            </div>
            <ul className="card-list">
              <li>Built scalable <span className="highlight">AI systems</span> used for <span className="highlight">national security research</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className={`education ${visibleSections['education'] ? 'visible' : ''}`}>
        <h2>Education</h2>
        <div className="education-cards">
          <div className="education-item card">
            <div className="card-header">
              <span className="card-icon">🎓</span>
              <h3>B.E., Information Technology – PICT Pune</h3>
            </div>
            <div className="card-meta">
              <span className="card-date">2026</span>
              <span className="highlight">CGPA: 9.20</span>
            </div>
          </div>
          <div className="education-item card">
            <div className="card-header">
              <span className="card-icon">🏫</span>
              <h3>HSC, Sant Tukaram National Model School, Latur</h3>
            </div>
            <div className="card-meta">
              <span className="card-date">2022</span>
              <span className="highlight">Percentage: 89%</span>
            </div>
          </div>
          <div className="education-item card">
            <div className="card-header">
              <span className="card-icon">🏫</span>
              <h3>SSC, Sant Tukaram National Model School, Latur</h3>
            </div>
            <div className="card-meta">
              <span className="card-date">2020</span>
              <span className="highlight">Percentage: 94.8%</span>
            </div>
          </div>
        </div>
      </section>

      <section id="coding-profiles" className={`coding-profiles ${visibleSections['coding-profiles'] ? 'visible' : ''}`}>
        <h2>Coding Profiles</h2>
        <div className="coding-cards">
          <div className="profile-links card">
            <div className="card-header">
              <span className="card-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
                </svg>
              </span>
              <a href="https://leetcode.com/u/swikarj" target="_blank" rel="noopener noreferrer" className="highlight-tech">LeetCode</a>
            </div>
            <div className="card-header">
              <span className="card-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </span>
              <a href="https://www.codechef.com/users/creeperr" target="_blank" rel="noopener noreferrer" className="highlight-tech">CodeChef</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={`contact ${visibleSections['contact'] ? 'visible' : ''}`}>
        <h2>Contact Me</h2>
        <div className="contact-cards">
          <div className="contact-info card">
            <div className="card-header">
              <span className="card-icon">📞</span>
              <span className="highlight">+91-9637689001</span>
            </div>
            <div className="card-header">
              <span className="card-icon">✉️</span>
              <a href="mailto:swikarjadhav14@gmail.com" className="highlight-tech">swikarjadhav14@gmail.com</a>
            </div>
            <div className="card-header">
              <span className="card-icon">💼</span>
              <a href="https://linkedin.com/in/swikar-jadhav" target="_blank" rel="noopener noreferrer" className="highlight-tech">linkedin.com/in/swikar-jadhav</a>
            </div>
            <div className="card-header">
              <span className="card-icon">🐙</span>
              <a href="https://github.com/swikarjadhav14" target="_blank" rel="noopener noreferrer" className="highlight-tech">github.com/swikarjadhav14</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App; 