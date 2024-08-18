import { useState } from "react";
import { useRouter } from "next/router";

import {
  ArrowButton,
  Container,
  Wrapper,
  Heading,
  TopBar,
  StyledLeftRectangleArrowIcon,
} from "./Dashboard.styled";
import { getStep, staticHomeInitialValues } from "./helpers";
import { DashboardStepTypes, ICraft, IHome } from "types";
import { DashboardSteps, URLS } from "helpers";
import { Protected } from "layouts/Protected";
import { Navigation } from "./components";

interface IProps {
  crafts: ICraft[];
  home: IHome;
}

export const Dashboard = ({ home, crafts }: IProps) => {
  const homeDefaultValues: any = { home } || staticHomeInitialValues;
  const craftsDefaultValues: any = { crafts } || [];
  const { push } = useRouter();

  const [step, setStep] = useState<DashboardStepTypes>(DashboardSteps.HOME);

  const goToWebPage = () => push(URLS.home);

  return (
    <Protected>
      <Container>
        <TopBar>
          <Wrapper>
            <ArrowButton onClick={goToWebPage}>
              <StyledLeftRectangleArrowIcon />
            </ArrowButton>
            <Heading>Dashboard</Heading>
          </Wrapper>
          <Navigation step={step} setStep={setStep} />
        </TopBar>
        {getStep({
          craftsDefaultValues,
          homeDefaultValues,
          step,
        })}
      </Container>
    </Protected>
  );
};
