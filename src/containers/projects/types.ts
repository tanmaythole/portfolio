export type TProjectCategory = {
  label: string;
  value: string;
}

export type TProject = {
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
  github?: string;
  tags: string[];
}
