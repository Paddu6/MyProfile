import { Content, Theme } from '@carbon/react';
import Navigation from './components/Navigation';
import PhotoCarousel from './components/PhotoCarousel';
import Hero from './components/Hero';
import TimelineItem from './components/TimelineItem';
import { professionalExperience, volunteeringExperience } from './data/experienceData';
import './App.scss';

function App() {
  return (
    <Theme theme="g10">
      <Navigation />
      <Content className="portfolio">
        <PhotoCarousel />
        <Hero />

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-section__content">
            <h2 className="timeline-section__title">About Me</h2>
            <p className="about-section__text">
              Welcome to my professional portfolio. I am passionate about making a difference through my work and community involvement.
            </p>
            <p className="about-section__text">
              This interactive timeline showcases my professional journey and volunteer experiences, highlighting the milestones that have shaped my career.
            </p>
          </div>
        </section>

        {/* Professional Experience Timeline */}
        <section id="timeline" className="timeline-section">
          <div className="timeline-section__header">
            <h2 className="timeline-section__title">Professional Experience</h2>
            <p className="timeline-section__subtitle">An interactive journey through my career</p>
          </div>
          <div className="timeline">
            {professionalExperience.map((experience, index) => (
              <TimelineItem
                key={index}
                date={experience.date}
                title={experience.title}
                company={experience.company}
                description={experience.description}
                tags={experience.tags}
              />
            ))}
          </div>
        </section>

        {/* Volunteering Timeline */}
        <section id="volunteering" className="timeline-section" style={{ background: 'var(--cds-layer-01)' }}>
          <div className="timeline-section__header">
            <h2 className="timeline-section__title">Volunteering Experience</h2>
            <p className="timeline-section__subtitle">Making a difference in the community</p>
          </div>
          <div className="timeline">
            {volunteeringExperience.map((experience, index) => (
              <TimelineItem
                key={index}
                date={experience.date}
                title={experience.title}
                company={experience.company}
                description={experience.description}
                tags={experience.tags}
                isVolunteer={true}
              />
            ))}
          </div>
        </section>

        {/* Documents Section */}
        <section id="documents" className="documents-section">
          <div className="documents-section__header">
            <h2 className="documents-section__title">Documents</h2>
          </div>
          <div className="documents-section__grid">
            <div className="document-card">
              <div className="document-icon">📄</div>
              <h3>Professional Resume</h3>
              <p>Download my complete professional resume</p>
              <a href="/Padma Kunapareddy Professional Resume.pdf" download className="cds--btn cds--btn--primary">
                Download PDF
              </a>
            </div>
            <div className="document-card">
              <div className="document-icon">🤝</div>
              <h3>Volunteering Experience</h3>
              <p>View my community involvement and volunteer work</p>
              <a href="/Padma Kunapareddy Volunteering Experience.pdf" download className="cds--btn cds--btn--primary">
                Download PDF
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-section__header">
            <h2 className="contact-section__title">Get In Touch</h2>
            <p className="contact-section__subtitle">Let's connect and explore opportunities together</p>
          </div>
          <div className="contact-section__links">
            <a href="mailto:pkunapareddy@gmail.com" className="contact-link">
              <span className="contact-icon">✉️</span>
              <span>Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/padmaja-kunapareddy/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Paddu6" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">💻</span>
              <span>GitHub</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2026 Padma Kunapareddy. All rights reserved.</p>
        </footer>
      </Content>
    </Theme>
  );
}

export default App;

// Made with Bob
