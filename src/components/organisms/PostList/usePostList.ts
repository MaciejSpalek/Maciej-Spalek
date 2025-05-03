import { useLayoutEffect, useRef } from "react";
import { animationParams } from "helpers";
import { gsap } from "gsap";
import { useIsMobileView } from "hooks";

export const usePostList = () => {
  const isMobileView = useIsMobileView();
  const imageRef = useRef(null);
  const listRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (!isMobileView) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          imageRef.current,
          {
            y: "+=100",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: animationParams.duration,
            delay: 0.5,
          }
        );

        gsap.fromTo(
          listRef.current,
          {
            y: "+=100",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: animationParams.duration,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top bottom",
            },
          }
        );
      });

      return () => ctx.revert();
    }
  }, [isMobileView]);

  return {
    imageRef,
    listRef,
  };
};
