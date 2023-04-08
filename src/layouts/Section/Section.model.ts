import { ReactElement } from "react";

export interface SectionProps {
  children: ReactElement[] | ReactElement;
  isLoading: boolean;
  isError: boolean;
  title: string;
  icon: any;
}
