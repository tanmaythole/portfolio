import { Button, Col, Container, Image, Row, Stack } from 'react-bootstrap';
import ReactTyped from 'react-typed';

import Logo from '../../assets/images/hero.png';

const designationStrings = [
  'Software Developer',
  'Engineer',
  'Competitive Programmer',
  'Full-Stack Enthusiast',
  'Freelancer',
  'Open Source Contributer'
]

const Hero = () => {
  return (
    <Container className="hero-container">
      <Row className="h-100 align-items-center">
        <Col md={7}>
          <Stack gap={3}>
            <span className="fs-5 lh-1 text-primary">Welcome to my site</span>
            <h1 className="name-container">
              I'm <span className="text-primary">Tanmay Thole</span>
            </h1>
            <ReactTyped
              className='typed lh-1 fs-1'
              strings={designationStrings}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            <span className="text-muted fs-5">
              Passionate software developer dedicated to crafting elegant solutions and enhancing user experiences.
            </span>
            <span className="d-md-block mt-3">
              <Button variant="primary" className="rounded-pill px-5 py-2">Hire Me!</Button>
            </span>
          </Stack>
        </Col>
        <Col md={5}>
          <Image src={Logo} alt='Tanmay Thole' className="rounded-circle border hero-image" />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero;
