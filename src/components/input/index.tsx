import { FC, forwardRef, memo } from "react";
import { Form, FormControlProps } from "react-bootstrap";

type Props = FormControlProps & {
  label?: string;
  error?: string;
};

const Input: FC<Props> = forwardRef(({ label, error, ...props }, ref) => (
  <Form.Group className="mb-3">
    {label && <Form.Label>{label}</Form.Label>}
    <Form.Control as="input" ref={ref} isInvalid={Boolean(error)} {...props} />
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  </Form.Group>
));

export default memo(Input);
