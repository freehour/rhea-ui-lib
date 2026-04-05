import { useCallback, useEffect, useState } from 'react';


type CopyFn = (text: string) => Promise<void>;

/**
 * Custom hook to copy text to the clipboard and track the copied state.
 * It provides a function to copy text and a boolean indicating whether the text has been copied.
 * The copied state resets after a specified delay.
 * This can be used in components like a copy button to provide user feedback when content is copied to the clipboard.
 *
 * @param delay The delay in milliseconds before resetting the copied state (default is 2000ms).
 * @returns A tuple with the copy function and the copied state.
 */
export function useCopyToClipboard(delay = 2000): [CopyFn, boolean] {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (!isCopied) {
            return undefined;
        }

        const timer = setTimeout(() => {
            setIsCopied(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [isCopied, delay]);

    const copy: CopyFn = useCallback(async text => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
    }, []);

    return [copy, isCopied];
}
