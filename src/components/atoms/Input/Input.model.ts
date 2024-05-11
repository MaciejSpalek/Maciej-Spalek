import React, { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  error?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  register: any;
}

