import { FC, memo } from "react";
import { Badge, Card } from "react-bootstrap";

import GitHub from "@src/assets/icons/github.svg";
import URLIcon from "@src/assets/icons/url.svg";

type Props = {
  name: string;
  description: string;
  tags: string[];
  img: any;
  github?: string;
  url?: string;
  createdAt?: string;
};

const ProjectCard: FC<Props> = ({
  name,
  description,
  tags,
  img,
  github,
  url,
  createdAt,
}) => (
  <Card className="project_card">
    <Card.Body>
      <Card.Img src={img} />
      <Card.Title className="pt-2">{name}</Card.Title>
      <span className="d-flex gap-1">
        {tags.map((tag) => (
          <Badge key={tag} bg="secondary">
            {tag}
          </Badge>
        ))}
      </span>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
      <span className="fw-bold">{createdAt}</span>
      <span className="d-flex gap-1">
        {github && (
          <Card.Link href={github} target="_blank" rel="noreferrer">
            <GitHub />
          </Card.Link>
        )}
        {url && (
          <Card.Link href={url} target="_blank" rel="noreferrer">
            <URLIcon />
          </Card.Link>
        )}
      </span>
    </Card.Footer>
  </Card>
);

export default memo(ProjectCard);
