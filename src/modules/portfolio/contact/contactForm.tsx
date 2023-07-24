import { FC, useState } from "react";
import { Alert, Card, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "@src/components/input";
import Button from "@src/components/Button";

import { EMAIL_REGEX } from "@src/constants";

const schema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .matches(EMAIL_REGEX, "email must be valid email")
    .required(),
  message: yup.string().min(3).max(256).required(),
});

const ContactForm: FC = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }) => {
    fetch("https://formspree.io/f/mgepdlnr", {
      method: "POST",
      body: JSON.stringify({ name, email, message } as any),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.ok) {
          setIsSuccess(true);
        } else {
          setErrorMessage(r.error);
        }
      })
      .catch(() =>
        setErrorMessage("Something went wrong while submitting form")
      );
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h3">
          Get In Touch
          <div className="divider mt-2" />
        </Card.Title>
        <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {isSuccess && (
            <Alert variant="success" dismissible>
              Form submitted successfully!
            </Alert>
          )}
          {Boolean(errorMessage) && (
            <Alert variant="danger" dismissible>
              {errorMessage}. You can contact at email tanmaythole@gmail.com
            </Alert>
          )}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                label="Name"
                placeholder="Name"
                error={errors.name?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                label="Email"
                placeholder="example@email.com"
                error={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Input
                label="Message"
                placeholder="Write Here..."
                error={errors.message?.message}
                as="textarea"
                {...field}
              />
            )}
          />
          <Button type="submit" className="mt-0">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;
