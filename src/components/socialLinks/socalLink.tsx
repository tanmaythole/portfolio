import { FC } from "react";

type Props = {
  icon: string | React.ElementType;
  url: string;
};

const SocialLink: FC<Props> = ({ icon: Icon, url }) => {
  const onClickHandler = () => {
    url && window.open(url, "_blank");
  };

  return <Icon className="icon" onClick={onClickHandler} />;
};

export default SocialLink;
