import { memo } from "react";
import { Card } from "react-bootstrap";

import { TBlogItem } from "./types";

const BlogCard = memo(({ title, description, image, link }: TBlogItem) => (
  <Card className="blog-card">
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text className="text-secondary">{description}</Card.Text>
    </Card.Body>
    <Card.Footer className="text-center bg-transparent border-0">
      <Card.Link 
        href={link}
        className="text-decoration-none"
        target="_blank"
      >
        Continue Reading...
      </Card.Link>
    </Card.Footer>
  </Card>
))

export default BlogCard;
