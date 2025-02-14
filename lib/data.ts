import cShellImg from "@/public/img/c_shell.png";
import mipsImg from "@/public/img/mips_vert.png";
import faultEscapeSimImg from "@/public/img/faultEscapeMISR.png";
import portWebImg from "@/public/img/portfolio-website.jpeg";
import ibmGreenScreenImg from "@/public/img/ibmGreenScreen.png";
import logoIBM from "@/public/img/ibm_logo.png";
import logoOracle from "@/public/img/oracle_logo.png";
import logoHoneywell from "@/public/img/honeywell_logo.png";
import logoPRA from "@/public/img/pra_logo.png";
import logoUChicago from "@/public/img/uchicago_logo_w.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Engineer",
    company: "University of Chicago @ Argonne National Laboratory",
    location: "Lemont, IL, US",
    description: [
      "Currently developing a modernized knowledge-base to aid vaccine research and development.",
      "Integrating modern front-end technologies with AI to enhance user experience.",
      "Many exciting projects are in the works!",
    ],
    logo: logoUChicago,
    date: "December 2024 - Now",
  },
  {
    title: "Full Stack Developer",
    company: "Oracle",
    location: "Chicago, IL, US",
    description: [
      "Developed the messaging microservice for our health portal utilizing Ruby on Rails, React JS, and MySQL.",
      "Designed new REST API endpoints, significantly enhancing user experience and reducing errors by over 20%.",
      "Coordinated across 6+ teams to debug issues leveraging Splunk logs and New Relic metrics analysis.",
      "Performed stress tests to diagnose and optimize sluggish API endpoints, resulting in 50% faster response times.",
    ],
    logo: logoOracle,
    date: "July 2023 - March 2024",
  },
  {
    title: "Backend Developer",
    company: "IBM",
    location: "Rochester, MN, US",
    description: [
      "Built new public APIs for my clustering component in C++ and published official documentation for the APIs.",
      "Administered 100+ of our teams Ansible, IBM i, and VIOS test systems via vulnerability patching scripts.",
      "Collaborated with support teams to debug customer issues and shipped over 15 specialized fixes for our customers.",
      "Utilized object-oriented Python test framework to automate unit and regression tests, reducing test time over 50%.",
    ],
    logo: logoIBM,
    date: "June 2021 - June 2023",
  },
  {
    title: "Test Engineer Intern",
    company: "Honeywell",
    location: "Lincolnshire, IL, US",
    description: [
      "Created and optimized an internal beta testing application using object-oriented principles in C#.",
      "Reduced average product testing time about 33% by automating manual tasks with CSV files and Arduino.",
      "Collaborated with global teams to deploy my automated testing device and software, resulting in substantial improvements to their testing infrastructure, 33% faster testing times, and 10% test accuracy improvement.",
    ],
    logo: logoHoneywell,
    date: "June 2020 - August 2020",
  },
  {
    title: "Programming Intern",
    company: "PRA Health Sciences",
    location: "Deerfield, IL, US",
    description: [
      "Parsed and formatted client clinical trial data using macros to meet FDA CDISC terminology standard for analysis.",
      "Generated standardized clinical reports using SQL queries to extract data from SAS datasets of clinical trials.",
    ],
    logo: logoPRA,
    date: "June 2019 - August 2019",
  },
];

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "Created this website that you are browsing right now, thanks for visiting!",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Framer Motion",
    ],
    imageUrl: portWebImg,
    link: "https://github.com/chrs-alt-esc/portfolioWebsite",
  },
  // {
  //   title: "Github Gists Clone",
  //   description: "Made a website that works very similar to Github Gists using Elixir and the Phoenix Framework.",
  //   tags: ["Elixir", "Phoenix", "JavaScript", "Tailwind CSS", "PostgreSQL", "Docker"],
  //   imageUrl: rmtdevImg,
  //   link: "https://github.com/chrs-alt-esc/learning-elixir/tree/main/elixir_gist"
  // },
  {
    title: "Platform Visualization Tool",
    description:
      "Refactored an internal visualization tool for complex IBM systems and all their hardware and I/O devices.",
    tags: ["Python", "tkinter", "JSON", "CSV"],
    imageUrl: ibmGreenScreenImg,
    link: "",
  },
  {
    title: "Fault Escape Simulator",
    description:
      "Coded a CPU fault simulator from scratch in Python with 100% accuracy.",
    tags: ["Python", "CLI", "CSV", "Terminal"],
    imageUrl: faultEscapeSimImg,
    link: "https://github.com/chrs-alt-esc/FaultEscapeSimMISR/tree/main",
  },
  {
    title: "MIPS Multi-Cycle CPU",
    description:
      "Coded a multi-cycle MIPS CPU from scratch in SystemVerilog with 100% instruction accuracy.",
    tags: ["SystemVerilog", "cache", "MIPS", "Computer architecture"],
    imageUrl: mipsImg,
    link: "https://github.com/chrs-alt-esc/MultiCycleCpuMips",
  },
  {
    title: "CShell",
    description:
      "Coded a UNIX-style shell from scratch in C using the posix_spawn interface instead of the outdated fork interface.",
    tags: ["C", "posix_spawn", "shell", "unix"],
    imageUrl: cShellImg,
    link: "https://github.com/chrs-alt-esc/CShell",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "DB2",
  "Python",
  "Pandas",
  "Framer Motion",
  "C/C++",
  "C#",
  "Java",
  "Ruby",
  "Ruby on Rails",
  "Elixir",
  "Phoenix",
  "MVC",
  "REST APIs",
  "API",
  "Docker",
  "Kubernetes",
  "Splunk",
  "Jenkins",
  "Linux",
  "Agile",
  "Jira",
  "CI/CD",
  "Saas",
  "SDLC",
] as const;
