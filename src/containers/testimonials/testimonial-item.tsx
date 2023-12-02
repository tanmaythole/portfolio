import { Image } from "react-bootstrap";

import { TTestimonial } from "./types";

const TestimonialItem = ({ name, image, quote }: TTestimonial) => (
  <div className="d-flex flex-column align-items-center mb-5 testimonial-item">
    <Image
      src={image}
      alt={name}
      width={100}
      className="d-block rounded-circle border border-2 border-secondary"
    />
    <h5 className="mt-3">{name}</h5>
    <p className="text-muted text-center w-50 quote">
      {quote}
    </p>
  </div>
);

export default TestimonialItem;
