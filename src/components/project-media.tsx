import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Blocks,
  Gamepad2,
  Globe,
  Layers3,
  PenLine,
  Route,
  ShieldCheck,
  Check,
  CircleDot,
  Smartphone,
  Radio,
  UserRound,
} from "lucide-react";
import type { Project, ProjectMediaImage } from "@/data/portfolio";

const icons = {
  payments: Layers3,
  gaming: Gamepad2,
  shield: ShieldCheck,
  route: Route,
  builder: Blocks,
  signature: PenLine,
  website: Globe,
};

export function ProjectIcon({ icon }: { icon: Project["icon"] }) {
  const Icon = icons[icon];
  return <Icon strokeWidth={1.3} aria-hidden="true" />;
}

function MediaImage({
  image,
  className = "",
}: {
  image: ProjectMediaImage;
  className?: string;
}) {
  return (
    <div className={`media-image-cell ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 680px) calc(100vw - 44px), 50vw"
        className="project-screenshot"
        style={{ objectPosition: image.objectPosition }}
      />
    </div>
  );
}

function BackendArchitecture() {
  const nodes = [
    "Client",
    "JWT Auth",
    "Role Guard / RBAC",
    "Controller",
    "Service",
    "Prisma",
    "PostgreSQL",
  ];
  return (
    <div
      className="architecture-visual"
      aria-label="Backend flow: Client to JWT Authentication to Role Guard and RBAC to Controller to Service to Prisma to PostgreSQL"
    >
      <span className="architecture-kicker">REQUEST FLOW / API LAYER</span>
      <div className="architecture-flow">
        {nodes.map((node, index) => (
          <span className="architecture-step" key={node}>
            <span className="architecture-node">
              <CircleDot size={11} />
              {node}
            </span>
            {index < nodes.length - 1 && (
              <ArrowRight className="architecture-arrow" size={15} />
            )}
          </span>
        ))}
      </div>
      <div className="architecture-footer">
        <span>
          <Check size={12} /> Protected routes
        </span>
        <span>relational persistence</span>
      </div>
    </div>
  );
}

function RideSystemAbstract() {
  return (
    <div
      className="ride-visual"
      aria-label="Abstract ride system showing passenger and driver connections over real-time communication"
    >
      <span className="ride-kicker">MOBILE / REAL-TIME SYSTEM</span>
      <div className="ride-route">
        <div className="ride-person">
          <UserRound size={18} />
          <span>Passenger</span>
        </div>
        <span className="ride-line">
          <i />
          <i />
          <i />
        </span>
        <div className="ride-center">
          <Radio size={22} />
          <span>Socket.io</span>
        </div>
        <span className="ride-line">
          <i />
          <i />
          <i />
        </span>
        <div className="ride-person">
          <UserRound size={18} />
          <span>Driver</span>
        </div>
      </div>
      <div className="ride-bottom">
        <Smartphone size={15} /> cross-platform ride aggregator
      </div>
    </div>
  );
}

/** Screenshot-first media; an honest, local placeholder until a screenshot is supplied. */
export function ProjectMedia({ project }: { project: Project }) {
  const content =
    project.media?.type === "screenshot" ? (
      <div
        className={`project-media-images media-screenshot ${project.media.images.length > 1 ? "media-screenshot-pair" : "media-single"}`}
      >
        {project.media.images.map((image) => (
          <MediaImage key={image.src} image={image} />
        ))}
      </div>
    ) : project.media?.type === "collage" ? (
      <div className={`project-media-images media-${project.media.type}`}>
        {project.media.images.map((image) => (
          <MediaImage key={image.src} image={image} />
        ))}
        {project.url && (
          <span className="media-visit" aria-hidden="true">
            <ArrowUpRight size={17} />
          </span>
        )}
      </div>
    ) : project.media?.type === "backend-architecture" ? (
      <BackendArchitecture />
    ) : project.media?.type === "abstract" ? (
      <RideSystemAbstract />
    ) : (
      <>
        <span className="visual-corner corner-tl" aria-hidden="true" />
        <span className="visual-corner corner-tr" aria-hidden="true" />
        <span className="visual-corner corner-bl" aria-hidden="true" />
        <span className="visual-corner corner-br" aria-hidden="true" />
        <span className="project-visual-index">PROJECT / {project.number}</span>
        <div className="project-identity">
          <div className="project-symbol">
            <ProjectIcon icon={project.icon} />
          </div>
          <strong>{project.title}</strong>
          <span>{project.category}</span>
        </div>
      </>
    );
  const className = `project-visual visual-${project.id}${project.media ? " has-screenshot" : ""}`;
  return project.url ? (
    <a
      className={className}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${project.title} (opens in a new tab)`}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}
