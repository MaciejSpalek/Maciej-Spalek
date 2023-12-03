import React, { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  error?: string;
  touched?: boolean;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  register: any;
}

