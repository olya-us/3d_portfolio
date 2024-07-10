import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    ust,
    ust_png,
    engineer,
    rent,
    aet,
    plant,
    gti,
    ukfh,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
];
  
const experiences = [
    {
      title: "Web Developer",
      company_name: "Ust",
      icon: ust,
      iconBg: "#E6DEDD",
      date: "August 2019 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
];
  
const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Olya proved me wrong.",
      name: "Julia",
      image: "https://randomuser.me/api/portraits/women/76.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Olya does.",
      name: "Alex",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      testimonial:
        "After Olya optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
    },
];
  
const projects = [
    {
      name: "GTI",
      description:
        "The site is responsible for the formation and promotion of a portfolio of manufacturing and transport companies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
      ],
      image: gti,
      source_code_link: "https://gti.holdings/",
    },
    {
      name: "UKFH",
      description:
        "Creation of a website for growing and producing natural organic farm products and fertilizers: vegetables, fruits, berries, fish, meat, semi-finished products.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "vite",
          color: "pink-text-gradient",
        },
      ],
      image: ukfh,
      source_code_link: "https://ukfh.by/",
    },
    {
      name: "UST",
      description:
        "Responsive main site of the engineering company engaged in the development, design and construction of transport systems.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "gulp",
          color: "pink-text-gradient",
        },
      ],
      image: ust_png,
      source_code_link: "https://ust.inc/",
    },
    {
      name: "Unitsky Engineer",
      description:
        "Personal site for engineer of string transport systems. The solutions incorporates in the basis of string systems have a global transformative potential aimed at creating the foundation for the safe and harmonious development of civilization.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "gulp",
          color: "pink-text-gradient",
        },
      ],
      image: engineer,
      source_code_link: "https://unitsky.engineer/",
    },
    {
      name: "7arent",
      description:
        "Application offers office space for rent, where you can see photos of the premises themselves and choose the right one.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
      ],
      image: rent,
      source_code_link: "https://7arent.by/",
    },
    {
      name: "AET",
      description:
        "Site for uSpace (is a global, ecological space project on saving Humanity).",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "gulp",
          color: "pink-text-gradient",
        },
      ],
      image: aet,
      source_code_link: "http://aet.space/",
    },
    {
      name: "SW Plant",
      description:
        "The site offers services for the provision of types of work from 3D prototyping to the manufacture of industrial batches of parts and assemblies according to drawings.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "gulp",
          color: "pink-text-gradient",
        },
      ],
      image: plant,
      source_code_link: "https://sw-plant.by/",
    },
];
  
export { services, technologies, experiences, testimonials, projects };