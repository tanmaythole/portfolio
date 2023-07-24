import { FC } from "react";

import Home from "./Home";
import About from "./About";
import Services from "./services";
import Projects from "./projects";
import Blogs from "./blogs";
import Testimonial from "./testimonial";
// import Experience from "./experience";

const Main: FC = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      {/* <Experience /> */}
      <Projects />
      <Blogs />
      <Testimonial />
    </>
  );
};

export default Main;
