import { useState } from "react";
import { Navigation } from "./components";

import { Container, Heading, TopBar } from "./Dashboard.styled";

import { getStep, staticHomeInitialValues } from "./helpers";
import { DashboardSteps } from "helpers";
import { ICraft, IHome } from "types";

interface IProps {
  home: IHome;
  crafts: ICraft;
}

export const Dashboard = ({ home, crafts }: IProps) => {
  const homeDefaultValues: any = { home } || staticHomeInitialValues;
  const craftsDefaultValues: any = { crafts } || [];
  const [step, setStep] = useState(DashboardSteps.HOME);

  return (
    <Container>
      <TopBar>
        <Heading>Dashboard</Heading>
        <Navigation step={step} setStep={setStep} />
      </TopBar>
      {getStep({ step, homeDefaultValues, craftsDefaultValues })}
    </Container>
  );
};
