import { FC, PropsWithChildren } from "react";

const SectionWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="section_wrapper">{children}</div>
);

export default SectionWrapper;
