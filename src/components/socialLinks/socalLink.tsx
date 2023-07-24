import { FC } from "react";

type Props = {
  icon: string | React.ElementType;
  url: string;
  color?: string;
};

const SocialLink: FC<Props> = ({ icon: Icon, url, color }) => {
  const onClickHandler = () => {
    url && window.open(url, "_blank");
  };

  return <Icon className="icon" onClick={onClickHandler} fill={color} />;
};

export default SocialLink;
