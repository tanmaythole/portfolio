import { FC } from "react";

type Props = {
  title: string;
  subtitile?: string;
};

const SectionTitle: FC<Props> = ({ title, subtitile }) => {
  return (
    <div className="section_title_container">
      <h3>{title}</h3>
      {subtitile && <p>{subtitile}</p>}
      <span className="divider"></span>
    </div>
  );
};

export default SectionTitle;
