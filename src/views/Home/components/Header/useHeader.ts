import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { animationParams, URLS } from "helpers";
import { gsap } from "gsap";

export const useHeader = () => {
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);
  const rightImageRef = useRef(null);
  const leftImageRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const { push } = useRouter();

  const handleOnClick = () => push(URLS.contact);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      {
        duration: animationParams.duration/2,
        opacity: 0,

        ease: "ease",
      },
      {
        duration: animationParams.duration,
        opacity: 1,
        delay: 0.25,
        ease: "ease",
      }
    );

    gsap.fromTo(
      headingRef.current,
      {
        duration: animationParams.duration,
        y: -200,
        opacity: 0,
        ease: "ease",
      },
      {
        duration: animationParams.duration,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "ease",
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      {
        y: -100,
        opacity: 0,
        ease: "ease",
        duration: animationParams.duration,
      },
      {
        y: 0,
        opacity: 1,
        duration: animationParams.duration,

        delay: 1.5,
        ease: "ease",
      }
    );

    gsap.fromTo(
      buttonRef.current,
      {
        y: -100,
        opacity: 0,
        duration: animationParams.duration,
        ease: "ease",
      },
      {
        y: 0,
        opacity: 1,
        delay: 2,
        duration: animationParams.duration,
        ease: "ease",
      }
    );

    gsap.fromTo(
      leftImageRef.current,
      {
        x: -200,
        opacity: 0,
        ease: "ease",
        duration: animationParams.duration,
      },
      {
        x: 0,
        opacity: 1,
        delay: 2.5,
        ease: "ease",
        duration: animationParams.duration,
      }
    );

    gsap.fromTo(
      rightImageRef.current,
      {
        x: 200,
        opacity: 0,
        duration: animationParams.duration,
        ease: "ease",
      },
      {
        x: 0,
        opacity: 1,
        ease: "ease",
        duration: animationParams.duration,
        delay: 2.5,
      }
    );
  }, []);

  return {
    rightImageRef,
    leftImageRef,
    containerRef,
    paragraphRef,
    headingRef,
    buttonRef,
    handleOnClick,
  };
};
