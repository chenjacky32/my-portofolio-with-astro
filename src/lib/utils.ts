import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export interface MyServiceCard {
  icon:
  | "globe"
  | "terminal"
  | "database"
  | "code"
  | "github"
  | "external-link"
  | "mail"
  | "map-pin"
  | "send";
  title: string;
  description: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const myServices: Array<MyServiceCard> = [
  {
    icon: "globe",
    title: "Frontend Development",
    description: 'Building modern web apps with <strong class="text-foreground">Astro</strong>, <strong class="text-foreground">React</strong>, <strong class="text-foreground">Next.js</strong>, <strong class="text-foreground">Tanstack</strong> and <strong class="text-foreground">Tailwind CSS</strong>.'
  },
  {
    icon: "terminal",
    title: "Backend APIs",
    description: 'Developing robust APIs using <strong class="text-foreground">Express.js</strong>, <strong class="text-foreground">Hapi.js</strong>, <strong class="text-foreground">Laravel</strong>, <strong class="text-foreground">Supabase</strong> and <strong class="text-foreground">Prisma</strong>.'
  },
  {
    icon: "database",
    title: "Database Architecture",
    description: 'Designing optimized schemas in <strong class="text-foreground">PostgreSQL</strong>, <strong class="text-foreground">MongoDB</strong> and <strong class="text-foreground">MySQL</strong>.'
  },
  {
    icon: "code",
    title: "Clean Code & Architecture",
    description: 'Writing scalable, <strong class="text-foreground">TypeScript</strong> driven applications.'
  }
];

export const links = [
  { href: "/", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/project", label: "Projects" },
  // { href: "/contact", label: "Contact" },
];

export const myEducation = [
  {
    title: "Institut Bisnis & Teknologi Pelita Indonesia",
    subTitle: "Bachelor of Information Systems",
    period: "July 2019 - May 2023",
    location: "Pekanbaru, Riau, Indonesia",
    description: "Develop information systems and create data-driven solutions. Focused on programming language, database management, software engineering, and hardware engineering."
  },
  {
    title: "Dicoding Bootcamp React and Backend Cohort - Distinction Graduate",
    subTitle: "Dicoding Indonesia",
    period: "Feb 2024 - Jun 2025",
    location: "Bandung, Jawa Barat, Indonesia - (Remote)",
    description: "Completed an intensive Full-Stack Web Development program, gaining end-to-end practical experience in engineering modern, scalable web applications. Developed and deployed multiple full-stack projects utilizing React.js, Redux, Node.js, Hapi.js, and Supabase, with a strong focus on clean architecture, RESTful API design, robust state management, and testable code standards. Successfully graduated with high distinction across all coursework, earned certifications in both React and Backend Development, and was awarded Best Capstone Project for demonstrating technical excellence, agile remote collaboration, and problem-solving capabilities."
  }
]

export const myExperience = [
  {
    title:"Management Trainee - Internal Auditor",
    subTitle: "PT. Capella Dinamik Nusantara",
    period: "Oct 2025 - Jun 2026",
    location: "Medan, Sumatera Utara, Indonesia - (On-site)",
    bulletPoints: [
      "Conducted operational and administrative audits across multiple branches to evaluate compliance with SOPs and internal controls.",
      "Analyzed audit findings and prepared comprehensive reports for management review.",
      "Formulated Problem Identification and Corrective Action (PICA) recommendations to resolve operational discrepancies.",
      "Monitored and tracked the execution of corrective actions to ensure effective implementation.",
      "Presented audit results and actionable insights to management to support continuous business process improvement.",
      ]
  },
  {
    title: "Fullstack Developer",
    subTitle: "PT. Barcode Integrasi Nusantara",
    period: "Jan 2025 - Dec 2025",
    location: "Medan, Sumatera Utara, Indonesia - (Remote)",
    bulletPoints: [
      " Translate diverse client business requirements into efficient and scalable technology solutions.",
      "Develop and maintain web applications for multiple clients using Laravel, React.js, Inertia.js, TypeScript, and MySQL.",
      "Customize application functionality to align with client business needs and ensure scalability.",
      "Build and manage RESTful APIs to support seamless front-end and back-end integration.",
      "Deploy applications through Virtual Private Server (VPS) configuration and implement containerization with Docker.",
      "Utilize cloud computing services (DigitalOcean) to enhance application performance and scalability.",
      "Perform ongoing system maintenance to ensure optimal server performance under high user loads.",
    ],
  },
  {
    title: "Backend Developer",
    subTitle: "Explore Bali Website",
    period: "Apr 2024 - Jun 2024",
    location: "Bandung, Jawa Barat, Indonesia - (Remote)",
    bulletPoints: [
      "Designed and implemented a scalable API using Node.js with the Hapi framework to support seamless integration with client-side applications, ensuring high performance and low latency.",
      "Developed and optimized a robust database schema utilizing Supabase and Prisma ORM to efficiently store and manage user-generated data, prioritizing data integrity and retrieval speed.",
      "Deployed the API to cloud services or virtual machines on AWS EC2, ensuring high availability, scalability, and seamless integration with the front-end.",
      "Ensured API stability and performance by conducting regular tests and monitoring using tools such as Postman",
      "Created comprehensive API documentation using Docsify, providing clear usage guidelines and detailed endpoints to facilitate smooth implementation and collaboration for Front-end developers.",
    ],
  },
];

export const myProject = [
  {
    title: "Money Tracker App - Fullstack",
    description:
      "A responsive web application designed to help users efficiently record, manage, and monitor their daily income and expenses. Built with Laravel 11 and MySQL on the backend, styled with Tailwind CSS featuring seamless Light/Dark mode toggles, and powered by Alpine.js for lightweight frontend reactivity without the overhead of heavy JavaScript frameworks.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/chenjacky32/money-tracker-app.git",
    github: "https://github.com/chenjacky32/money-tracker-app.git",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js"],
  },
  {
    title: "Simple Support Ticket System - Frontend",
    description:
      "A modern, responsive support ticket interface built with Next.js, TypeScript, and Tailwind CSS. Features an accessible design system powered by shadcn/ui, efficient server-state management with TanStack Query, and robust ticket tracking and data grid filtering using TanStack Table.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/chenjacky32/Simple-Support-Ticket-System-FE",
    github: "https://github.com/chenjacky32/Simple-Support-Ticket-System-FE",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "TanStack Query", "TanStack Table"],
  },
  {
    title: "Simple Support Ticket System - Backend API",
    description:
      "A stateless, high-performance RESTful API built with Laravel and MySQL for managing customer support operations. Implements secure JWT authentication and an enterprise-grade architecture that cleanly decouples business logic using Actions, DTOs (Payloads), and Invokable Controllers.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/chenjacky32/Simple-Support-Ticket-System-BE",
    github: "https://github.com/chenjacky32/Simple-Support-Ticket-System-BE",
    tags: ["PHP", "Laravel", "MySQL", "JWT", "RESTful API"],
  },
  {
    title: "Booking Padel Court App (Blackpadel.id) - Frontend",
    description:
      "An online padel court booking and commerce web app built for blackpadel.id where I served as the Frontend Developer in a 2-person team. Designed with a mobile-first approach using React.js, TypeScript, Tailwind CSS, TanStack Query, and Axios, the platform features phone-based auth, court reservation by type/schedule, add-on rentals (rackets, ballboys, coaches), an in-app product store, booking history, and seamless payment integration powered by Midtrans Payment Gateway.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    link: "https://blackpadel.id",
    github: "https://github.com/chenjacky32/Simple-Support-Ticket-System-BE",
    tags: ["React.js", "Tanstack Query", "Shadcn UI", "Tailwind CSS", "TypeScript", "Midtrans Payment Gateway"],
  },
  {
    title: "Booking Padel Court App For Admin (Blackpadel.id) - Frontend",
    description:
        "A dual-module court booking and admin management web application for blackpadel.id where I served as the Frontend Developer in a 2-person team. Built with React, TypeScript, TanStack Query, Zustand, and Zod, the platform handles customer court reservations, add-on rentals (rackets, coaches, ballboys), merchandise purchases, and secure Midtrans Payment Gateway checkout. Additionally, it provides a comprehensive admin dashboard for managing court schedules, product stock inventory, and add-on services with robust schema validation and predictable state management.",
      image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    link: "https://blackpadel.id",
    github: "https://github.com/chenjacky32/Simple-Support-Ticket-System-BE",
    tags: ["React.js", "Tanstack Query", "Zustand", "Zod", "Shadcn UI", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Apartment Billing System - Fullstack",
    description:
    "A full-stack apartment billing management system integrated with BRI-API for automated Virtual Account payments. The platform streamlines monthly billing for electricity, water, and property maintenance (IPL) fees. Built with a dual-stack architecture, it features an admin panel developed with Laravel, Inertia.js, and MySQL for billing calculations and property administration, alongside a modern tenant portal built with Node.js, React.js, and MySQL enabling residents to check invoices and complete frictionless payments.",
    image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    link: "https://blackpadel.id",
    github: "https://github.com/chenjacky32/Simple-Support-Ticket-System-BE",
    tags: ["React.js", "Inertia.js","Laravel", "MySQL", "Tailwind CSS", "BRI-API"],
  }
];

export const mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vue",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "Tailwind",
  "Shadcn UI",
  "Git",
  "GitHub",
  "Postman",
  "Docker",
  "AWS",
  "DigitalOcean",
  "Netlify",
  "Vercel",
  "Supabase",
  "Prisma",
  "Next.js",
  "Nuxt.js",
  "Inertia.js",
  "Laravel",
]

export const myToolsAndSoftwares = [
  "Git",
  "GitHub",
  "Postman",
  "Docker",
  "AWS",
  "DigitalOcean",
  "Netlify",
  "Vercel",
  "Supabase",
  "Prisma",
  "Next.js",
  "Nuxt.js",
  "Inertia.js",
  "Laravel",
];

export const myContactInfo = [
  {
    icon: "mail" as const,
    title: "Email",
    value: "chenjacky@example.com",
    href: "mailto:chenjacky@example.com",
  },
  {
    icon: "map-pin" as const,
    title: "Location",
    value: "Medan, Indonesia",
  },
];

export const socialLinks = [
  {
    icon: "github-fill" as const,
    href: "https://github.com/chenjacky32",
    ariaLabel: "GitHub Profile",
  },
  {
    icon: "linkedin-fill" as const,
    href: "https://www.linkedin.com/in/jacky-chen-1b55422a1",
    ariaLabel: "LinkedIn Profile",
  },
]