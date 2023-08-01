import React from "react";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  error?: string;
  touched?: boolean;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  register: (id: string) => void;
}
