// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/akash.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/Restaurant Billing System pic.png";
import projectImage2 from "./assets/projects/videochat.jpg";
import projectImage3 from "./assets/projects/AI Mental Health Companion pic.webp";
// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Katikam Akash Goud",
  tagline: "",
  img: profile, // Replace 'profile' with your image import if you have one
  about: `I'm Katikam Akash Goud, a Computer Science undergrad at Anurag University. I'm passionate about building intelligent applications that solve real-world problems. From leading an AI chatbot project in a national-level hackathon to building systems like a video chat app and restaurant billing platform, I thrive at the intersection of innovation and impact. I'm also a cybersecurity enthusiast and have facilitated hands-on workshops on secure communication.`,
  resume: "https://drive.google.com/file/d/1C50O--II5bUgyzImqLRwziBQ54APs2hM/view?usp=drive_link", // Replace with your actual resume link
};


// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/katikamakash/",
  github: "https://github.com/Katikamakashgoud",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Team Lead – AI Mental Health Bot",
    Company: "Anurag University – Techxcelerate Hackathon",
    Location: "Hyderabad",
    Type: "Hackathon Project",
    Duration: "2024",
    Description: `Led a 4-member team to build an AI chatbot for mental health support using NLP and Gemini API. Finalist among 50+ teams, integrated the bot into a college-wide portal.`,
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Technology in Computer Science and Engineering",
    Company: "Anurag University",
    Location: "Hyderabad, Telangana",
    Type: "Full Time",
    Duration: "Sept 2022 – 2026",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Restaurant Billing System",
    image: projectImage1, // Upload your image if needed
    description: `Engineered a billing system for restaurant operations managing over 100 daily transactions. Reduced processing time by 40% and integrated role-based access control for enhanced security.`,
    techstack: "HTML, CSS, JavaScript, Git",
  },
  {
    title: "Video Chat App",
    image: projectImage2, // Upload your image if needed
    description: `Implemented a real-time video chat app, optimized for 85% reliability and reduced client implementation time by 50% with WebRTC and Socket.IO.`,
    techstack: "HTML, CSS, JavaScript, WebRTC, Socket.IO",
  },
  {
    title: "AI Mental Health Companion",
    image: projectImage3, // Upload your image if needed
    description: `Built an AI-powered mental health companion using the Gemini API for emotional support and smart treatment suggestions.`,
    techstack: "MERN Stack, Gemini API",
    githubLink: "https://github.com/Katikamakashgoud/Techxcelerate~", // Add your GitHub link here
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "katikamakash10@gmail.com",
  phone: "+91 9966581919",
};
