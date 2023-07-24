import { FC } from "react";
import { Card } from "react-bootstrap";

type Props = {
  icon: any;
  title: string;
  description: string;
};

const ServiceCard: FC<Props> = ({ icon: Icon, title, description }) => (
  <Card className="service_card">
    <Card.Body className="text-center my-2">
      <Icon
        className="border rounded-circle mt-1 service_card_icon"
        fill="#E66360"
      />
      <Card.Title className="mt-3">{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default ServiceCard;
