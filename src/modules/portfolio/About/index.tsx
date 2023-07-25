import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Button from "@src/components/Button";
import SectionTitle from "@src/components/sections/sectionTitle";
import SectionWrapper from "@src/components/sections/sectionWrapper";

import aboutImg from "@src/assets/images/about.jpg";

const About: FC = () => (
  <SectionWrapper className="bg-light" id="about">
    <SectionTitle title="About Me" subtitile="Who I am" />
    <Container className="about_section">
      <Row className="justify-content-between">
        <Col md={7}>
          <p>
            Hello, I am Tanmay Thole, currently working as a Software Engineer.
            I am a Full Stack Web developer. I individually work on designing,
            developing, and creating new Web applications. I spend most of my
            day experimenting with ReactJs, JavaScript, Django, Flask, Python,
            and its endless frameworks.
          </p>
          <p>
            I am strong in design and integration, with intuitive
            problem-solving skills. I am passionate about implementing and
            launching new projects, and I am self-directed and energetic. I
            demonstrate superior performance in both autonomous and
            collaborative environments, excelling while working independently
            and collaborating with others on group projects.
          </p>
          <Button
            as="a"
            href={"/files/resume.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </Button>
        </Col>
        <Col md={4}>
          <div className="about_section_img_container">
            <img src={aboutImg} alt="Tanmay Thole" />
          </div>
        </Col>
      </Row>
    </Container>
  </SectionWrapper>
);

export default About;
