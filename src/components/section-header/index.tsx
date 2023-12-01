type Props = {
  title: string;
  heading: string;
};

const SectionHeader = ({ title, heading }: Props) => (
  <div className="text-center">
    <span className="fs-6 text-primary text-uppercase">{title}</span>
    <h1 className="fs-1 fw-bolder">{heading}</h1>
  </div>
);

export default SectionHeader;
