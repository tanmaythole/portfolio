import { Carousel, Container } from "react-bootstrap";

import SectionHeader from "../../components/section-header";
import TestimonialItem from "./testimonial-item";

import { TESTOMONIALS } from "./constants";

const Testimonials = () => {
  return (
    <section className="testimonials-container" id="testimonials">
      <Container className="py-5 d-flex flex-column row-gap-4">
        <SectionHeader title="Testimonials" heading="The Trust From Clients" />
        <Carousel
          slide
          indicators={false}
          nextIcon={<>&#8250;</>}
          prevIcon={<>&#8249;</>}
        >
          {TESTOMONIALS?.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <TestimonialItem {...testimonial} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  )
};

export default Testimonials;
