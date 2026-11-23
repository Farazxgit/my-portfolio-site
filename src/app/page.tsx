import {
  ArrowUpRight,
  Braces,
  ChevronDown,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Server,
  Sparkles,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { CopyEmail } from "@/components/copy-email";
import { SectionHeading, SocialLinks, Tags } from "@/components/ui";
import { experiences, learning, profile, skillGroups } from "@/data/portfolio";

const stackIcons = [Code2, Server, Database, Braces];

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <section id="about" className="section about-section">
          <div className="container">
            <SectionHeading
              number="01"
              label="A little about me"
              title="From interface to API. Built to ship."
            />
            <div className="about-grid">
              <div className="about-copy">
                <p>
                  I enjoy turning complex requirements into{" "}
                  <span>clear, reliable experiences.</span> I work across the
                  full stack, from React and Next.js interfaces to NestJS APIs
                  and databases.
                </p>
                <p>
                  From fintech and gaming to enterprise applications, I build
                  responsive interfaces, integrate APIs, and contribute to
                  backend functionality. I value the collaborative work behind a
                  good release: thoughtful reviews, clear communication, and
                  attention to the people using what we build.
                </p>
                <a href="#contact" className="text-link">
                  Let’s connect <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="about-facts">
                <div>
                  <span className="fact-icon">
                    <Code2 size={19} />
                  </span>
                  <div>
                    <span className="fact-label">EXPERIENCE</span>
                    <strong>2+ years building for production</strong>
                    <p>Fintech, gaming & enterprise</p>
                  </div>
                </div>
                <div>
                  <span className="fact-icon">
                    <GraduationCap size={19} />
                  </span>
                  <div>
                    <span className="fact-label">EDUCATION</span>
                    <strong>Bachelor of Information Technology</strong>
                    <p>Lahore Garrison University · 2020–2024</p>
                  </div>
                </div>
                <div>
                  <span className="fact-icon">
                    <MapPin size={19} />
                  </span>
                  <div>
                    <span className="fact-label">BASED IN</span>
                    <strong>Lahore, Pakistan</strong>
                    <p>English, Urdu & Punjabi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="section experience-section">
          <div className="container">
            <SectionHeading
              number="02"
              label="The journey so far"
              title="Experience that ships."
              description="Building, learning, and contributing alongside product and engineering teams."
            />
            <div className="experience-list">
              {experiences.map((experience) => (
                <details
                  key={experience.company}
                  className="experience-item"
                  open={experience.current}
                >
                  <summary>
                    <span
                      className={`company-mark ${experience.current ? "company-current" : ""}`}
                    >
                      {experience.monogram}
                    </span>
                    <span className="experience-identity">
                      <span className="company-name">
                        {experience.company}
                        {experience.current && (
                          <span className="current-badge">Current</span>
                        )}
                      </span>
                      <span className="experience-role">{experience.role}</span>
                    </span>
                    <span className="experience-period">
                      {experience.period}
                    </span>
                    <ChevronDown className="experience-chevron" size={18} />
                  </summary>
                  <div className="experience-content">
                    <ul>
                      {experience.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <Tags items={experience.stack} />
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <Projects />
        <section id="stack" className="section stack-section">
          <div className="container">
            <SectionHeading
              number="04"
              label="Tools of the trade"
              title="The stack behind the work."
              description="Practical tools for building across the application, from the interface to the database."
            />
            <div className="stack-grid">
              {skillGroups.map((group, index) => {
                const Icon = stackIcons[index];
                return (
                  <article className="stack-card" key={group.name}>
                    <Icon className="stack-icon" size={23} strokeWidth={1.5} />
                    <h3>{group.name}</h3>
                    <p>{group.detail}</p>
                    <Tags items={group.skills} />
                  </article>
                );
              })}
            </div>
            <aside className="exploring">
              <div className="exploring-copy">
                <span className="exploring-icon">
                  <Sparkles size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <h3>
                    Currently Exploring
                  </h3>
                  <p>
                    Expanding my full-stack background into AI-powered
                    application development.
                  </p>
                </div>
              </div>
              <Tags items={learning} />
            </aside>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <div className="contact-copy">
              <p className="eyebrow section-eyebrow">
                <span>05</span> / What’s next?
              </p>
              <h2>
                Let’s build
                <br />
                something <span className="accent">useful.</span>
              </h2>
              <p>
                Have a project in mind or a role that could be a good fit?
                <br className="desktop-break" /> I’d love to hear about it.
              </p>
              <div className="contact-buttons">
                <a
                  className="button button-primary"
                  href={`mailto:${profile.email}`}
                >
                  <Mail size={16} /> Get in touch <ArrowUpRight size={16} />
                </a>
                <CopyEmail />
              </div>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <a
              className="contact-art"
              href={`mailto:${profile.email}`}
              aria-label="Email Faraz"
            >
              <span className="contact-ring ring-one" />
              <span className="contact-ring ring-two" />
              <span className="contact-ring ring-three" />
              <Mail strokeWidth={0.8} aria-hidden="true" />
              <span className="contact-art-label">SAY HELLO</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-main">
          <div>
            <a className="wordmark" href="#">
              faraz<span className="accent">.</span>
              <span className="wordmark-slash">/</span>
            </a>
            <p>Faraz Ahmed · Full Stack Software Engineer</p>
          </div>
          <SocialLinks labels />
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Faraz Ahmed</span>
          <span>Designed &amp; built by Faraz Ahmed.</span>
          <a href="#">
            Back to top <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </>
  );
}
