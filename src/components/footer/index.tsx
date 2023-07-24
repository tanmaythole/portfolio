import { FC } from "react";
import { Container } from "react-bootstrap";

import SocialLinks from "../socialLinks";

const Footer: FC = () => (
  <div className="bg-dark text-secondary">
    <Container className="py-4 d-flex justify-content-between">
      <span>&#169; 2023 Tanmay Thole, All rights reserved.</span>
      <SocialLinks color={"#6c757d"} />
    </Container>
  </div>
);

export default Footer;
