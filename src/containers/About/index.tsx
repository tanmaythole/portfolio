import { Col, Container, Row } from "react-bootstrap";

import SectionHeader from "../../components/section-header";

const About = () => (
  <section id="about" className="about-section">
    <Container className="py-5 d-flex flex-column gap-3">
      <SectionHeader title="About Me" heading="Get To Know Me" />
      <Row className="flex-row align-items-center">
        <Col md={4} className="left-section">
          <h1 className="text-center text-primary yoe">2+</h1>
          <h5 className="fw-bold fs-5 text-center">Years of Experience</h5>
        </Col>
        <Col md={8} className="text-muted">
          <p>
            Hello! I'm Tanmay Thole, a passionate software engineer with 
            over 2 years of hands-on experience in crafting tech solutions. 
            My expertise spans a diverse tech stack, including JavaScript, 
            React.js, Python, and React Native, allowing me to bring ideas 
            to life across various platforms.
            </p>
            <p>
            I excel in design and integration, boasting intuitive problem-solving 
            skills. Passionate about launching new projects, I'm self-directed,
            energetic, and thrive both independently and collaboratively. Outside
            of work, I contribute to open source projects and enjoy writing tech 
            blogs in my free time.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
