import { Badge, Card, Image } from "react-bootstrap";

import ExternalLink from "../../assets/icons/external-link.svg";
import GitHub from "../../assets/icons/github.svg";

import { TProject } from "./types";

const ProjectCard = ({ title, tags, image, description, link, github }: TProject) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} loading="lazy" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex gap-1">
          {tags?.map((tag) => (
            <Badge key={tag} bg="secondary">{tag}</Badge>
          ))}
        </div>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0 d-flex justify-content-end">
        {github && (
          <Card.Link href={github} target="_blank">
            <Image src={GitHub} alt={github} width={20} />
          </Card.Link>
        )}
        {link && (
          <Card.Link href={link} target="_blank">
            <Image src={ExternalLink} alt={title} width={20} />
          </Card.Link>
        )}
      </Card.Footer>
    </Card>
  )
}

export default ProjectCard;
