import { ReactElement } from "react";

export interface SectionProps {
  children: ReactElement[] | ReactElement;
  isLoading: boolean;
  title: string;
}
