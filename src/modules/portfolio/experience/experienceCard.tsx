import { FC } from "react";
import { Col, Row } from "react-bootstrap";

const ExperienceCard: FC = () => {
  return (
    <Row className="experience_card">
      <Col md={3}>
        <div>
          <span>Jan 2022 - Jun 2022</span>
          <p className="divider" />
          <p>Josh Software Pvt. Ltd</p>
        </div>
      </Col>
      <Col md={9}>hii</Col>
    </Row>
  );
};

export default ExperienceCard;
