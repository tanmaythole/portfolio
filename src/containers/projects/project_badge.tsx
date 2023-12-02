import { memo } from "react";
import { TProjectCategory } from "./types";

type Props = TProjectCategory & {
  activeCategory: string;
  onClick: (value: string) => void;
};

const ProjectBadge = memo(({ label, value, activeCategory, onClick }: Props) => {
  const isActive = activeCategory === value;
  const classNames = isActive ? "border-dark text-dark" : "text-secondary";

  const handleClick = () => onClick(value);

  return (
    <button
      key={value}
      className={`badge rounded-pill border bg-transparent ${classNames}`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
})

export default ProjectBadge;
