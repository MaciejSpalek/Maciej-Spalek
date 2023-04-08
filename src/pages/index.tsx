import React from "react";
import { Home } from "views";

import { useQuery } from "@apollo/client";

import { GET_SECTIONS_QUERY } from "queries";
import { convertSections } from "helpers";

export default Home;
