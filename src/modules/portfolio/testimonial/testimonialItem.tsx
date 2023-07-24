import { FC } from "react";
import { Col, Image } from "react-bootstrap";

type Props = {
  name: string;
  img: string;
  message: string;
};

const TestimonialItem: FC<Props> = ({ name, img, message }) => (
  <div className="d-flex justify-content-center align-items-center mb-5">
    <Col md={8} className="text-center">
      <Image
        src={img}
        className="border rounded-circle border-secondary border-4"
        width={116}
      />
      <h3>{name}</h3>
      <p>{message}</p>
    </Col>
  </div>
);

export default TestimonialItem;
