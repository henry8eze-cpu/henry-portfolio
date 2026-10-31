
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="container">
      <nav className="navbar">
        <h2>HENRY<span>.</span></h2>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero reveal" id="top">
        <p className="eyebrow">FRONTEND DEVELOPER</p>
        <h1>
          Building digital
          <br />
          experiences that
          <br />
          <span>make an impact.</span>
        </h1>
        <p className="description">
          I'm Henry Ezenduka. I build modern, responsive web
          experiences with React and JavaScript.
        </p>
        <a className="button" href="#projects">
          Explore my work ↗
        </a>
      </section>

      <section className="about reveal" id="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>
          Turning ideas into
          <span> functional experiences.</span>
        </h2>
        <p className="about-text">
          I'm a frontend developer passionate about building clean,
          responsive and user-friendly web applications.
          I work with JavaScript, React, HTML and CSS to turn
          ideas into real products.
        </p>
      </section>

      <section className="skills reveal" id="skills">
        <p className="eyebrow">MY TOOLKIT</p>
        <h2>Technologies I work with.</h2>
        <div className="skills-grid">
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">HTML5</div>
          <div className="skill-card">CSS3</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">GitHub</div>
        </div>
      </section>

      <section className="projects reveal" id="projects">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Things I've been building.</h2>

        <div className="projects-grid">

          {/* GASBRIDGE */}
          <div className="project-card reveal">
            <img
              className="project-image"
              src="/images/gasbridge.png"
              alt="GasBridge website preview"
            />

            <div className="project-number">01 / FRONTEND</div>
            <h3>GasBridge</h3>
            <p>
              A frontend interface for an LNG platform,
              built to deliver a clean and accessible user experience.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <div className="project-links">
              <a
                href="https://lng-green.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Preview ↗
              </a>
              <a
                href="https://github.com/henry8eze-cpu/gasbridge-frontend"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* HAIRBNB */}
          <div className="project-card reveal">
            <div className="project-number">02 / WEB APPLICATION</div>
            <h3>Hairbnb</h3>
            <p>
              A marketplace connecting customers across Europe
              with professional Afro hairstylists. Explore stylists,
              discover hairstyles and find convenient booking options.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Marketplace</span>
              <span>Frontend</span>
            </div>

            <div className="project-links">
              <a
                href="https://hairbnb-psi.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Preview ↗
              </a>
            </div>
          </div>

          {/* PORTFOLIO */}
          <div className="project-card reveal">
            <div className="project-number">03 / PERSONAL</div>
            <h3>My Portfolio</h3>
            <p>
              A personal space showcasing my skills, projects
              and journey as a frontend developer.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Vite</span>
              <span>CSS</span>
            </div>
          </div>

        </div>
      </section>

      <section className="contact reveal" id="contact">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>
          Have a project in mind?
          <span> Let's talk.</span>
        </h2>
        <p className="contact-text">
          I'm open to frontend development opportunities,
          collaborations and interesting projects.
        </p>
        <a className="button" href="mailto:henry8eze@gmail.com">
          Contact me ↗
        </a>
      </section>

      <footer>
        <p>© 2026 Henry Ezenduka. Built with React.</p>
        <div className="project-links">
          <a
            href="https://github.com/henry8eze-cpu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/henry-ezenduka-4340733b7"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
