import { Github, Twitter, Figma } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoSonarQube from "/public/images/logos/logo-sonarqube.svg";

import LogoUpwork from "/public/images/logos/logo-upwork.svg";
import LogoGreenApex from "/public/images/logos/logo-greenapex.svg";
import LogoGreenApexLight from "/public/images/logos/logo-greenapex-light.svg";
import LogoDepthin from "/public/images/logos/depthin-solution-fulllogo.png";
import LogoProdigybuild from "/public/images/logos/prodigybuild-light.png";
import LogoFameUXDark from "/public/images/logos/fame-ux-dark-logo.png";
import LogoFameUXLight from "/public/images/logos/fame-ux-light-logo.png";
import LogoDayDreamSoftLight from "/public/images/logos/daydreamsoft-light-logo.png";
import LogoDotnpixel from "/public/images/logos/logo-dotnpixel.svg";
import LogoDotnpixelLight from "/public/images/logos/logo-dotnpixel-light.svg";

import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectPepehousing from "/public/images/project-pepehousing.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";
import WebProgramming from "/public/images/web-programming.png";
import MobileDevelopment from "/public/images/mobile-development.png";
import Deployment from "/public/images/deployment.png";
import TechnicalSupport from "/public/images/technical-support.png";
import Consultation from "/public/images/consultation.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/rahullunagariya",
  GITHUB_REPO: "https://github.com/rahullunagariya/rahullunagariya.dev",
  TWITTER: "https://twitter.com/rahullunagariya",
  FIGMA: "https://www.figma.com/@rahullunagariya",
  FIGMA_FILE: "", // https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/rahullunagariya159",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/",
  },
  {
    icon: Figma,
    url: "https://www.figma.com/@rahul",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  // {
  //   label: "Nest.js",
  //   logo: LogoNest,
  //   url: "https://nestjs.com/",
  // },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "SonarQube",
    logo: LogoSonarQube,
    darkModeLogo: LogoSonarQube,
    url: "https://docs.sonarsource.com/sonarqube/latest/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  // {
  //   logo: LogoUpwork,
  //   logoAlt: "Upwork logo",
  //   position: "Independent Freelancer",
  //   startDate: new Date(2022, 11),
  //   currentlyWorkHere: true,
  //   summary: [
  //     "Worked for various clients like Joe Desouza, Arash Karimi, Jerry Virgo, Photon Technologies, Empyrean Lab.",
  //     "Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, SonarQube and others.",
  //   ],
  // },
  {
    logo: LogoProdigybuild,
    logoAlt: "Prodigybuild",
    position: "Senior frontend developer",
    // startDate: new Date(2024, 3),
    currentlyWorkHere: true,
    summary: [
      "As we delve deeper into the realm of artificial intelligence and project management, it’s worth highlighting specific tools that exemplify this integration. Prodigybuild is one such tool that leverages AI to enhance Agile Project Management. It stands out as a platform that not only automates routine tasks but also provides intelligent insights into project health, resource allocation, and team performance. By integrating AI into its core functionalities, Prodigybuild helps teams stay agile, adapt to changes swiftly, and make data-driven decisions.",
      "Worked with variety of technology, including React, Redux, Antd, Typescript, AWS, Lambda, Chatgpt4 etc.",
    ],
  },
  {
    logo: LogoDepthin,
    darkModeLogo: LogoDepthin,
    logoAlt: "Depthin Solution logo",
    position: "Senior frontend developer",
    startDate: new Date(2020, 9),
    endDate: new Date(2022, 10),
    summary: [
      "Worked as a Web/Mobile application developer (React / ReactNative / Node).",
    ],
  },
  {
    logo: LogoDayDreamSoftLight,
    darkModeLogo: LogoDayDreamSoftLight,
    logoAlt: "DayDreamSoft LLP logo",
    position: "Frontend developer",
    startDate: new Date(2019, 11),
    endDate: new Date(2020, 8),
    summary: [
      "Acted as senior frontend developer in different projects.",
      "Brainstormed new ideas & gathered requirements for internal projects.",
      "Designed architecture of different projects (frontend).",
      "Worked on enterprise-level projects for a variety of clients.",
      "Handled sprint planning & task distribution.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Wingie",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://www.wingie.com",
    previewImage: ProjectWingie,
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Express.js",
      "PostgreSQL",
      "Styled Components",
      "Redux",
    ],
  },
  {
    name: "Fiskil",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://fiskil.com.au",
    previewImage: ProjectFiskil,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Cypress",
      "Storybook",
    ],
  },
  {
    name: "Pepehousing",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://pepehousing.com",
    previewImage: ProjectPepehousing,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Joe Desouza",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Highly skilled React JS developer. Proficient in multiple languages, frameworks, and technologies. Excellent communication and exceptional quality.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarDummy,
    title: "Founder - Empyrean Lab",
    testimonial:
      "Amazing to work with. Very easy to talk with regarding issues, very responsive, fluent in English, amazing work and quality. I will continue to hire him in the future.",
  },
  {
    personName: "Prashant R.",
    personAvatar: AvatarDummy,
    title: "Freelancer - Project manager at Photon Technologies",
    testimonial:
      "Rahul is very extremely smart and very knowledgeable programmer. Really loved his dedication.",
  },
  {
    personName: "Arash Kharami",
    personAvatar: AvatarDummy,
    title: "Founder",
    testimonial:
      "Rahul is skilled javascript, CSS, and HTML developer. I'll work with him.",
  },
  {
    personName: "Gopinath Muthukrishna",
    personAvatar: AvatarDummy,
    title: "Freelancer - soli systems",
    testimonial:
      "I'm satisfied with work done, its been 4 or more months and Iam getting consistent results. And also complete work.",
  },
  // {
  //   personName: "Shopmeister UG",
  //   personAvatar: AvatarDummy,
  //   title: "Freelancer",
  //   testimonial:
  //     "Rahul is very supportive and knowledgeable. He's very methodical and structured in his way of working. I would highly recommend him and likely have additional jobs for him in the future.",
  // },
];

export const SERVICES: TestimonialDetails[] = [
  {
    personName: "Web Development",
    personAvatar: WebProgramming,
    title: "",
    testimonial:
      "I bring websites to life, crafting user-friendly interfaces and interactive features. From e-commerce stores to informative landing pages, I build websites that look great and function flawlessly across all devices.",
  },
  {
    personName: "Mobile Development",
    personAvatar: MobileDevelopment,
    title: "",
    testimonial:
      "Let's create engaging mobile apps! I specialize in developing user-centric cross plateform apps for iOS and Android, focusing on intuitive design and seamless functionality to elevate your mobile presence.",
  },
  {
    personName: "Deployment",
    personAvatar: Deployment,
    title: "",
    testimonial:
      "I offer streamlined deployment services to ensure your application goes live seamlessly. From setting up hosting environments to configuring servers and deploying updates, I'll handle the technical details so you can focus on running your business.",
  },
  {
    personName: "Maintenance and Support",
    personAvatar: TechnicalSupport,
    title: "",
    testimonial:
      "Once your project is live, I'll continue to provide ongoing maintenance and support to ensure it remains running smoothly. Whether it's fixing bugs, adding new features, or optimizing performance, I'll be there to keep your application running at its best.",
  },
  {
    personName: "Consultation",
    personAvatar: Consultation,
    title: "",
    testimonial:
      "I offer consultation services to help you navigate the complexities of software development. Additionally, I can provide training sessions to your team to empower them with the skills needed to maintain and extend your application.",
  },
];
