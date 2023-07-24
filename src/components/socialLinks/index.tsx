import { FC } from "react";

import SocialLink from "./socalLink";

import LinkedIn from "../../assets/icons/linkedin.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Github from "../../assets/icons/github.svg";
import Facebook from "../../assets/icons/facebook.svg";
import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "../../constants";

const linksData = [
  {
    name: "LinkedIn",
    icon: LinkedIn,
    url: LINKEDIN_URL,
  },
  {
    name: "GitHub",
    icon: Github,
    url: GITHUB_URL,
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: INSTAGRAM_URL,
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: FACEBOOK_URL,
  },
];

type Props = {
  color?: string;
};

const SocialLinks: FC<Props> = ({ color }) => {
  return (
    <span className="d-flex gap-3">
      {linksData.map(({ name, icon, url }) => (
        <SocialLink key={name} icon={icon} url={url} color={color} />
      ))}
    </span>
  );
};

export default SocialLinks;
