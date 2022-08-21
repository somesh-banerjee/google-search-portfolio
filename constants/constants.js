import { AiOutlineSearch } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { calculateExperience } from "../helpers/getExperience";
import { GrMail } from "react-icons/gr";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";

export const accountDetails = {
  account: "Google Account",
  name: "Somesh Banerjee",
  gmail: "somesh0banerjee@gmail.com",
};

export const navBar = [
  {
    name: "About",
    path: "/",
    icon: AiOutlineSearch,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: BiPencil,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: BiPhoneCall,
  },
  {
    name: "Map",
    path: "/map",
    icon: MdOutlineLocationOn,
  },
];

export const info = {
  heading: "Somesh Banerjee: Web3 Developer",
  mobileHeading: "Somesh Banerjee",
  description:
    "Blockchain Developer with experince in EVM compatible smart contract developemnt and Auditing and connecting it with Web application",
  workExperience: "Work Experience",
  designation: "SDE Intern",
  company: "Squirrelverse.io",
  timePeriod: "11/2021 - Present",
  workProjects: [
    {
      title: "Metascreen :",
      description:
        "Developed Metascreen, India's first NFT as a movie ticket platform https://metascreen.squirrelverse.io/",
    },
  ],
};

export const sideBarInfo = {
  about:
    "A blockchain and infosec enthusiast. Currently full-time B. Tech student at IIIT Naya Raipur and Intern at Squirrelverse. Experienced in developing fullstack web3 dApps. ",

  contactDetails: [
    {
      title: "somesh0banerjee@gmail.com",
      href: "mailto:somesh0banerjee@gmail.com",
      icon: GrMail,
    },
    {
      title: "9876543210",
      href: "",
      icon: BsFillPhoneFill,
    },
    {
      title: "Linkedin Profile",
      href: "https://www.linkedin.com/in/somesh-banerjee/",
      icon: FaLinkedin,
    },
    {
      title: "Github Profile",
      href: "https://github.com/somesh-banerjee",
      icon: AiFillGithub,
    },
    {
      title: "Portfolio link",
      href: "https://somesh-banerjee.github.io",
      icon: BiLinkAlt,
    },
    {
      title: "Twitter Profile",
      href: "https://twitter.com/banerjee_somesh",
      icon: AiFillTwitterCircle,
    },
  ],
};

export const accordionData = [
  {
    question: "What skills does Somesh have?",
    answer: `Somesh is well-versed in dApp development in EVM chains like Ethereum and Polygon using Solidity, Hardhat for smart contract and ReactJs for frontend.`,
  },
  {
    question: "Where is Somesh currently working?",
    answer: `Somesh is currently a Software Developer at SquirrelVerse .`,
  },
  {
    question: "Is Somesh a Ethical Hacker?",
    answer: `Somesh is currently not an Ethical hacker, but he has knowledge of webapp and network pentesting. He has a global rank of 430 in HackTheBox Platform and Top 4% in TryHackMe as of July 2022.`,
  },
  {
    question: "Does Somesh have a life outside development?",
    answer: `Yes, Somesh is also into online gaming like Valorant, CSGO, GTA V, and a massive fan of h̶e̶n̶t̶a̶i̶  anime. His life revolves inside his room, but sometimes he leaves his room to disturb others. Somesh can also make EDIBLE food. But the best thing he can make is fun of you.`,
  },
  {
    question: "How much experience does Somesh have?",
    answer: `Somesh has ${calculateExperience()} of experience in software industry.`,
  },
];

export const projectVideos = [
  {
    heading: "Metaverse Market",
    platform: `Youtube`,
    author: `Somesh Banerjee`,
    image: `/assets/metamarket.png`,
    date: `16-Aug-2022`,
    link: `https://youtu.be/4Cdynk6PIhg`,
  },
];

export const relatedsearch = [
  {
    text: "Somesh's Skills",
    href: "/skills",
  },
  {
    text: "Somesh's Projects",
    href: "/projects",
  },
  {
    text: "Contact Somesh",
    href: "/contact",
  },
  {
    text: "Somesh's Location",
    href: "/map",
  },
];

export const footerData = {
  name: "",
  year: new Date().getFullYear(),
  darkTheme: "Dark theme: ",
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/somesh-banerjee/",
      icon: FaLinkedin,
    },
    {
      href: "https://somesh-banerjee.github.io",
      icon: BiLinkAlt,
    },
    {
      href: "https://github.com/somesh-banerjee",
      icon: FaGithub,
    },
    {
      href: "https://twitter.com/banerjee_somesh",
      icon: FaTwitterSquare,
    },
  ],
};

