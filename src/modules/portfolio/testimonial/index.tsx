import { FC } from "react";
import { Carousel, Container } from "react-bootstrap";

import SectionTitle from "@src/components/sections/sectionTitle";
import SectionWrapper from "@src/components/sections/sectionWrapper";
import TestimonialItem from "./testimonialItem";

import Client1 from "@src/assets/images/client1.jpg";
import Client2 from "@src/assets/images/client2.webp";
import Client3 from "@src/assets/images/client3.jpeg";

const testimonialData = [
  {
    name: "Soma",
    img: Client1,
    message:
      "Tanmay is an excellent programmer. He managed to finished my application faster than he promised. He is good at communicating with client and very patient. Highly recommend him!",
  },
  {
    name: "Satyam Sharma",
    img: Client2,
    message:
      "Tanmay is very good Man. Also his work is top quality. I am very happy to work with Tanmay. I will hire again for my next work.",
  },
  {
    name: "Shrinivas Pandurangi",
    img: Client3,
    message:
      "Seriously had a great time working with Tanmay. He understands the issue and provides root cause analysis of the same. Excellent. Keep it up Tanmay.",
  },
];

const Testimonial: FC = () => {
  return (
    <SectionWrapper>
      <SectionTitle
        title="Testimonial"
        subtitile="What client thinks about me"
      />
      <Container>
        <Carousel slide data-bs-theme="dark">
          {testimonialData.map((testimonial) => (
            <Carousel.Item key={testimonial.name}>
              <TestimonialItem {...testimonial} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </SectionWrapper>
  );
};

export default Testimonial;
