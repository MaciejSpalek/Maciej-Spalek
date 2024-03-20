import { useLayoutEffect, useRef } from "react";
import { animationParams } from "helpers";
import { gsap } from "gsap";
import { useIsMobileView } from "hooks";

export const useFooter = () => {
  const isMobileView = useIsMobileView();
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const secondWrapperRef = useRef(null);
  const copyrightWrapperRef = useRef(null);

  // Sections
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          y: "+=300",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: containerRef.current,
            start: isMobileView ? "top bottom" : "-50px bottom",
          },
        }
      );

      gsap.fromTo(
        headingRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          delay: 0.25,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "-200px bottom",
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "-200px bottom",
          },
        }
      );

      gsap.fromTo(
        secondWrapperRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: secondWrapperRef.current,
            start: "top bottom",
          },
        }
      );

      gsap.fromTo(
        copyrightWrapperRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: copyrightWrapperRef.current,
            start: "-300px bottom",
          },
        }
      );
    });

    return () => ctx.revert();
    
    //eslint-disable-next-line
  }, []);

  return {
    secondWrapperRef,
    copyrightWrapperRef,
    containerRef,
    headingRef,
    buttonRef,
  };
};
