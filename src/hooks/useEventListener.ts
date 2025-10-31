import { type RefObject, useEffect, useRef } from "react";

export const useEventListener = <T extends HTMLElement = HTMLDivElement>(
	eventName: string,
	handler: (event: Event) => void,
	element?: RefObject<T>,
) => {
	const savedHandler = useRef<(event: Event) => void>();

	useEffect(() => {
		const targetElement: T | Window = element?.current || window;

		if (!targetElement?.addEventListener) return;

		savedHandler.current = handler;

		const eventListener = (event: Event) => {
			savedHandler.current?.(event);
		};

		targetElement.addEventListener(eventName, eventListener);

		return () => {
			targetElement.removeEventListener(eventName, eventListener);
		};
	}, [eventName, element, handler]);
};
