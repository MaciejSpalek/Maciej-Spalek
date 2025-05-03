import { useEffect, useRef } from "react";
import { animationParams } from "helpers";
import { gsap } from "gsap";

export const useSectionsHook = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

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
