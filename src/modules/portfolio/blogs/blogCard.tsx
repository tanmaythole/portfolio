import { FC } from "react";
import { Card } from "react-bootstrap";

import Button from "@src/components/Button";

type Props = {
  img: string;
  title: string;
  description: string;
  url: string;
};

const BlogCard: FC<Props> = ({ img, title, description, url }) => (
  <Card>
    <Card.Img src={img} className="blog_card_img" />
    <Card.Body className="text-center">
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button as="a" href={url} target="_blank" className="mt-0 btn-sm">
        Read More
      </Button>
    </Card.Body>
  </Card>
);

export default BlogCard;
