export const profile = {
  name: "Faraz Ahmed",
  role: "Full Stack Software Engineer",
  location: "Lahore, Pakistan",
  email: "mfarazafzal1@gmail.com",
  github: "https://github.com/Farazxgitahmed",
  linkedin: "https://linkedin.com/in/faraz-ahmed-4015ab257/",
  resume: "/resume/Faraz-Ahmed-Resume.pdf",
  intro:
    "I'm Faraz Ahmed, a Full Stack Software Engineer with 2+ years of experience building and maintaining fintech, gaming, and enterprise applications using React, Next.js, TypeScript, Node.js and NestJS.",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    company: "Kryptomind LLC",
    monogram: "K",
    role: "Full Stack Developer",
    period: "Feb 2026 — Present",
    current: true,
    stack: ["React", "TypeScript", "NestJS", "MongoDB"],
    points: [
      "Develop and maintain production applications using React (Vite), TypeScript, NestJS and REST APIs across fintech, blockchain and gaming products.",
      "Build responsive frontend features, integrate backend APIs and third-party services, and contribute to administrative interfaces and payment-related workflows.",
      "Contribute to selected backend functionality using NestJS and MongoDB.",
      "Work with Git feature branches, pull requests, code reviews, testing and production release workflows.",
    ],
  },
  {
    company: "Texagon",
    monogram: "T",
    role: "Software Engineer",
    period: "Oct 2025 — Jan 2026",
    current: false,
    stack: ["Next.js", "NestJS", "PostgreSQL", "Supabase"],
    points: [
      "Developed full-stack applications using Next.js, NestJS, PostgreSQL and Prisma ORM.",
      "Built responsive, type-safe interfaces using React and TanStack Table.",
      "Implemented authentication and RBAC workflows with Supabase.",
      "Integrated REST APIs across frontend and backend functionality.",
    ],
  },
  {
    company: "NETSOL Technologies",
    monogram: "N",
    role: "Associate Software Engineer",
    period: "Nov 2024 — Oct 2025",
    current: false,
    stack: ["React", "REST APIs", ".NET", "Azure DevOps"],
    points: [
      "Developed React.js interfaces and integrated REST APIs for enterprise software products.",
      "Contributed to application functionality involving .NET and PL/SQL.",
      "Used Azure DevOps Boards, Repos and Pipelines in Agile development workflows.",
    ],
  },
  {
    company: "ReownLogics",
    monogram: "R",
    role: "Web Developer Intern",
    period: "Aug 2023 — Nov 2023",
    current: false,
    stack: ["React", "JavaScript", "REST APIs"],
    points: [
      "Developed e-commerce frontend functionality using React.js and JavaScript.",
      "Built shopping-cart and product interactions and integrated REST APIs.",
    ],
  },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  placement: "featured" | "primary" | "more";
  type: "company" | "personal" | "academic";
  company?: string;
  description: string;
  technologies: string[];
  contributions: string[];
  details?: string[];
  platforms?: string[];
  links?: ProjectLink[];
  icon:
    | "payments"
    | "gaming"
    | "shield"
    | "route"
    | "builder"
    | "signature"
    | "website";
  url?: `https://${string}`;
  media?: ProjectMediaConfig;
};

export type ProjectMediaImage = {
  src: `/${string}`;
  alt: string;
  objectPosition?: string;
};

export type ProjectLink = {
  label: string;
  url: `https://${string}`;
};

export type ProjectMediaConfig =
  | { type: "screenshot"; images: ProjectMediaImage[] }
  | { type: "collage"; images: ProjectMediaImage[] }
  | { type: "backend-architecture" }
  | { type: "abstract"; variant: "ride-system" };

export const projectTypeLabels: Record<Project["type"], string> = {
  company: "Production Project",
  personal: "Personal Project",
  academic: "Final Year Project",
};

