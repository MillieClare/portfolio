import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  SB,
  Medallia,
  MailOnline,
  Zopa,
  Birkbeck,
  GraphQL,
  amplitude,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React",
    icon: web,
  },
  {
    title: "React Native",
    icon: mobile,
  },
  {
    title: "TypeScript",
    icon: backend,
  },
  {
    title: "Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "GraphQL",
    icon: GraphQL,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "amplitude",
    icon: amplitude,
  },
];

const experiences = [
  {
    title: "Music Curriculum Leader",
    company_name: "Sarah Bonnell School",
    icon: SB,
    iconBg: "#383E56",
    date: "September 2015 - August 2018",
    points: [
      "Led a diverse team, mentoring staff in professional growth, showcasing my ability to inspire and guide teams towards excellence.",
      "Orchestrated sell-out, cross-curricular events by leading the Expressive Arts team, demonstrating skills in event planning, coordination, and execution.",
      "Played a key role in the Newham Community Opera, a collaborative project with borough-wide impact, highlighting my proficiency in stakeholder engagement and project innovation.",
    ],
  },
  {
    title: "Techinical Support Assisstant",
    company_name: "Decibel",
    icon: Medallia,
    iconBg: "#fff",
    date: "November 2018 - April 2019",
    points: [
      "Worked directly with high-profile clients, including British Airways and LV=, to seamlessly integrate Decibel’s Digital Experience Solution into their websites. This collaboration resulted in improved digital analytics capabilities and enriched user experience insights for the clients.",
      "Acted as the initial point of contact for client support, efficiently performing triage on incoming issues. My role involved promptly resolving concerns or escalating them to the appropriate teams, ensuring client satisfaction and continuity of service.",
      "Provided expert technical support to clients, focusing on troubleshooting, debugging, and optimizing their integration of our solutions. I played a pivotal role in enhancing clients' understanding of user journeys, leading to more informed decision-making and improved digital experiences.",
    ],
  },
  {
    title: "Junior Developer in Ads",
    company_name: "Mail Online",
    icon: MailOnline,
    iconBg: "#004db3",
    date: "April 2019 - September 2020",
    points: [
      "Successfully delivered multiple projects on schedule, collaborating effectively within a dynamic team comprising three senior and one junior developer within the Ads domain, including the front page of Mail Online.",
      "Spearheaded the refactoring and migration of the existing codebase to more modern implementations, specifically around unit testing, significantly reducing technical debt and enhancing system performance.",
      "Engineered a specialized application enabling developers to utilize PQL for querying a database of Google Ad Creatives. This tool was instrumental in identifying unused functions within our codebase and optimizing resource utilization.",
    ],
  },
  {
    title: "MSc in Computer Science",
    company_name: "Birkbeck University",
    icon: Birkbeck,
    iconBg: "#70263d",
    date: "October 2020 - September 2022",
    points: [
      "Wanting to build on my technical skills, I undertook a masters course in 2020. I worked with Python and Java to strengthen my foundational skills, using them to develop my understanding of algorithms, data structures and software design principles.",
      "Optional modules I completed included web development, computer systems and SQL.",
      "I completed my MSc over two years while working full-time in my current role. I graduated with a Distinction in 2023.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Zopa",
    icon: Zopa,
    iconBg: "#fff",
    date: "December 2020 - Present",
    points: [
      "Supported the Peer-to-Peer Next Gen project launch within three months, leveraging new skills in GraphQL and TypeScript, using React 18.",
      "Developed and launched Smart Saver, Zopa’s first mobile-only savings product, through self-taught React Native skills. The product significantly contributed to savers earning, on average, 4.5x more interest compared to traditional high street banks.",
      "Played a key role in expanding Zopa's Savings product line, contributing to the company reaching £3 billion in deposits in 2023.",
      "Efficiently translated high-fidelity designs from Sketch and Figma into functional app features, enhancing user interface and experience and reducing customer service contact to less than 2%.",
      "Collaborated with engineers from other products to manage mobile platform technical debt, developing tools such as the Zopa Assistant that improved operational efficiency and quality of life for non-technical colleagues.",
      "Effectively communicated project progress through presentations and demos to a broad audience, including technical and non-technical stakeholders.",
      "Authored and maintained robust test suites using Jest and Detox and organised exploratory testing sessions, adopting a proactive approach to ensure the highest quality of code.",
      "Proactively identified and addressed inefficiencies in our development processes. Implementing strategic solutions that guaranteed timely code integration for Savings projects, thereby eliminating delays in releases.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
