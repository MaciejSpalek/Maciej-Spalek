import { useState } from "react";
import { useRouter } from "next/router";

import {
  Container,
  Heading,
  TopBar,
  Wrapper,
  ArrowButton,
} from "./Dashboard.styled";
import { getStep, staticHomeInitialValues } from "./helpers";
import { LeftRectangleArrowIcon } from "assets";
import { DashboardSteps, URLS } from "helpers";
import { Protected } from "layouts/Protected";
import { Navigation } from "./components";
import { ICraft, IHome } from "types";

interface IProps {
  crafts: ICraft;
  home: IHome;
}

export const Dashboard = ({ home, crafts }: IProps) => {
  const homeDefaultValues: any = { home } || staticHomeInitialValues;
  const craftsDefaultValues: any = { crafts } || [];
  const { push } = useRouter();

  const [step, setStep] = useState(DashboardSteps.HOME);

  const goToWebPage = () => push(URLS.home);

  return (
    <Protected>
      <Container>
        <TopBar>
          <Wrapper>
            <ArrowButton onClick={goToWebPage}>
              <LeftRectangleArrowIcon />
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
