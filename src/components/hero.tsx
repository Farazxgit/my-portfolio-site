import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Download,
  GitBranch,
  MapPin,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { SocialLinks } from "@/components/ui";

function CodeVisual() {
  return (
    <div
      className="hero-visual"
      role="img"
      aria-label="Code illustration of Faraz's focus: thoughtful interfaces, connected APIs, and production software."
    >
      <div className="visual-cross cross-top">+</div>
      <div className="visual-cross cross-bottom">+</div>
      <div className="code-window">
        <div className="window-header">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>
            <Code2 size={13} /> engineer.ts
          </span>
          <span className="window-language">TS</span>
        </div>
        <div className="code-body" aria-hidden="true">
          <div>
            <span className="line-number">01</span>
            <span className="syntax-purple">const</span>{" "}
            <span className="syntax-white">engineer</span>{" "}
            <span className="syntax-muted">= &#123;</span>
          </div>
          <div>
            <span className="line-number">02</span>
            <span className="indent">
              name:{" "}
              <span className="syntax-green">&apos;Faraz Ahmed&apos;</span>,
            </span>
          </div>
          <div>
            <span className="line-number">03</span>
            <span className="indent">
              role:{" "}
              <span className="syntax-green">
                &apos;Full Stack Engineer&apos;
              </span>
              ,
            </span>
          </div>
          <div>
            <span className="line-number">04</span>
            <span className="indent">stack: [</span>
          </div>
          <div>
            <span className="line-number">05</span>
            <span className="indent double">
              <span className="syntax-green">&apos;React&apos;</span>,{" "}
              <span className="syntax-green">&apos;Next.js&apos;</span>,
            </span>
          </div>
          <div>
            <span className="line-number">06</span>
            <span className="indent double">
              <span className="syntax-green">&apos;TypeScript&apos;</span>,{" "}
              <span className="syntax-green">&apos;NestJS&apos;</span>
            </span>
          </div>
          <div>
            <span className="line-number">07</span>
            <span className="indent">],</span>
          </div>
          <div>
            <span className="line-number">08</span>
            <span className="indent">
              currentlyExploring: [
            </span>
          </div>
          <div>
            <span className="line-number">09</span>
            <span className="indent double">
              <span className="syntax-green">&apos;Python&apos;</span>,{" "}
              <span className="syntax-green">&apos;FastAPI&apos;</span>,{" "}
              <span className="syntax-green">&apos;AI&apos;</span>
            </span>
          </div>
          <div>
            <span className="line-number">10</span>
            <span className="indent">]</span>
          </div>
          <div>
            <span className="line-number">11</span>
            <span className="syntax-muted">&#125;;</span>
          </div>
          <div className="code-blank">
            <span className="line-number">12</span>
          </div>
          <div>
            <span className="line-number">13</span>
            <span className="syntax-purple">export default</span>{" "}
            <span className="syntax-white">engineer</span>
            <span className="syntax-muted">;</span>
            <span className="code-cursor" />
          </div>
        </div>
        <div className="window-footer">
          <span>
            <GitBranch size={12} /> main
          </span>
          <span>
            <span className="small-dot" /> TypeScript
          </span>
          <span>UTF-8</span>
        </div>
      </div>
      <div className="floating-card">
        <div className="floating-icon">
          <Braces size={22} />
        </div>
        <div>
          <span className="floating-eyebrow">FROM INTERFACE TO API</span>
            <strong>React + APIs<span className="accent">.</span></strong>
        </div>
        <span className="floating-check">
          <Check size={14} />
        </span>
      </div>
      <div className="visual-caption">
        <span className="caption-line" /> frontend / backend / delivery
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-main">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" /> Full Stack Software Engineer
          </p>
          <h1 id="hero-title">
            Building production
            <br className="hero-break" /> software{" "}
            <span className="hero-last">
              for the web<span className="accent">.</span>
              <ArrowDownRight aria-hidden="true" />
            </span>
          </h1>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-buttons">
            <a href="#work" className="button button-primary">
              View my work <ArrowUpRight size={17} />
            </a>
            <a href={profile.resume} download className="button button-outline">
              Download Resume <Download size={16} />
            </a>
          </div>
          <div className="hero-meta">
            <SocialLinks />
            <span className="meta-divider" />
            <span>
              <MapPin size={14} />
              {profile.location}
            </span>
          </div>
        </div>
        <CodeVisual />
      </div>
      <div className="container hero-bottom">
        <span>
          <span className="tiny-cross">+</span> FRONTEND CRAFT. FULL-STACK
          THINKING.
        </span>
        <a href="#about">
          A little more about me <ArrowDown size={13} />
        </a>
      </div>
    </section>
  );
}
