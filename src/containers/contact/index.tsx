import { Col, Container, Image, Row } from "react-bootstrap";

import SectionHeader from "../../components/section-header";

import EmailIcon from "../../assets/icons/email.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import LocationIcon from "../../assets/icons/location.svg";
import ContactForm from "./contact-form";

const Contact = () => (
  <section id="contact" className="contact-container">
    <Container className="py-5 d-flex flex-column row-gap-4">
      <SectionHeader title="Contact me" heading="Let's Create Something Together." />
      <Row className="row-gap-4">
        <Col md={4} className="border rounded d-flex flex-column justify-content-center py-3 row-gap-3">
          <div className="d-flex">
            <Image src={EmailIcon} alt="Email" width={20} />
            <div className="ms-3">
              <small className="mb-0 text-muted text-small">Email:</small>
              <p className="mb-0">
                <a href="mailto:tanmaythole@gmail.com" className="text-decoration-none contact-link">
                  tanmaythole@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="d-flex">
            <Image src={PhoneIcon} alt="Phone" width={20} />
            <div className="ms-3">
              <small className="mb-0 text-muted text-small">Call me:</small>
              <p className="mb-0">
                <a href="tel:+917262024204" className="text-decoration-none contact-link">
                  +91 72620 24204
                </a>
              </p>
            </div>
          </div>
          <div className="d-flex">
            <Image src={LocationIcon} alt="Address" width={20} />
            <div className="ms-3">
              <small className="mb-0 text-muted text-small">Address:</small>
              <p className="mb-0">
                <a
                  href="https://maps.app.goo.gl/P42agePMYVvfSvHy7" 
                  target="_blank"
                  className="text-decoration-none contact-link"
                >
                  Wakad, Pune, Maharashtra, India - 411057
                </a>
              </p>
            </div>
          </div>
        </Col>
        <Col md={8} className="py-1 px-4">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;
