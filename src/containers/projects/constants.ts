import { TProject, TProjectCategory } from "./types";

import Intranet from "../../assets/images/intranet.png";
import FACET from "../../assets/images/facet.png";
import ATHT from "../../assets/images/atht.png";
import MyIdeal11 from "../../assets/images/ideal11.png";
import TholeMall from "../../assets/images/tholeMall.png";

export const CATEGORIES: TProjectCategory[] = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Web Apps',
    value: 'web',
  },
  {
    label: 'Mobile Apps',
    value: 'mobile',
  },
  {
    label: 'Marketing Sites',
    value: 'marketing',
  }
];

export const PROJECTS: TProject[] = [
  {
    title: "Intranet",
    image: Intranet,
    description:
      "Intranet is a mobile application for employee management which uses to fill timesheet and apply leaves.",
    tags: ["React Native", "JS"],
    github: "",
    link: "https://play.google.com/store/apps/details?id=com.joshsoftware.intranet",
    category: "mobile",
  },
  {
    title: "FACET",
    image: FACET,
    description:
      "FACET is a tool for Quality Assurance (QA) that enables end-to-end automated validation with a user-friendly UI.",
    tags: ["ReactJs", "JS", "Python", "Flask", "Postgres"],
    github: "",
    link: "",
    category: "web",
  },
  {
    title: "Portfolio Website",
    image: ATHT,
    description: "Created my portfolio website to showcase my work.",
    tags: ["ReactJs", "JS"],
    github: "https://github.com/tanmaythole",
    link: "https://tanmaythole.vercel.app",
    category: "marketing",
  },
  {
    title: "My Ideal 11",
    image: MyIdeal11,
    description:
      "MyIdeal11 is a fantasy sports web application that allows users to trade players like the stock market during live matches.",
    tags: ["ReactJs", "JS", "Python", "Django", "DRF"],
    github: "https://github.com/tanmaythole/ideal11",
    link: "",
    category: "web",
  },
  {
    title: "Thole Mall",
    image: TholeMall,
    description:
      "Thole mall is the E-commerce destination for seamless shopping and a vast product selection.",
    tags: ["Python", "Django", "JS", "Bootstrap"],
    github: "https://github.com/tanmaythole/Ecommerce-Website",
    link: "",
    category: "web",
  },
  {
    title: "ATHT Booking",
    image: ATHT,
    description:
      "Online stadium ticket booking system made in PHP and MySQL for college DBMS project.",
    tags: ["MySQL", "JS", "PHP", "CSS"],
    github: "https://github.com/tanmaythole/stadium_ticket_booking_system",
    link: "",
    category: "web",
  },
];
