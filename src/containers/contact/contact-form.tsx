import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup
  .object({
    name: yup.string().min(3).required(),
    email: yup.string().matches(EMAIL_REGEX, "Email must be a valid email.").required(),
    message: yup.string().min(10).required(),
  })
  .required()

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
    resolver: yupResolver(schema)
  });
  
  const onSubmit = (data: { [key: string]: string }) => {
    fetch("https://formspree.io/f/mgepdlnr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then((r) => r.json())
    .then((r) => {
      if (r.ok) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Failed to send message.");
      }
    })
    .catch(() => {
      alert("Failed to send message.");
    })
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Name <span className="text-danger">*</span></Form.Label>
            <Form.Control 
              placeholder="John Doe"
              isInvalid={Boolean(errors.name)}
              {...register("name")} 
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
            <Form.Control
              placeholder="john@example.com"
              isInvalid={Boolean(errors.email)}
              {...register("email")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Message <span className="text-danger">*</span></Form.Label>
        <Form.Control 
          as="textarea"
          rows={3} 
          placeholder="How can I help you?"
          isInvalid={Boolean(errors.message)}
          {...register("message")}
        />
        <Form.Control.Feedback type="invalid">
          {errors.message?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
  )
}

export default ContactForm;
