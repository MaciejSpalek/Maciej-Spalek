import React from "react";

export interface ITextarea extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  error?: string;
  touched?: boolean;
  rows?: number;
  register: any;

}
