import { DashboardStepTypes } from "types";

export interface INavigation {
  step: DashboardStepTypes;
  setStep: (element: DashboardStepTypes) => void;
}
