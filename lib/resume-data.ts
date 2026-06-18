export const PROFILE = {
  name: "Matthew Szych",
  firstName: "Matt",
  role: "Full-Stack Software Engineer",
  email: "szychmatthew@gmail.com",
  phone: "(567) 277-1450",
  location: "Perrysburg, OH",
  linkedin: "https://www.linkedin.com/in/matthew-szych21/",
  github: "https://github.com/matthewszych",
  headshot: "/headshot.png",
} as const;

export const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Education"] as const;

export const EXPERIENCE = [
  {
    company: "Emprise Technologies LLC",
    title: "Software Developer II",
    location: "Maumee, OH",
    dates: "June 2022 – Present",
    bullets: [
      "Played a key role in modernizing 5+ legacy enterprise applications, refactoring frontend and backend systems using React, Vue, Next.js, Node.js, Python, Java, and C#/.NET to improve maintainability, scalability, and long-term reliability.",
      "Delivered 30+ full-stack features and product enhancements using TypeScript, React, Vue 3, and Next.js, directly improving user workflows and backend service performance by up to 90%.",
      "Engineered 40+ REST and gRPC API endpoints using Node.js, OpenAPI, and Protocol Buffers, improving inter-service communication and reducing latency by up to 50%.",
      "Owned deployment of cloud-native systems across AWS and Azure using Docker, Kubernetes, and Helm with CI/CD pipelines (GitHub Actions, Jenkins, TeamCity, Azure DevOps).",
      "Optimized PostgreSQL, MSSQL, and MongoDB databases supporting production-scale transactional workloads, including ETL pipelines and SSIS packages.",
      "Built an Electron desktop application with Vue and WebSockets for real-time healthcare charting with AWS S3 file storage.",
      "Developed a Python + Selenium monitoring bot to validate web application health on automated schedules via Docker and GitHub Actions.",
      "Maintained comprehensive test suites using Jest and Vitest across frontend and backend services.",
    ],
    tags: [
      "React",
      "Vue",
      "Next.js",
      "TypeScript",
      "Node.js",
      "C#/.NET",
      "Python",
      "Java",
      "gRPC",
      "Docker",
      "Kubernetes",
      "Helm",
      "AWS",
      "Azure",
      "PostgreSQL",
      "MSSQL",
    ],
  },
  {
    company: "Emprise Technologies LLC",
    title: "Software Developer I",
    location: "Maumee, OH",
    dates: "June 2021 – June 2022",
    note: "Promoted to Software Developer II",
    bullets: [
      "Developed Scala-based ETL pipelines to process accounts, payments, and debt collection data, loading into Snowflake with AWS S3 as intermediate storage.",
      "Contributed to full-stack development of enterprise applications using React, Vue, Node.js, and C#/.NET across multiple client projects.",
      "Built and maintained REST API endpoints and database schemas supporting PostgreSQL and MSSQL workloads.",
      "Supported Docker containerization and CI/CD pipeline configuration for dev and staging environments.",
      "Wrote unit and integration tests using Jest, participating in code reviews and agile ceremonies.",
    ],
    tags: [
      "React",
      "Vue",
      "Node.js",
      "C#/.NET",
      "TypeScript",
      "Scala",
      "Snowflake",
      "PostgreSQL",
      "MSSQL",
      "AWS",
      "Docker",
      "Jenkins",
      "Jest",
    ],
  },
  {
    company: "Dana Inc.",
    title: "Software Developer Capstone",
    location: "Maumee, OH",
    dates: "January 2020 – May 2020",
    bullets: [
      "Developed enterprise web application features using C#/.NET and Bootstrap, improving usability across core internal business systems.",
      "Modeled and improved Microsoft SQL Server databases supporting relational data models across multiple business workflows, improving query efficiency and data access performance.",
      "Partnered with product managers and cross-functional stakeholders to deliver 10+ end-to-end features from requirements to production.",
      "Implemented testing practices and code reviews that reduced critical defects by 30%, improving overall application stability across releases.",
    ],
    tags: ["C#/.NET", "Bootstrap", "MSSQL", "SQL Server"],
  },
] as const;

export const SKILLS = [
  { title: "Languages", icon: "{ }", items: ["JavaScript", "TypeScript", "C#", "Python", "Java", "Scala", "SQL"] },
  {
    title: "Frameworks",
    icon: "⚡",
    items: [".NET (Core)", "Node.js", "React", "Vue.js", "Next.js", "Electron", "Express"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
      "Jenkins",
      "TeamCity",
      "Azure DevOps",
      "Railway",
      "Cloudflare",
    ],
  },
  {
    title: "Architecture & APIs",
    icon: "🏢",
    items: ["Microservices", "gRPC", "REST", "OpenAPI", "Protocol Buffers", "WebSockets"],
  },
  { title: "Databases", icon: "🗄", items: ["PostgreSQL", "MSSQL", "MongoDB", "Snowflake", "SSIS", "ETL Pipelines"] },
  { title: "Testing & Tools", icon: "✓", items: ["Jest", "Vitest", "Git", "Auth0", "Microsoft Auth"] },
] as const;

