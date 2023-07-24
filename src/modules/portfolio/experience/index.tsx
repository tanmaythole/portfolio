import { FC } from "react";
import { Container } from "react-bootstrap";

import ExperienceCard from "./experienceCard";
import SectionTitle from "@src/components/sections/sectionTitle";
import SectionWrapper from "@src/components/sections/sectionWrapper";

const Experience: FC = () => {
  return (
    <Container>
      <SectionWrapper>
        <SectionTitle title="Work Experience" />
        <ExperienceCard />
      </SectionWrapper>
    </Container>
  );
};

export default Experience;
