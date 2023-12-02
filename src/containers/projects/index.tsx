import { useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProjectBadge from "./project_badge";
import ProjectCard from "./project_card";
import SectionHeader from "../../components/section-header";

import { CATEGORIES, PROJECTS } from "./constants";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => 
    PROJECTS.filter(({ category }) => {
      if (activeCategory === "all") return true;
      return category === activeCategory;
    }
  ), [activeCategory]);

  return (
    <section id="projects" className="projects-container">
      <Container className="py-5 d-flex flex-column row-gap-4" fluid="sm">
        <SectionHeader title="Projects" heading="Checkout My Work" />
        <div className="d-flex flex-row gap-2 justify-content-center">
          {CATEGORIES?.map(({ label, value }) => (
            <ProjectBadge
              key={value}
              label={label}
              value={value}
              activeCategory={activeCategory}
              onClick={setActiveCategory}
            />
          ))}
        </div>
        <Row className="row-gap-3">
          {filteredProjects?.map((project) => (
            <Col md={4} key={project.title} className="d-flex align-item-stretch">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects;
