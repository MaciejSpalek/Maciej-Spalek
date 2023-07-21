import { useEffect, useRef, useState } from "react";
import { IntersectionObserverConfig, IntersectionObserverReturn } from "types";

/**
 * Hook responsible for detecting the moment
 * when the user is near a particular HTML element.
 *
 * @param {IntersectionObserverConfig} - Configuration object.
 * @returns {IntersectionObserverReturn} - API that any component will use.
 */
export const useIntersectionObserver = <T extends HTMLElement>(
  config: IntersectionObserverConfig = {}
): IntersectionObserverReturn<T> => {
  const { threshold, root, rootMargin } = config;

  // Stores a reference to the HTML element that will be observed.
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isClient = typeof window !== "undefined";

    if (!isClient) return;

    const isSupported = "IntersectionObserver" in window;

    if (!isSupported) {
      console.error(
        "IntersectionObserver is not supported. Try to use polyfill."
      );
      return;
    }

    const listen: IntersectionObserverCallback = ([entry]) => {
      setVisible(entry.isIntersecting);
    };

    const currentRef = ref.current;
    const observer = new IntersectionObserver(listen, {
      threshold,
      root,
      rootMargin,
    });

    currentRef && observer.observe(currentRef);

    return () => {
      currentRef && observer.unobserve(currentRef);
    };
  }, [threshold, root, rootMargin]);

  return { ref, visible };
};
