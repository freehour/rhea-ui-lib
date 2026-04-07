import type { RefObject } from 'react';
import { useEffect, useEffectEvent } from 'react';


// MediaQueryList Event based useEventListener interface
export function useEventListener<K extends keyof MediaQueryListEventMap>(
    eventName: K,
    handler: (event: MediaQueryListEventMap[K]) => void,
    element: RefObject<MediaQueryList | null>,
    options?: boolean | AddEventListenerOptions,
): void;

// Window Event based useEventListener interface
export function useEventListener<K extends keyof WindowEventMap>(
    eventName: K,
    handler: (event: WindowEventMap[K]) => void,
    element?: undefined,
    options?: boolean | AddEventListenerOptions,
): void;

// Element Event based useEventListener interface
export function useEventListener<
    K extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
    T extends Element = K extends keyof HTMLElementEventMap
        ? HTMLDivElement
        : SVGElement,
>(
    eventName: K,
    handler:
    | ((event: HTMLElementEventMap[K]) => void)
    | ((event: SVGElementEventMap[K]) => void),
    element: RefObject<T | null>,
    options?: boolean | AddEventListenerOptions,
): void;

// Document Event based useEventListener interface
export function useEventListener<K extends keyof DocumentEventMap>(
    eventName: K,
    handler: (event: DocumentEventMap[K]) => void,
    element: RefObject<Document | null>,
    options?: boolean | AddEventListenerOptions,
): void;

/**
 * Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
 * @template KW The type of event for window events.
 * @template KH The type of event for HTML or SVG element events.
 * @template KM The type of event for media query list events.
 * @template T The type of the DOM element (default is `HTMLElement`).
 * @param eventName The name of the event to listen for.
 * @param handler The event handler function.
 * @param element The DOM element or media query list to attach the event listener to (optional).
 * @param options An options object that specifies characteristics about the event listener (optional).
 * @example
 * ```tsx
 * // Example 1: Attach a window event listener
 * useEventListener('resize', handleResize);
 * ```
 * @example
 * ```tsx
 * // Example 2: Attach a document event listener with options
 * const elementRef = useRef(document);
 * useEventListener('click', handleClick, elementRef, { capture: true });
 * ```
 * @example
 * ```tsx
 * // Example 3: Attach an element event listener
 * const buttonRef = useRef<HTMLButtonElement>(null);
 * useEventListener('click', handleButtonClick, buttonRef);
 * ```
 */
export function useEventListener<
    KW extends keyof WindowEventMap,
    KH extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
    KM extends keyof MediaQueryListEventMap,
    T extends HTMLElement | SVGAElement | MediaQueryList = HTMLElement,
>(
    eventName: KW | KH | KM,
    handler: (
        event:
            | WindowEventMap[KW]
            | HTMLElementEventMap[KH]
            | SVGElementEventMap[KH]
            | MediaQueryListEventMap[KM]
            | Event,
    ) => void,
    element?: RefObject<T | null>,
    options?: boolean | AddEventListenerOptions,
): void {
    const listener = useEffectEvent(handler);

    useEffect(() => {
        const targetElement: T | Window = element?.current ?? window;
        targetElement.addEventListener(eventName, listener, options);
        return () => {
            targetElement.removeEventListener(eventName, listener, options);
        };
    }, [eventName, element, options]);
}
