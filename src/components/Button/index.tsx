import { FC, memo } from "react";
import { Button as RButton, ButtonProps } from "react-bootstrap";

const Button: FC<ButtonProps> = ({ className, ...props }) => (
  <RButton as="button" className={`custom_button ${className}`} {...props} />
);

export default memo(Button);
