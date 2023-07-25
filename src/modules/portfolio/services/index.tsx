import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import SectionTitle from "@src/components/sections/sectionTitle";
import SectionWrapper from "@src/components/sections/sectionWrapper";
import ServiceCard from "./serviceCard";

import UiUxIcon from "@src/assets/icons/uiux.svg";
import WebDevIcon from "@src/assets/icons/webDev.svg";
import AppDevIcon from "@src/assets/icons/app-dev.svg";

const serviceDetails = [
  {
    icon: UiUxIcon,
    title: "UI/UX Design",
    description:
      "An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.",
  },
  {
    icon: WebDevIcon,
    title: "Full Stack Development",
    description:
      "If you are looking for a developer who’ll take over the research and development of your website, I am a well-established professional to help you with this.",
  },
  {
    icon: AppDevIcon,
    title: "App Development",
    description:
      "If you are looking for a user-friendly app that will attract more mobile users, I can help you design and build a platform with the latest and trendiest look and feel.",
  },
];

const Services: FC = () => (
  <SectionWrapper id="services">
    <SectionTitle title="Services" subtitile="What I do" />
    <Container>
      <Row className="row-gap-3">
        {serviceDetails.map((item) => (
          <Col md={4} key={item.title}>
            <ServiceCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  </SectionWrapper>
);

export default Services;