export const skillsData = {
  info: "Somesh loves to talk on the latest technologies in the field of blockchain, metaverse and Infosec",
  skills: [
    {
      title: "Languages",
      description:
      "C++, Python, Javascript, and Solidity",
    },
    {
      title: "Blockchain Skills",
      description:
        "Ethereum, Polygon, Solidity, Hardhat, Ganache, Web3 Js, Ethers Js, IPFS",
    },
    {
      title: "Fullstack Skills",
      description:
      "JavaScript, React Js, Next Js, Node Js, Express Js, Mongo DB, Postman.",
    },
    {
      title: "Other Skills",
      description:
      "Git, Terminal, Docker, Burp",
    },
  ],
  skillsIcons: [
    {
      title: "C++",
      href: "",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "Python",
      href: "",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "Solidity",
      href: "",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "Linux",
      href: "",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "Git",
      href: "https://git-scm.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      shadowColor: "#F34F29",
    },
    {
      title: "Docker",
      href: "",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "React Js",
      href: "https://reactjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      shadowColor: "#F0DB4F",
    },
    {
      title: "Next Js",
      href: "https://nextjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Node Js",
      href: "https://nodejs.org",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      shadowColor: "#83CD29",
    },
    {
      title: "Express Js",
      href: "https://expressjs.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      title: "Mongo Db",
      href: "https://www.mongodb.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      shadowColor: "#75BB69",
    },
    {
      title: "Postman",
      href: "https://www.postman.com/",
      src: "/assets/postman.png",
      shadowColor: "#f97316",
    },
  ],
};

export const projectsData = [
  {
    title: "Metaverse Market",
    image: "/assets/metamarket.png",
    description: [
      "Built a NFT market place in which one can list any digital file, and buy from other creators. Deployed on Polygon Mumbai Testnet.",
    ],
    videoDemo:
      "https://youtu.be/4Cdynk6PIhg",
    liveDemo: "https://metaverse-market.vercel.app/",
    sourceCode: "https://github.com/somesh-banerjee/Metaverse-Market",
  },
  {
    title: "Hospital Records storage using Ethereum Blockchain",
    image: "/assets/hosrec.png",
    description: [
      "A dApp for maintaining patient records of all patients by any hospital in a single space created using Blockchain and IPFS.",
    ],
    videoDemo:
      "",
    liveDemo: "https://hospital-records-blockchain.vercel.app/",
    sourceCode: "https://github.com/somesh-banerjee/Hospital-Records-Blockchain",
  },
  {
    title: "CrowdSourcing platform on Ethereum",
    image: "/assets/crdsrc.png",
    description: [
      "This is a CrowdSourcing app built on the ethereum Rinkeby Test network.",
    ],
    videoDemo:
      "",
    liveDemo: "https://crwd-src.herokuapp.com/",
    sourceCode: "https://github.com/somesh-banerjee/Crwd_Src",
  },
  {
    title: "Map Points",
    image: "/assets/loader.gif",
    description: [
      "Build a platform using MERN stack where users log in and give reviews of a different location.",
    ],
    videoDemo:
      "",
    liveDemo: "",
    sourceCode: "",
  },
  {
    title: "SOMCOIN",
    image: "/assets/somcoin.png",
    description: [
      "A demo ERC20 token I built for learning purposes.",
    ],
    videoDemo:
      "",
    liveDemo: "",
    sourceCode: "https://github.com/somesh-banerjee/Somcoin",
  },
  {
    title: "Vehicle Number Plate Detection",
    image: "/assets/prj2.png",
    description: [
      "Identifying number plate in a image using filters and then detecting characters using OCR.",
    ],
    videoDemo:
      "",
    liveDemo: "",
    sourceCode: "https://github.com/somesh-banerjee/Vehicle-Number-Plate-Detection",
  }
];

export const contactDetails = [
  {
    icon: MdCall,
    type: "Mobile",
    value: "9876543210",
    href: "",
  },
  {
    icon: GrMail,
    type: "Email",
    value: "somesh0banerjee@gmail.com",
    href: "mailto:somesh0banerjee@gmail.com",
  },
  {
    icon: MdLocationOn,
    type: "Address",
    value: "Kolkata, West Bengal",
    href: "",
  },
  {
    icon: FaLinkedin,
    type: "Linkedin",
    value: "Contact through Linkedin",
    href: "https://www.linkedin.com/in/somesh-banerjee/",
  },
];

export const contactData = {
  nameLabel: "Name *",
  emailLabel: "Email *",
  subjectLabel: "Subject *",
  messageLabel: "Message *",
  sendButton: "Send Message",
  errorMessage:
    "Your message could not be sent, Kindly contact directly over Email or Phone!",
  successMessage:
    "Your message has been sent successfully, I will contact you soon!",
};
