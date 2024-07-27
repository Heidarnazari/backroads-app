import img1 from "./images/tour-1.jpg";
import img2 from "./images/tour-2.jpg";
import img3 from "./images/tour-3.jpg";
import img4 from "./images/hero.jpg";

export const services = [
  {
    id: 1,
    title: "saving money",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    icon: "fa-solid fa-credit-card service-icon",
  },
  {
    id: 2,
    title: "endless hiking",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    icon: "fa-solid fa-tree service-icon",
  },
  {
    id: 3,
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    icon: "fa-solid fa-socks service-icon",
  },
];

export const featuredTours = [
  {
    id: 1,
    img: img1,
    title: "explore tibet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sequi?",
    destination: "China",
    leastPrice: 2100,
    days: 6,
    date: "August 26th,2020",
  },
  {
    id: 2,
    img: img2,
    title: "Venice",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sequi? Lorem ipsum dolor sit amet consectetur",
    destination: "Italy",
    leastPrice: 3100,
    days: 4,
    date: "October 1th,2018",
  },
  {
    id: 3,
    img: img3,
    title: "Alps mountains",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sequi? Lorem ipsum dolor sit amet consectetur",
    destination: "Italy",
    leastPrice: 2500,
    days: 5,
    date: "September 12th,2022",
  },
  {
    id: 4,
    img: img4,
    title: "Egypt",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sequi? Lorem ipsum dolor sit amet",
    destination: "Egypt",
    leastPrice: 5000,
    days: 10,
    date: "December 5th,2019",
  },
];

export const navLinks = [
  {
    id: 1,
    href: "#about",
    content: "about",
  },
  {
    id: 2,
    href: "#services",
    content: "services",
  },
  {
    id: 3,
    href: "#home",
    content: "home",
  },
  {
    id: 4,
    href: "#tours",
    content: "tours",
  },
];

export const navSocialLinks = [
  {
    id: 1,
    href: "https://www.X.com",
    iconClass: "fa-brands fa-twitter",
  },
  {
    id: 2,
    href: "https://www.instagram.com",
    iconClass: "fa-brands fa-instagram",
  },
  {
    id: 3,
    href: "https://www.telegram.com",
    iconClass: "fa-brands fa-telegram",
  },
];
