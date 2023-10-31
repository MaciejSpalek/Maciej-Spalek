import { useEffect } from "react";
import { useIntersectionObserver } from "hooks";
import { animationParams } from "helpers";
import { gsap } from "gsap";

export const useAbout = () => {
  const { ref: leftBoxRef, alreadyShown: isLeftBoxVisible } =
    useIntersectionObserver({ threshold: 0.5 });

  const { ref: rightBoxRef, alreadyShown: isRightBoxVisible } =
    useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    gsap.set(leftBoxRef.current, {
      opacity: 0,
    });

    if (isLeftBoxVisible) {
      gsap.fromTo(
        leftBoxRef.current,
        {
          x: -500,
          delay: 0.5,
          duration: animationParams.duration,
          ease: "ease",
        },
        {
          x: 0,
          opacity: 1,
          duration: animationParams.duration,
          ease: "ease",
        }
      );
    }
  }, [isLeftBoxVisible]);

  useEffect(() => {
    gsap.set(rightBoxRef.current, {
      opacity: 0,
    });

    if (isRightBoxVisible) {
      gsap.fromTo(
        rightBoxRef.current,
        {
          x: 1000,
          duration: animationParams.duration,
          ease: "ease",
        },
        {
          x: 0,
          opacity: 1,
          duration: animationParams.duration,
          ease: "ease",
        }
      );
    }
  }, [isRightBoxVisible]);

  return {
    rightBoxRef,
    leftBoxRef,
  };
};
