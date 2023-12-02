import { Col, Container, Row } from "react-bootstrap";

import BlogCard from "./blog_card";
import SectionHeader from "../../components/section-header";

import { BLOGS } from "./constants";

const Blogs = () => (
  <section id="blogs" className="blogs-container">
    <Container className="py-5 d-flex flex-column gap-4">
      <SectionHeader title="Blogs" heading="My Tech Diary" />
      <Row className="row-gap-3">
        {BLOGS?.map((blog) => (
          <Col md={4} key={blog.title} className="d-flex align-item-stretch">
            <BlogCard {...blog} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Blogs;
