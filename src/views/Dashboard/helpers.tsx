import React from "react";
import { DashboardSteps } from "helpers";
import { ArticleForm, CraftsForm, HomePageForm, PostForm } from "./components";
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

interface GetStepProps {
  step: DashboardStepTypes;
  homeDefaultValues: IHome;
  craftsDefaultValues: any[];
}

export const getStep = ({
  craftsDefaultValues,
  homeDefaultValues,
  step,
}: GetStepProps) => {
  switch (step) {
    case DashboardSteps.HOME: {
      return <HomePageForm defaultValues={homeDefaultValues} />;
    }

    case DashboardSteps.CRAFTS: {
      return <CraftsForm defaultValues={craftsDefaultValues} />;
    }

    case DashboardSteps.POSTS: {
      return <PostForm />;
    }
    case DashboardSteps.ARTICLES: {
      return <ArticleForm />;
    }
  }
};
