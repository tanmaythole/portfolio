import { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import ContactForm from "./contactForm";
import SectionTitle from "@src/components/sections/sectionTitle";
import SectionWrapper from "@src/components/sections/sectionWrapper";
import SocialLinks from "@src/components/socialLinks";

import EmailIcon from "@src/assets/icons/email.svg";

const Contact: FC = () => (
  <SectionWrapper id="contact">
    <SectionTitle title="Contact" />
    <Container>
      <Row className="row-gap-2">
        <Col md={8}>
          <ContactForm />
        </Col>
        <Col md={4} className="text-center">
          <Card>
            <Card.Body className="text-center">
              <EmailIcon />
              <a
                className="text-decoration-none"
                href="mailto:tanmaythole@gmail.com"
              >
                <Card.Title className="mt-2">tanmythole@gmail.com</Card.Title>
              </a>
              <Card.Text>Contact me every time!</Card.Text>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-center my-4">
            <SocialLinks />
          </div>
        </Col>
      </Row>
    </Container>
  </SectionWrapper>
);

export default Contact;
