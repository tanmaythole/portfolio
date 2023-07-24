import { FC } from "react";
import { Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

import Button from "@src/components/Button";
import Header from "@src/components/header";
import SocialLinks from "@src/components/socialLinks";

const Home: FC = () => {
  return (
    <div className="home_container">
      <Header />
      <Container className="home_wrapper">
        <div className="home_wrapper_content">
          <div>
            <h1 className="heading_title">I'm Tanmay</h1>
            <p className="typing_text">
              <span className="text-secondary">And I'm </span>
              <span>
                <TypeAnimation
                  sequence={[
                    "Engineer",
                    500,
                    "Front End Developer",
                    500,
                    "Full Stack Enthusiast",
                    500,
                    "Web Developer",
                    500,
                    "Freelancer",
                    500,
                    "Learner",
                  ]}
                  speed={10}
                  repeat={Infinity}
                />
              </span>
            </p>
            <SocialLinks />
            <Button>Hire Me</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
