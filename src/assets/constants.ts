import { Project } from "../types/project";

export const projects: Project[] = [
  {
    name: "Philadelphia Estates",
    features: "signup or login to add edit and delete Estates, users can view states and contact the seller via email",
    image: "/projects/images/philadelphia-estates.png",
    technologies: [
      "ASP.NET Core",
      "EF Core",
      "SQLite",
      "React",
      "Typescript",
      "Tailwind-css"
    ],
    description: "Philadelphia Estates is a Amman based website that let people sell and buy Real Estates. users also can search, filter and find their desired Estate",
    links: {
      github: "https://github.com/aktaion-x/Philadelphia-Estates",
      live: "8884",
      install: ""
    },
  },
  {
    name: "Career Link",
    features: "Responsive Laravel project. that have an Authentication System, Post, Show, Update, Delete a job and archive it.",
    image: "/projects/images/career-link.png",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "CRUD controllers",
      "Factories",
      "Blade"
    ],
    description: "Career Link, a web application designed to connect job seekers and employers in a seamless and efficient manner. Developed with a passion for Laravel and MySQL.",
    links: {
      github: "https://github.com/aktaion-x/Laravel-CareerLink",
      live: "8881",
      install: ""
    },
  },
  {
    name: "Twitter-X Clone",
    features: "In this clone user can follow other users, react to their tweets by (reply, quote, like, retweet, and add to bookmark) and user can delete his own tweet (regular tweet, reply, quote). follow other users, etc...",
    image: "/projects/images/twitter-clone.png",
    technologies: [
      "React",
      "Node.js",
      "radius-server",
      "MongoDB",
      "ExpressJS",
      "Vanilla CSS"
    ],
    description: "twitter clone build using MERN Stack (MongoDB, Express.js, React, Node.js) it's a backend-frontend clone and it does have the most of what real-twitter provide. e.g. create tweet, quote tweet, reply, like, retweet, add to bookmark, and more and more...",
    links: {
      github: "https://github.com/aktaion-x/Twitter-Clone",
      live: "8883",
      install: ""
    },
  },
  {
    name: "Chrome-Extension Taskify Tab",
    features: "add, delete, complete Tasks, change page title, add favorite websites",
    image: "/projects/images/chrome-extension.png",
    technologies: [
      "React",
      "Typescript",
      "Chrome-Extension API",
      "Tailwind-css"
    ],
    description: "replace default Chrome New tab with a beautiful minimal functional one, that let you add you'r todo list change the title and add you'r favorite websites",
    links: {
      github: "https://github.com/aktaion-x/Chrome-Extension-Taskify",
      install: "https://drive.google.com/drive/folders/17VVW9xM_T-QHJS6t8gQrZRoNq6KqTTh5",
      live: "8885"
    },
  },
  {
    name: "Previous Portfolio",
    features: "a light wight Single Page Application giving the viewer a seamless experience exploring it",
    image: "/projects/images/previous-portfolio.png",
    technologies: [
      "React",
      "Javascript",
      "Vanilla CSS"
    ],
    description: "This was my Portfolio, I have build it while learning react to practice my skills, all the information in it are statically typed.",
    links: {
      github: "https://github.com/aktaion-x/React-Portfolio",
      live: "8882",
      install: ""
    },
  },
  {
    name: "Movies App",
    features: "a Responsive App, whrere user can add a movie, rate it, and filter them based on genres",
    image: "/projects/images/movies-app.png",
    technologies: [
      "HTML - CSS",
      "PHP",
      "MySQL",
      "Javascript"
    ],
    description: "Movies App is a Web Application designed and developed to enhance my skills in PHP and MySQL. With a focus on creating a user-friendly and intuitive experience.",
    links: {
      github: "https://github.com/aktaion-x/PHP-MySQL-MoviesApp",
      live: "8880",
      install: ""
    },
  }
]