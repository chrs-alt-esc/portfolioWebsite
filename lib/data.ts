import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Full Stack Developer",
        company: "Oracle",
        location: "Remote, US",
        description: "",
        icon: "",
        startDate: "July 2023",
        endDate: "March 2024",
    },
    {
        title: "Backend Developer",
        company: "IBM",
        location: "Rochester, MN, US",
        description: "",
        icon: "",
        startDate: "June 2021",
        endDate: "June 2023",
    },
    {
        title: "Test Engineer Intern",
        company: "Honeywell",
        location: "Lincolnshire, IL, US",
        description: "",
        icon: "",
        startDate: "June 2020",
        endDate: "August 2020",
    },
    {
        title: "Programming Intern",
        company: "PRA Health Sciences",
        location: "Deerfield, IL, US",
        description: "",
        icon: "",
        startDate: "June 2019",
        endDate: "August 2019",
    },
] as const;

export const projectsData = [
    {
        title: "Portfolio website",
        description: "Made this website that you are on right now :)",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        imageUrl: corpcommentImg,
    },
    {
        title: "Github Gists clone",
        description: "Made a website that works very similar to Github Gists using Elixir and the Phoenix Framework.",
        tags: ["Elixir", "Phoenix", "JavaScript", "Tailwind CSS", "PostgreSQL", "Docker"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Platform Visualization Tool",
        description: "Refactored an internal visualization tool for complex IBM systems and all their hardware and I/O devices.",
        tags: ["Python", "tkinter", "JSON", "CSV"],
        imageUrl: wordanalyticsImg,
    },
    {
        title: "MIPS Multi-cycle CPU",
        description: "Coded a multi-cycle MIPS CPU from scratch in SystemVerilog with 100% instruction accuracy.",
        tags: ["SystemVerilog", "Verilog", "MIPs", "Computer architecture", "Finite-state machine"],
        imageUrl: corpcommentImg,
    },
    {
        title: "CPU fault simulator",
        description: "Coded a CPU fault simulator from scratch in Python with 100% accuracy.",
        tags: ["Python"],
        imageUrl: rmtdevImg,
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
    "SDLC"
] as const;