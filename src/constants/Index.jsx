import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaGitAlt,
  FaHtml5,
  FaCss3,
  FaUnity,
} from "react-icons/fa6";

import projectImage1 from "../assets/projectImage1.png";
import projectImage2 from "../assets/projectImage2.png";
import projectImage3 from "../assets/projectImage3.png";
import projectImage4 from "../assets/projectImage4.png";
//import projectImage5 from "../assets/project5.jpeg";
//import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress,  SiTailwindcss} from "react-icons/si";
import { FaJsSquare, FaNodeJs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const NAVIGATION_LINKS = [
  { label: "About Me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Eris Peña",
  greet: "Hello there! 👋🏻",
  description:
    "I’m an enthusiastic Full Stack with a strong interest in building visually appealing, functional, and user-friendly websites. I enjoy turning ideas into interactive web experiences using web technologies like HTML, CSS, JavaScript, React, and Node.js",
};

export const PROJECTS = [
  {
    id: 1,
    name: "CORE2-JJM-Manufacturing Management System",
    description:
      "A capstone project system that helps manufacturers manage orders, track inventory, and schedule production so everything runs smoothly and on time.",
    image: projectImage1,
    githubLink: "https://github.com/Eris-Kushikiari/CORE2-JJM-MANUFACTURING",
    demoLink: "https://core-2-jjm-manufacturing-rgjr.vercel.app",
    techStack: ["React", "TailwindCSS", "Node.js", "Javascript", "MongoDB", "Express.js"],
  },
  {
    id: 2,
    name: "HR2-Nodado Hospital",
    description:
      "A system that manages employee training programs in hospitals, tracking staff skills, training schedules, and progress to ensure everyone stays qualified and updated.",
    image: projectImage2,
    githubLink: "https://github.com/Eris-Kushikiari/HR2-NODADO-HOSPITAL",
    techStack: ["React", "TailwindCSS", "Node.js", "Javascript", "MongoDB", "Express.js"],
  },
  {
    id: 3,
    name: "Shot Jump",
    description:
      "A mobile endless runner game i created Shot Jump as a twist on the classic Flappy Bird concept and added a shooting mechanic where when you tap it will shoot and jump creating the illusion of shot recoil, also maintaining the minimalistic design and fast-paced challenge that makes these game fun.",
    image: projectImage3,
    githubLink: "https://github.com/Eris-Kushikiari/Shot-Jump",
    demoLink: "https://erishally.itch.io/shot-jump",
    techStack: ["Unity", "C#", "Blender"],
  },
  {
    id: 3,
    name: "JJM Landing Page",
    description:
      "The JJM Landing Page is a simple one-page website I built to highlight the brand and its services. It’s clean, easy to navigate, and designed to quickly give visitors an overview of what JJM is all about.",
    image: projectImage4,
    githubLink: "https://github.com/Eris-Kushikiari/CORE2-JJM-MANUFACTURING-LANDINGPAGE",
    demoLink: "https://core-2-jjm-manufacturing-landingpag.vercel.app",
    techStack: ["React", "TailwindCSS"],
  },
];



export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: <FaHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
  },
  {
    icon: <FaJsSquare className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Javascript",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
  },
  {
    icon: <FaGitAlt className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Git",
  },
  {
    icon: <FaGithub className="text-4xl  lg:text-5xl" />,
    name: "Github",
  },
  {
    icon: <FaCss3 className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CSS",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-teal-400 lg:text-5xl" />,
    name: "Tailwind css",
  },
  {
    icon: <VscVscode className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "VS Code",
  },
  {
    icon: <SiExpress  className="text-4xl text-gray-300 lg:text-5xl" />,
    name: "Express.js",
  },
  {
    icon: <FaUnity  className="text-4xl text-gray-300 lg:text-5xl" />,
    name: "Unity",
  },
];

{/*export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];*/}

export const ABOUT_ME = {
  role: "Passionate Developer",
  description:
    "I’m a Full Stack Developer passionate about building clean, user-friendly web app. I enjoy solving real-world problems with code and continuously learning new technologies. Currently focused on the PERN stack and exploring Unity for game development.",
};

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Bestlink College of the Philippines",
    duration: "2021 - 2025",
    description:
      "Focused on web development, programming languages, and database management. where I practice several web applications using HTML, CSS, JavaScript. Completed a Capstone project on developing an Manufacturing platform using MERN stack.",
  },
  {
    degree: "Information Communication Technology",
    institution: "Bestlink College of the Philippines",
    duration: "2019 - June 2021",
    description:
      "I studied Information Communication Technology, where I learned the basics of computers, the internet, and how technology is used to share information. I also learned about websites, simple programming, and how communication works through technology.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/eris.pena.90",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  //{
 //   href: "https://discord.com/accessibility",
 //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
//  },
  {
    href: "https://github.com/Eris-Kushikiari",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  //{
   // href: "https://www.linkedin.com/",
  //  icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  //},
];