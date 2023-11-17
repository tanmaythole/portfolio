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
        <Col md={6}>
          <Stack gap={3}>
            <span className="name-container">
              <h1>Hi I'm</h1>
              <h1 className="text-primary">Tanmay Thole</h1>
            </span>
            <ReactTyped
              className='typed lh-1 fs-5'
              strings={designationStrings}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            <span className="d-md-block mt-3">
              <Button variant="primary" className="rounded-pill px-5 py-2">Hire Me!</Button>
            </span>
          </Stack>
        </Col>
        <Col md={6}>
          <Image src={Logo} alt='Tanmay Thole' className="rounded-circle border hero-image" />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero;
