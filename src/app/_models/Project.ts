import { Tag } from "./Tag";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  pictures: string[];
  projectLink: string;
  tags: Tag[];
}
