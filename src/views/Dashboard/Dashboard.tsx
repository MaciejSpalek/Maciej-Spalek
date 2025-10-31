import { DashboardSteps, URLS } from "helpers";
import { Protected } from "layouts/Protected";
import { useRouter } from "next/router";
import { useState } from "react";
import type { DashboardStepTypes, ICraft, IHome } from "types";
import { Navigation } from "./components";
import {
	ArrowButton,
	Container,
	Heading,
	StyledLeftRectangleArrowIcon,
	TopBar,
	Wrapper,
} from "./Dashboard.styled";
import { getStep } from "./helpers";

interface IProps {
	crafts: ICraft[];
	home: IHome;
}

export const Dashboard = ({ home, crafts }: IProps) => {
	const homeDefaultValues: any = { home };
	const craftsDefaultValues: any = { crafts };
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
