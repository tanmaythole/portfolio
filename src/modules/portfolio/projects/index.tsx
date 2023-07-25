import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import SectionTitle from "@src/components/sections/sectionTitle";
import SectionWrapper from "@src/components/sections/sectionWrapper";
import ProjectCard from "./projectCard";

import ATHTProject from "@src/assets/images/atht.png";
import IntranetProject from "@src/assets/images/intranet.png";
import TholeMallProject from "@src/assets/images/tholeMall.png";
import MyIdeal11Project from "@src/assets/images/ideal11.png";
import FACETProject from "@src/assets/images/facet.png";

const projectDetails = [
  {
    name: "Intranet",
    img: IntranetProject,
    description:
      "Intranet is a mobile application for employee management which uses to fill timesheet and apply leaves.",
    tags: ["React Native", "JS"],
    github: "",
    url: "https://play.google.com/store/apps/details?id=com.joshsoftware.intranet",
    createdAt: "2023",
  },
  {
    name: "FACET",
    img: FACETProject,
    description:
      "FACET is a tool for Quality Assurance (QA) that enables end-to-end automated validation with a user-friendly UI.",
    tags: ["ReactJs", "JS", "Python", "Flask", "Postgres"],
    github: "",
    url: "",
    createdAt: "2023",
  },
  {
    name: "Portfolio Website",
    img: ATHTProject,
    description: "Created my portfolio website to showcase my work.",
    tags: ["ReactJs", "JS"],
    github: "https://github.com/tanmaythole",
    url: "",
    createdAt: "2022",
  },
  {
    name: "My Ideal 11",
    img: MyIdeal11Project,
    description:
      "MyIdeal11 is a fantasy sports web application that allows users to trade players like the stock market during live matches.",
    tags: ["ReactJs", "JS", "Python", "Django", "DRF"],
    github: "https://github.com/tanmaythole/ideal11",
    url: "",
    createdAt: "2022",
  },
  {
    name: "Thole Mall",
    img: TholeMallProject,
    description:
      "Thole mall is the E-commerce destination for seamless shopping and a vast product selection.",
    tags: ["Python", "Django", "JS", "Bootstrap"],
    github: "https://github.com/tanmaythole/Ecommerce-Website",
    url: "",
    createdAt: "2021",
  },
  {
    name: "ATHT Booking",
    img: ATHTProject,
    description:
      "Online stadium ticket booking system made in PHP and MySQL for college DBMS project.",
    tags: ["MySQL", "JS", "PHP", "CSS"],
    github: "https://github.com/tanmaythole/stadium_ticket_booking_system",
    url: "",
    createdAt: "2021",
  },
];

const Projects: FC = () => (
  <SectionWrapper id="projects">
    <SectionTitle title="Projects" subtitile="What I created" />
    <Container>
      <Row className="row-gap-3">
        {projectDetails.map((item) => (
          <Col key={item.name} className="d-flex align-item-stretch" md={4}>
            <ProjectCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  </SectionWrapper>
);

export default Projects;
