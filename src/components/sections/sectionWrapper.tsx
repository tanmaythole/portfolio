import { FC, HTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

const SectionWrapper: FC<Props> = ({ children, className, ...props }) => (
  <div className={`section_wrapper ${className}`} {...props}>
    {children}
  </div>
);

export default SectionWrapper;
