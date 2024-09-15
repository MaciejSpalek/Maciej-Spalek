import React from "react";
import { useRouter } from "next/router";
import _ from "lodash";

import { PostPreviewProps } from "./components/Wrapper/PostPreview.model";
import { Wrapper } from "./components";

export const PostPreview = ({ list }: PostPreviewProps) => {
  const router = useRouter();
  const listIds = list.map(({ _id }) => _id);
  const isOpen = null != router.query.photo && null != listIds;

  if (!isOpen) return null;

  return <Wrapper list={list}/>;
};
