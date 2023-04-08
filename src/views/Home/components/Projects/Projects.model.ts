import { IProjectCard } from "types";

export interface ProjectsProps {
  list: IProjectCard[];
  loading: boolean;
  error: boolean;
}
