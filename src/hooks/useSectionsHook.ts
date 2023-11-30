import { useEffect, useRef } from "react";
import { animationParams } from "helpers";
import { useIntersectionObserver } from "./useIntersectionObserver";
import { gsap } from "gsap";

export const useSectionsHook = () => {
  // const { ref: containerRef, alreadyShown: isContainerVisible } =
  //   useIntersectionObserver({ threshold: 0.25 });

  // const { ref: headingRef, alreadyShown: isHeadingVisible } =
  //   useIntersectionObserver({ threshold: 0.5 });

  const containerRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: animationParams.duration,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        y: "+=100",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: animationParams.duration,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
        },
      }
    );
  }, []);

  return { containerRef, headingRef };
};