export const projects: Project[] = [
  {
    id: "zakpay",
    number: "01",
    title: "Zakat Coin & ZakPay",
    category: "Fintech / Payment platforms",
    placement: "featured",
    type: "company",
    company: "Kryptomind LLC",
    icon: "payments",
    media: {
      type: "screenshot",
      images: [
        {
          src: "/projects/zakat-coin-network.png",
          alt: "Zakat Coin charity network homepage",
          objectPosition: "top center",
        },
      ],
    },
    description:
      "Production fintech and payment applications across the Zakat Coin ecosystem, including ZKT Coin and ZakPay.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "REST APIs",
    ],
    contributions: [
      "Built frontend features and contributed to administrative interfaces.",
      "Integrated REST APIs and payment-related workflows.",
      "Contributed to selected NestJS and MongoDB backend functionality.",
    ],
    links: [
      { label: "Visit Zakat Coin", url: "https://zktcoin.org/" },
      { label: "Visit ZakPay", url: "https://zakpay.com/" },
    ],
    details: [
      "Contributed to environment-based service configuration.",
      "Collaborated through feature branches and pull requests across multiple repositories.",
    ],
  },
  {
    id: "gaming",
    number: "02",
    title: "Gaming E-Commerce Platforms",
    category: "Gaming / E-commerce",
    placement: "primary",
    type: "company",
    company: "Kryptomind LLC",
    icon: "gaming",
    media: {
      type: "collage",
      images: [
        { src: "/projects/gameverce.png", alt: "Gameverce gaming storefront" },
        { src: "/projects/skullhit.png", alt: "Skullhit gaming storefront" },
        { src: "/projects/dynarce.png", alt: "Dynarce gaming storefront" },
        { src: "/projects/dynarbyte.png", alt: "Dynarbyte gaming storefront" },
      ],
    },
    platforms: ["Gameverce", "Skullhit", "Dynarce", "Dynarbyte", "Talvaris"],
    description: "A group of production gaming and e-commerce platforms.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "REST APIs"],
    contributions: [
      "Developed responsive product and user-facing interfaces.",
      "Integrated REST APIs across multiple related platforms.",
    ],
    links: [
      { label: "Gameverce", url: "https://gameverce.com/" },
      { label: "Skullhit", url: "https://skullhit.com/" },
      { label: "Dynarce", url: "https://dynarce.com/" },
      { label: "Dynarbyte", url: "https://dynarbyte.com/" },
      { label: "Talvaris", url: "https://talvaris.com/" },
    ],
  },
  {
    id: "task-api",
    number: "03",
    title: "Role-Based Task Management System",
    category: "Backend / REST API",
    placement: "primary",
    type: "personal",
    icon: "shield",
    media: { type: "backend-architecture" },
    description:
      "A task management REST API with Admin, Manager, and User access levels.",
    technologies: ["NestJS", "PostgreSQL", "Prisma ORM", "JWT", "RBAC"],
    contributions: [
      "Built JWT authentication and role-based authorization.",
      "Implemented validation, guards, and protected routes.",
      "Modeled relational data with PostgreSQL and Prisma ORM.",
    ],
    details: [
      "Organized the API into NestJS modules, controllers, services, and DTOs for users, roles, and task workflows.",
    ],
  },
  {
    id: "apnitaxi",
    number: "04",
    title: "ApniTaxi",
    category: "Mobile / Ride aggregator",
    placement: "primary",
    type: "academic",
    icon: "route",
    media: { type: "abstract", variant: "ride-system" },
    description:
      "A cross-platform app designed around comparing ride options through a unified interface.",
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    contributions: [
      "Developed passenger and driver interfaces.",
      "Built authentication and ride-management modules.",
      "Implemented real-time communication with Socket.io.",
    ],
  },
  {
    id: "paymova",
    url: "https://paymova.io",
    number: "05",
    title: "Paymova.io",
    category: "Fintech / Payments",
    placement: "more",
    type: "company",
    company: "Kryptomind LLC",
    icon: "payments",
    description: "Contributed to Paymova.io, a fintech and payments product.",
    technologies: [],
    contributions: [],
  },
  {
    id: "payment-solution",
    url: "https://paymentsolution.io",
    number: "06",
    title: "PaymentSolution.io",
    category: "Payments / Fintech",
    placement: "more",
    type: "company",
    company: "Kryptomind LLC",
    icon: "payments",
    description:
      "Contributed to PaymentSolution.io, a payments and fintech platform.",
    technologies: [],
    contributions: [],
  },
  {
    id: "app-constructor",
    url: "https://appsmaestras.com",
    number: "07",
    title: "App Constructor",
    category: "Low-Code Application Builder",
    placement: "more",
    type: "company",
    company: "Kryptomind LLC",
    icon: "builder",
    description:
      "Contributed to a configurable application-building platform with a CMS-style builder experience.",
    technologies: [],
    contributions: [],
  },
  {
    id: "krypto-signatures",
    url: "https://kryptosignatures.com",
    number: "08",
    title: "KryptoSignatures",
    category: "Digital Signature Platform",
    placement: "more",
    type: "company",
    company: "Kryptomind LLC",
    icon: "signature",
    description:
      "Contributed to KryptoSignatures, a digital signature platform.",
    technologies: [],
    contributions: [],
  },
  {
    id: "kryptomind-website",
    url: "https://kryptomind.net",
    number: "09",
    title: "Kryptomind Website",
    category: "Company Website",
    placement: "more",
    type: "company",
    company: "Kryptomind LLC",
    icon: "website",
    description: "Contributed to the Kryptomind company website using Next.js.",
    technologies: ["Next.js"],
    contributions: [],
  },
];

export const skillGroups = [
  {
    name: "Frontend",
    detail: "Interfaces that feel right.",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "TanStack Table",
    ],
  },
  {
    name: "Backend",
    detail: "The logic behind the experience.",
    skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "Socket.io"],
  },
  {
    name: "Data",
    detail: "Structure, storage, and persistence.",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Supabase", "PL/SQL"],
  },
  {
    name: "Engineering",
    detail: "From a feature branch to production.",
    skills: [
      "Git",
      "GitHub",
      "Azure DevOps",
      "Postman",
      "JWT",
      "RBAC",
      "CI/CD",
      "Agile",
    ],
  },
];

export const learning = ["Python", "FastAPI", "LLM Applications", "RAG"];
