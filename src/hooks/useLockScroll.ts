import { useEffect, useState } from "react";

export const useLockScroll = () => {
  const bodyStyle = document.body.style;
  const [locked, setLocked] = useState(bodyStyle.overflowY === "auto");

  const toggle = () => setLocked((prev) => !prev);

  useEffect(() => {
    bodyStyle.overflowY = locked ? "hidden" : "auto";
  }, [locked]);

  return { locked, toggle };
};
