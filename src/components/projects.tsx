import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects, projectTypeLabels, type Project } from "@/data/portfolio";
import { ProjectMedia, ProjectIcon } from "@/components/project-media";
import { SectionHeading, Tags } from "@/components/ui";

function ProjectAttribution({ project }: { project: Project }) {
  if (project.type === "company") return null;
  return (
    <div className="project-attribution">
      <span className="project-type">{projectTypeLabels[project.type]}</span>
    </div>
  );
}

function ProjectTitle({ project }: { project: Project }) {
  return (
    <h3 id={`title-${project.id}`}>
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} (opens in a new tab)`}
        >
          {project.title}
          <ArrowUpRight size={16} />
        </a>
      ) : (
        project.title
      )}
    </h3>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const featured = project.placement === "featured";
  return (
    <article
      className={`project-card ${featured ? "project-featured" : ""}`}
      aria-labelledby={`title-${project.id}`}
    >
      <div className="project-media-frame">
        <ProjectMedia project={project} />
      </div>
      <div className="project-content">
        <div className="project-category">
          {featured && (
            <span className="featured-label">
              <span className="small-dot" /> Featured
            </span>
          )}
          <span>{project.category}</span>
        </div>
        <ProjectTitle project={project} />
        <ProjectAttribution project={project} />
        <p>{project.description}</p>
        {project.platforms && (
          <ul className="project-platforms" aria-label="Platforms">
            {project.platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        )}
        <div className="project-contributions">
          <h4>My contribution</h4>
          <ul>
            {project.contributions.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        {project.technologies.length > 0 && (
          <Tags items={project.technologies} />
        )}
        {project.links && (
          <div className="project-links" aria-label={`${project.title} links`}>
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
        {project.details && (
          <details className="project-details">
            <summary>
              Technical details{" "}
              <ChevronDown className="technical-chevron" size={15} />
            </summary>
            <div className="project-detail-content">
              <ul>
                {project.details.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </details>
        )}
      </div>
    </article>
  );
}

function CompactProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="compact-project"
      aria-labelledby={`title-${project.id}`}
    >
      {project.media && <ProjectMedia project={project} />}
      <div className="compact-project-content">
        <div className="compact-project-top">
          <ProjectIcon icon={project.icon} />
          <span>{project.category}</span>
        </div>
        <ProjectTitle project={project} />
        <p>{project.description}</p>
        {project.technologies.length > 0 && (
          <Tags items={project.technologies} />
        )}
        <ProjectAttribution project={project} />
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="section work-section">
      <div className="container">
        <SectionHeading
          number="03"
          label="Selected work"
          title="Featured Work"
          description="Production contributions, personal projects, and academic work — with my role in each."
        />
        {projects
          .filter((project) => project.placement === "featured")
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        <div className="project-grid">
          {projects
            .filter((project) => project.placement === "primary")
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
        <section className="more-work" aria-labelledby="more-work-title">
          <div className="more-work-heading">
            <h2 id="more-work-title">More Work</h2>
            <p>Additional products and platforms I&apos;ve worked on.</p>
          </div>
          <div className="more-work-grid">
            {projects
              .filter((project) => project.placement === "more")
              .map((project) => (
                <CompactProjectCard key={project.id} project={project} />
              ))}
          </div>
        </section>
        <p className="work-note">
          A note on the work <span>—</span> Production projects reflect my
          contributions as part of a team.
        </p>
      </div>
    </section>
  );
}
