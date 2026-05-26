import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Award, CheckCircle } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function App() {
  return (
    <div className="portfolio-app">
      <nav style={{ padding: '30px 40px', display: 'flex', justifyContent: 'flex-end' }}>
        <a href="#about" className="mono-text" style={{ margin: '0 15px', color: '#e0e0e0', textDecoration: 'none' }}>01. About</a>
        <a href="#experience" className="mono-text" style={{ margin: '0 15px', color: '#e0e0e0', textDecoration: 'none' }}>02. Experience</a>
        <a href="#projects" className="mono-text" style={{ margin: '0 15px', color: '#e0e0e0', textDecoration: 'none' }}>03. Work</a>
        <a href="#achievements" className="mono-text" style={{ margin: '0 15px', color: '#e0e0e0', textDecoration: 'none' }}>04. Achievements</a>
        <a href="#contact" className="mono-text" style={{ margin: '0 15px', color: '#e0e0e0', textDecoration: 'none' }}>05. Contact</a>
      </nav>

      <section id="about" className="hero">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p variants={fadeInUp} className="hero-subtitle">Hello, my name is</motion.p>
          <motion.h1 variants={fadeInUp}>Abilashini K.</motion.h1>
          <motion.h2 variants={fadeInUp}>I build <span className="text-gradient">AI-driven</span> solutions.</motion.h2>
          <motion.p variants={fadeInUp}>
            I'm a computer science engineer specializing in Artificial Intelligence and Full-Stack Development. 
            Previously, I was an AI Research Assistant at SASTRA Deemed University, focused on building intelligent NLP pipelines 
            and scalable applications that solve real-world problems.
          </motion.p>
          <motion.a variants={fadeInUp} href="mailto:abikrishkumar@gmail.com" className="btn">
            Get In Touch
          </motion.a>
        </motion.div>
      </section>

      <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
        <motion.h2 variants={fadeInUp} className="section-title"><span className="mono-text" style={{color: 'var(--accent-cyan)', marginRight: '10px', fontSize: '1.2rem'}}>02.</span> Where I've Worked</motion.h2>
        
        <motion.div variants={fadeInUp} className="glass-panel experience-item">
          <div className="experience-header">
            <div>
              <h3 className="experience-title">Artificial Intelligence Research Assistant</h3>
              <div className="experience-company">SASTRA Deemed University</div>
            </div>
            <div className="experience-date">Jan 2025 – May 2025 | Tanjore, TN</div>
          </div>
          <ul className="experience-details">
            <li>Designed and implemented a domain-specific NLP pipeline achieving 95% precision on unseen agricultural text data.</li>
            <li>Fine-tuned and compared transformer models (BERT, SciBERT, RoBERTa), improving term-recognition accuracy by 18%.</li>
            <li>Built a scalable silver-standard corpus using the AGROVOC ontology, enhancing dataset consistency and domain coverage.</li>
            <li>Optimized preprocessing and tokenization workflows, reducing model training time by 25%.</li>
          </ul>
        </motion.div>
      </motion.section>

      <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
        <motion.h2 variants={fadeInUp} className="section-title"><span className="mono-text" style={{color: 'var(--accent-cyan)', marginRight: '10px', fontSize: '1.2rem'}}>03.</span> Some Things I've Built</motion.h2>
        
        <div className="projects-grid">
          <motion.div variants={fadeInUp} className="glass-panel project-card">
            <div className="project-header">
              <Code2 size={32} color="var(--accent-cyan)" />
              <a href="#" className="contact-link"><ExternalLink size={20} /></a>
            </div>
            <h3 className="project-title">AI-Powered Email Reply Generator</h3>
            <div className="project-description">
              An AI-driven email assistant leveraging Google Gemini, accelerating email drafting efficiency by 40%. Features a custom Chrome extension for automatic email classification and secure REST APIs with JWT authentication.
            </div>
            <div className="project-tech">
              <span className="tech-tag">Java</span>
              <span className="tech-tag">Spring Boot</span>
              <span className="tech-tag">Gemini API</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-panel project-card">
            <div className="project-header">
              <Code2 size={32} color="var(--accent-cyan)" />
              <a href="#" className="contact-link"><ExternalLink size={20} /></a>
            </div>
            <h3 className="project-title">Real-Time Interview Platform</h3>
            <div className="project-description">
              A secure one-to-one interview system powered by real-time video, chat, recording, room-locking, and screen-sharing. Includes an isolated code editor that runs code safely and validates test cases automatically.
            </div>
            <div className="project-tech">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">WebRTC</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-panel project-card">
  <div className="project-header">
    <Code2 size={32} color="var(--accent-cyan)" />
    <a href="#" className="contact-link">
      <ExternalLink size={20} />
    </a>
  </div>

  <h3 className="project-title">Real-Time Chat Application</h3>

  <div className="project-description">
    Chat-App is a real-time messaging application built with a modern tech stack, enabling seamless communication with features like instant messaging, user authentication, and responsive UI.
  </div>

  <div className="project-tech">
    <span className="tech-tag">React.js</span>
    <span className="tech-tag">Node.js</span>
    <span className="tech-tag">MongoDB</span>
    <span className="tech-tag">Express.js</span>
  </div>
</motion.div>
        </div>
      </motion.section>

      

      <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
        <motion.h2 variants={fadeInUp} className="section-title"><span className="mono-text" style={{color: 'var(--accent-cyan)', marginRight: '10px', fontSize: '1.2rem'}}>04.</span> Technical Arsenal</motion.h2>
        <motion.div variants={fadeInUp} className="skills-container">
          {['Java', 'Python', 'SQL', 'React.js', 'Node.js', 'Express.js', 'Spring Boot', 'AWS', 'MongoDB', 'REST APIs', 'JUnit', 'Git'].map(skill => (
            <div key={skill} className="skill-pill">{skill}</div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section id="achievements" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
        <motion.h2 variants={fadeInUp} className="section-title"><span className="mono-text" style={{color: 'var(--accent-cyan)', marginRight: '10px', fontSize: '1.2rem'}}>05.</span> Achievements & Certifications</motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <motion.div variants={fadeInUp} className="glass-panel experience-item" style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: 'var(--accent-purple)' }}>
              <Award size={28} style={{ marginRight: '15px' }} />
              <h3 style={{ fontSize: '1.4rem', color: '#e0e0e0' }}>Top Achievements</h3>
            </div>
            <ul className="experience-details">
              <li><strong>Finalist - Walmart CodeHers'25:</strong> Ranked in the top 0.1% among 100,000+ participants in a national coding competition.</li>
              <li><strong>Semi-Finalist - ET AI Hackathon 2026:</strong> Recognized for developing innovative AI solutions in a national-level hackathon.</li>
              <li><strong>Juspay Hiring Challenge:</strong> Advanced to the final stage, ranking among top performers out of 200,000+ participants nationwide.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-panel experience-item" style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: 'var(--accent-cyan)' }}>
              <CheckCircle size={28} style={{ marginRight: '15px' }} />
              <h3 style={{ fontSize: '1.4rem', color: '#e0e0e0' }}>Certifications</h3>
            </div>
            <ul className="experience-details">
              <li><strong>Google AI Essentials</strong> - Google</li>
              <li><strong>Oracle Cloud Infrastructure Foundations Associate</strong> - Oracle</li>
              <li><strong>AWS Cloud Practitioner Essentials</strong> - AWS</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="contact" className="contact-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
        <motion.h2 variants={fadeInUp} className="section-title" style={{justifyContent: 'center'}}>
          <span className="mono-text" style={{color: 'var(--accent-cyan)', marginRight: '10px', fontSize: '1.2rem'}}>06.</span> What's Next?
        </motion.h2>
        <motion.h1 variants={fadeInUp} style={{fontSize: '3rem', marginBottom: '20px'}}>Get In Touch</motion.h1>
        <motion.p variants={fadeInUp} style={{maxWidth: '600px', margin: '0 auto 30px', color: 'var(--text-muted)'}}>
          I'm currently looking for new opportunities as an AI Engineer or Full Stack Developer. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        <motion.a variants={fadeInUp} href="mailto:abikrishkumar@gmail.com" className="btn">Say Hello</motion.a>
        
        <motion.div variants={fadeInUp} className="contact-links">
          <a href="https://github.com/abilashini593" target="_blank" rel="noreferrer" className="contact-link">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/abilashini-k" target="_blank" rel="noreferrer" className="contact-link">
            <Linkedin size={24} />
          </a>
          <a href="mailto:abikrishkumar@gmail.com" className="contact-link">
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default App; 