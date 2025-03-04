import { UseFormRegister } from "react-hook-form";
import { IArticle } from "types";

export interface BlockProps {
  index: number;
  register: UseFormRegister<IArticle>;
  setValue: (name: keyof IArticle, value: string) => void;
}
