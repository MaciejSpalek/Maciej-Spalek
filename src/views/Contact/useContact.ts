import { useLayoutEffect, useRef } from "react";
import { animationParams } from "helpers";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const useContact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formWrapperRef = useRef<HTMLFormElement>(null);
  const leftWrapperRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);

  // Header animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          y: "+=300",
        },
        {
          y: 0,
          duration: animationParams.duration,
          opacity: 1,
        }
      );

      gsap.fromTo(
        titleRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          duration: animationParams.duration,
          opacity: 1,
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
        }
      );

      gsap.fromTo(
        leftWrapperRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          delay: .25
        }
      );
      gsap.fromTo(
        formWrapperRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          delay: .25
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return {
    leftWrapperRef,
    formWrapperRef,
    containerRef,
    subtitleRef,
    titleRef,
  };
};
