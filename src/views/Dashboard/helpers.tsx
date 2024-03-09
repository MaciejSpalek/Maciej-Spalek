import React from "react";
import { DashboardSteps } from "helpers";
import { CraftsForm, HomePageForm } from "./components";
import { DashboardStepTypes, IHome } from "types";

export const staticHomeInitialValues = {
  home: {
    header: {
      first_photo: null,
      second_photo: null,
      description: null,
    },
    about: {
      photo: null,
      description: null,
    },
  },
};

interface IProps {
  step: DashboardStepTypes;
  homeDefaultValues: IHome;
  craftsDefaultValues: any[]
}

export const getStep = ({ step, homeDefaultValues, craftsDefaultValues }: IProps) => {
  switch (step) {
    case DashboardSteps.HOME: {
      return <HomePageForm defaultValues={homeDefaultValues} />;
    }

    case DashboardSteps.CRAFTS: {
      return <CraftsForm defaultValues={craftsDefaultValues} />;
    }

    case DashboardSteps.POSTS: {
      return <CraftsForm defaultValues={craftsDefaultValues} />;
    }

    case DashboardSteps.IMAGES: {
      return <></>
    }
  }
};
