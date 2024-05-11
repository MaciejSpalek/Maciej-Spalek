import React from "react";

export interface ITextarea extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  error?: string;
  rows?: number;
  register: any;

}
