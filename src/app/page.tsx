"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  // 1. Modal State Toggles
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isTeamMode, setIsTeamMode] = useState(true);

  // 2. FAQ Accordion Active Index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // 3. Countdown Timer Hooks
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const countdownDate = new Date("Nov 12, 2026 09:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0')
      });
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(interval);
  }, []);

  // 4. Form Submit handler
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registration Successful! Check your WhatsApp/Email details for kickoff guidelines.");
    setIsRegisterOpen(false);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <div className="bg-wave-pattern" />

      {/* Header & Navigation */}
      <header>
        <div className="nav-container">
          <div className="brand-logos">
            <div className="logo-placeholder">
              CompSSA <span className="logo-badge">HTU</span>
            </div>
            <div className="logo-placeholder">
              Partner: <span className="logo-badge axlr8">axlr8</span>
            </div>
          </div>
          <nav>
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#prizes">Prizes</a></li>
              <li><a href="#schedule">Timeline</a></li>
              <li><a href="#team-hub">Teams</a></li>
              <li><a href="#resources">FAQ</a></li>
            </ul>
          </nav>
          <button className="btn-nav" onClick={() => setIsRegisterOpen(true)}>Register Now</button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="celebration-pill">CompSSA Week Celebration</div>
        <h1>COMPSSA HACKATHON <span>2026</span></h1>
        <div className="hero-theme">BUILD. INNOVATE. CODE.</div>
        
        <div className="grand-prize-banner">
          <p>GRAND PRIZE POOL</p>
          <h2>GHS 3,000</h2>
        </div>

        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => setIsRegisterOpen(true)}>Register Now</button>
          <button className="btn-outline" onClick={() => setIsGuideOpen(true)}>Participant Guide</button>
        </div>

        {/* Quick Info Bar */}
        <div className="quick-info-bar">
          <div className="info-item">
            <span className="info-label">Kickoff In</span>
            <span className="info-val">
              {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Venue</span>
            <span className="info-val">Ho Technical University / Online</span>
          </div>
          <div className="info-item">
            <span className="info-label">Key Partners</span>
            <span className="info-val">axlr8</span>
          </div>
        </div>
      </section>

      {/* About & Tracks Section */}
      <section id="about">
        <div className="section-header">
          <h2>About the Hackathon</h2>
          <p>Unleash your coding potential, solve real-world problems, and shape the technology of tomorrow.</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>Innovate for Impact</h3>
            <p>The CompSSA Hackathon 2026 is Ho Technical University's flagship hackathon, bringing together developers, designers, and innovators to build products that redefine local tech landscapes.</p>
            <p>Whether you want to construct next-gen financial systems, optimize educational pathways, or craft state-of-the-art AI solutions, this is your sandbox.</p>
            <ul className="rules-list">
              <li>Teams of 2 to 4 members are fully supported.</li>
              <li>All stacks allowed; solutions must be created during the event.</li>
              <li>Partner API access provided by axlr8.</li>
            </ul>
          </div>
          <div className="image-stack">
            <div className="glow-panel">
              <h4>Anticipate the Hackathon...</h4>
              <p>CompSSA & Ho Technical University invite all computer science students to collaborate, exchange design patterns, and launch production-grade microservices.</p>
            </div>
          </div>
        </div>

        {/* Tracks & Themes */}
        <div className="section-header">
          <h2>Tracks & Themes</h2>
          <p>Pick a track that aligns with your solution concept. Partner guides and starter repositories will be provided.</p>
        </div>
        <div className="tracks-grid">
          <div className="track-card">
            <span className="track-icon">🌐</span>
            <h3>Web & Mobile Solutions</h3>
            <p>Build frictionless responsive interfaces, cross-platform apps, or web systems that address local community bottlenecks.</p>
          </div>
          <div className="track-card">
            <span className="track-icon">💳</span>
            <h3>FinTech Systems</h3>
            <p>Introduce new structures for micro-transactions, digital wallets, or payment platforms optimized for students and vendors.</p>
          </div>
          <div className="track-card">
            <span className="track-icon">🤖</span>
            <h3>AI & Machine Learning</h3>
            <p>Utilize open models or predictive APIs to resolve operational inefficiencies, automate classification tasks, or analyze datasets.</p>
          </div>
          <div className="track-card">
            <span className="track-icon">🎓</span>
            <h3>EdTech for HTU</h3>
            <p>Empower student life at Ho Technical University with scheduling tools, collaboration workspaces, or academic progress trackers.</p>
          </div>
        </div>
      </section>

      {/* Prize Pool & Perks */}
      <section id="prizes">
        <div className="section-header">
          <h2>Prize Pool & Perks</h2>
          <p>Exciting awards, recognition, and future pathways for winners and participants.</p>
        </div>

        <div className="prizes-container">
          <div className="grand-prize-card">
            <h3>Grand Prize Winner</h3>
            <div className="amount">GHS 3,000</div>
            <p>Cash prize + Incubation & Mentorship support from axlr8</p>
          </div>
          
          <div className="perks-grid">
            <div className="perk-item">
              <h4>2nd & 3rd Place</h4>
              <p>Cash incentives, hosting credits, and merchandise packs.</p>
            </div>
            <div className="perk-item">
              <h4>Best UI/UX Award</h4>
              <p>Special prize for the team with the most intuitive, beautiful app layout.</p>
            </div>
            <div className="perk-item">
              <h4>All-Female Team Award</h4>
              <p>Incentive to foster gender diversity and inclusion in technology.</p>
            </div>
            <div className="perk-item">
              <h4>Certificates & Perks</h4>
              <p>Digital badges and certificates of participation for all teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Timeline */}
      <section id="schedule">
        <div className="section-header">
          <h2>Timeline & Steps</h2>
          <p>Track crucial dates to stay ahead during the hackathon cycle.</p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Oct 10 - Nov 5, 2026</div>
              <h3>Registration Phase</h3>
              <p>Sign up individual profiles or ready teams using the registration funnel.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Nov 6, 2026</div>
              <h3>Team Formation & Matchmaking</h3>
              <p>Individual applicants are matched or integrated into full developer squads.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Nov 12, 2026</div>
              <h3>Kickoff & Coding Launch</h3>
              <p>Problem details finalized, tools released, and hacking starts live!</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Nov 13, 2026</div>
              <h3>Mentorship Check-Ins</h3>
              <p>Industry experts review architectures and provide real-time suggestions.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Nov 14, 2026</div>
              <h3>Demo Pitch & Awards</h3>
              <p>Final project submission followed by live pitches to judges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Formation Hub */}
      <section id="team-hub">
        <div className="team-hub-card">
          <h3>Need a Team?</h3>
          <p>Don't code alone. Connect with designers, ideators, and developers in the dedicated community Discord server. Find team members before the deadline.</p>
          <div className="team-cta-group">
            <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer" className="btn-primary">Join Discord Server</a>
            <button className="btn-outline" onClick={() => setIsRegisterOpen(true)}>Create Team Profile</button>
          </div>
        </div>
      </section>

      {/* Resources & FAQ Section */}
      <section id="resources">
        <div className="section-header">
          <h2>Resources & FAQs</h2>
          <p>Everything you need to succeed in the CompSSA Hackathon.</p>
        </div>

        <div className="resources-grid">
          <div className="resource-card">
            <h3>Submission Guidelines</h3>
            <ul className="resource-list">
              <li><span>GitHub Repo Link</span> <span className="bold">Required</span></li>
              <li><span>3-Min Video Demo</span> <span class="bold">Required</span></li>
              <li><span>Pitch Presentation Deck</span> <span class="bold">Required</span></li>
            </ul>
          </div>
          <div className="resource-card">
            <h3>Judging Criteria</h3>
            <ul className="resource-list">
              <li><span>Innovation & Utility</span> <span class="bold">25%</span></li>
              <li><span>Technical Performance</span> <span class="bold">25%</span></li>
              <li><span>Design / UI/UX</span> <span class="bold">25%</span></li>
              <li><span>Feasibility & Pitch</span> <span class="bold">25%</span></li>
            </ul>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="accordion">
          <div className={`accordion-item ${activeFaq === 0 ? 'active' : ''}`}>
            <button className="accordion-header" onClick={() => toggleFaq(0)}>
              <span>Can I submit a project I started earlier?</span>
              <span className="accordion-icon">+</span>
            </button>
            <div className={`accordion-content ${activeFaq === 0 ? 'active' : ''}`}>
              <p>No. All code must be authored during the active development period of the hackathon. Utilizing open-source boilerplates is permitted, provided they are declared in the submission form.</p>
            </div>
          </div>
          <div className={`accordion-item ${activeFaq === 1 ? 'active' : ''}`}>
            <button className="accordion-header" onClick={() => toggleFaq(1)}>
              <span>Do I need to know how to code to participate?</span>
              <span className="accordion-icon">+</span>
            </button>
            <div className={`accordion-content ${activeFaq === 1 ? 'active' : ''}`}>
              <p>Not at all! Non-coding teammates are vital. Teams require ideators, visual designers, and technical writers to craft pitches and map UX pathways.</p>
            </div>
          </div>
          <div className={`accordion-item ${activeFaq === 2 ? 'active' : ''}`}>
            <button className="accordion-header" onClick={() => toggleFaq(2)}>
              <span>Is there an entry fee?</span>
              <span className="accordion-icon">+</span>
            </button>
            <div className={`accordion-content ${activeFaq === 2 ? 'active' : ''}`}>
              <p>Registration and participation in the CompSSA Hackathon is completely free for all students of Ho Technical University.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Partners */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <h3>CompSSA Hackathon 2026</h3>
            <p>Driving digital transformation and youth-led engineering frameworks at Ho Technical University.</p>
          </div>
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#prizes">Prizes</a></li>
              <li><a href="#schedule">Timeline</a></li>
            </ul>
          </div>
          <div className="footer-partners">
            <h4>Our Partners</h4>
            <div className="partner-logo-row">
              <span className="logo-badge">CompSSA</span>
              <span class="logo-badge">HTU</span>
              <span class="logo-badge axlr8">axlr8</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Computer Science Students Association (CompSSA) - HTU. All rights reserved.</p>
          <p>Partnered with axlr8</p>
        </div>
      </footer>

      {/* MODAL: REGISTRATION PORTAL */}
      <div className={`modal-overlay ${isRegisterOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <button className="modal-close" onClick={() => setIsRegisterOpen(false)}>&times;</button>
          <div className="modal-header">
            <h3>Secure Your Spot</h3>
            <p>Register as a team or individual. Solo applicants will get access to our matchmaking session.</p>
          </div>
          
          <div className="form-toggle">
            <button type="button" className={`toggle-btn ${isTeamMode ? 'active' : ''}`} onClick={() => setIsTeamMode(true)}>Team Signup</button>
            <button type="button" className={`toggle-btn ${!isTeamMode ? 'active' : ''}`} onClick={() => setIsTeamMode(false)}>Solo Signup</button>
          </div>

          <form onSubmit={handleRegisterSubmit}>
            {isTeamMode && (
              <div className="form-group">
                <label htmlFor="team-name">Team Name</label>
                <input type="text" id="team-name" placeholder="Enter team identifier" required={isTeamMode} />
              </div>
            )}
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="full-name">Your Full Name</label>
                <input type="text" id="full-name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="student-id">Student ID</label>
                <input type="text" id="student-id" placeholder="HTU-CS-202X..." required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select id="department">
                  <option value="CS">Computer Science</option>
                  <option value="IT">Information Technology</option>
                  <option value="ENG">Engineering</option>
                  <option value="OTHER">Other Faculty</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="role">Primary Specialization</label>
                <select id="role">
                  <option value="Frontend">Frontend Dev</option>
                  <option value="Backend">Backend Dev</option>
                  <option value="UI/UX">UI/UX Designer</option>
                  <option value="Ideator">Ideator/Presenter</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact">WhatsApp Contact Link / Number</label>
              <input type="text" id="contact" placeholder="e.g. +233..." required />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Confirm Registration</button>
          </form>
        </div>
      </div>

      {/* MODAL: PARTICIPANT GUIDE */}
      <div className={`modal-overlay ${isGuideOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <button className="modal-close" onClick={() => setIsGuideOpen(false)}>&times;</button>
          <div className="modal-header">
            <h3>Participant Guide</h3>
            <p>Everything you need to know before the kickoff.</p>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
            <p><strong>1. Hardware & Setup</strong><br />Bring your laptop, charger, and any hardware components if you plan to present physical boards. Campus Wi-Fi is provided, but carrying a personal router is suggested.</p>
            <p><strong>2. Code Integrity</strong><br />All software should be checked in via a public GitHub/GitLab repository. Our grading system checks for commits during the active hack timeline.</p>
            <p><strong>3. Mentorship</strong><br />Don't hesitate to reach out to the axlr8 engineering mentors via the Discord channel if you encounter database connections or web build difficulties.</p>
            <a href="#" className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none', marginTop: '1rem' }}>Download PDF Guide</a>
          </div>
        </div>
      </div>
    </>
  );
}
