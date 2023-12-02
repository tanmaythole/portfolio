import { Container, Image } from "react-bootstrap";

import { SOCIAL_LINKS } from "../../constants";

const Footer = () => (
  <Container className="footer">
    <div className="d-flex justify-content-between align-items-center py-5">
      <span>&#169; 2023 Tanmay Thole, All rights reserved.</span>
      <span className="d-flex gap-3">
        {SOCIAL_LINKS.map(({url, icon, name}, index) => (
          <a key={index} href={url} target="_blank">
            <Image src={icon} width={name.toLowerCase() === "twitter" ? 18 : 24} />
          </a>
        ))}
      </span>
    </div>
  </Container>
);

export default Footer;