export const PERSONAL_PROJECTS = [
  {
    title: "Uncle Iroh Bot",
    description: "Discord bot with music, leveling, and AI",
    details:
      "A Discord bot inspired by Uncle Iroh from Avatar. Features slash commands for wisdom, bending elements, a leveling/XP system, music playback via yt-dlp, and optional AI responses via OpenAI.",
    tags: ["TypeScript", "discord.js", "PostgreSQL", "Docker", "OpenAI"],
    link: "https://github.com/matthewszych/iroh-bot",
  },
  {
    title: "WatchHub",
    description: "Synchronized YouTube watching with friends",
    details:
      "A web app for watching YouTube videos together in real time. Supports synchronized playback, shared rooms, and live chat so everyone stays in sync.",
    tags: ["React", "Node.js", "WebSockets", "TypeScript", "PostgreSQL", "Auth0", "Railway", "Cloudflare"],
    link: "https://watchhub.watch/",
  },
] as const;

export const WORK_PROJECTS = [
  {
    title: "Property Tax Estimation Platform",
    description: "Full-stack microservices for tax assessments",
    details:
      "Built a full-stack application for creating property tax estimates using a microservices architecture with services for documents and comments. Integrated Microsoft authentication and Azure DevOps CI/CD pipelines.",
    tags: [
      "React",
      "TypeScript",
      "C#/.NET",
      "gRPC",
      "PostgreSQL",
      "Azure DevOps",
      "Microservices",
      "Docker",
      "Kubernetes",
      "Helm",
      "Jest",
    ],
  },
  {
    title: "Supplier Compliance Portal",
    description: "Compliance document management for supply chain",
    details:
      "Developed a compliance document system for tracking suppliers, product items, facilities, and purchase orders. Built with OpenAPI specs and Vue 3 Options API with TeamCity CI pipelines.",
    tags: ["Vue 3", "TypeScript", "Node.js", "OpenAPI", "PostgreSQL", "TeamCity", "Docker", "Vitest"],
  },
  {
    title: "Healthcare Charting App",
    description: "Electron desktop app for patient charts",
    details:
      "Built an Electron desktop application for managing healthcare user charts with cloud file storage on AWS S3.",
    tags: ["Electron", "Vue", "TypeScript", "Node.js", "AWS", "S3", "WebSockets", "Vitest"],
  },
  {
    title: "Debt Collection ETL Pipeline",
    description: "Scala-based ETL for accounts and payments",
    details:
      "Developed ETL pipelines in Scala to process accounts, payments, and other debt collection data, loading into Snowflake with AWS S3 as intermediate storage.",
    tags: ["Scala", "Snowflake", "AWS", "S3", "ETL", "Jenkins"],
  },
  {
    title: "Document Mapper",
    description: "Configurable source-to-target file mapping tool",
    details:
      "Created an application allowing users to define custom mappings between source and target locations, supporting files, databases, and JSON for flexible document routing.",
    tags: ["React", "TypeScript", "Node.js", "MSSQL", "GitHub Actions", "Jest"],
  },
  {
    title: "ETL Job Monitor",
    description: "Dashboard for tracking ETL job status",
    details:
      "Built a monitoring dashboard displaying running, pending, and failed ETL jobs with detailed status and error information for each pipeline execution.",
    tags: ["React", "Next.js", "TypeScript", "MSSQL", "GitHub Actions", "Jest"],
  },
  {
    title: "Debt Collection Data Ingestion",
    description: "SSIS packages for MSSQL data loading",
    details:
      "Developed SSIS packages to extract, transform, and load debt collection records into a MSSQL database for downstream processing.",
    tags: ["C#", "SSIS", "MSSQL", "ETL"],
  },
  {
    title: "Website Monitoring Bot",
    description: "Automated website health and login monitoring",
    details:
      "Built a Python application using Selenium to automatically log into web applications and verify key workflows. Runs inside a Docker container on a schedule, captures screenshots on failures, and generates reports when issues are detected.",
    tags: ["Python", "Selenium", "Docker", "PostgreSQL", "GitHub Actions"],
  },
] as const;

export const EDUCATION = [
  {
    school: "University of Toledo",
    location: "Toledo, OH",
    dateRange: "August 2016 – August 2020",
    degree: "Bachelor of Science (B.S) in Computer Science and Engineering Technology",
    honors: [
      "Cum Laude",
      "Distinguished Scholars Award (2016–2020)",
      "Dean's List (2017–2020)",
      "President's List (May 2019)",
    ],
  },
  {
    school: "St. Francis de Sales High School",
    location: "Toledo, OH",
    dateRange: "August 2012 – May 2016",
    degree: "High School Diploma",
  },
] as const;
