import { useCallback, useEffect, useState } from 'react';


type CopyFn = (text: string) => Promise<void>;

export function useCopyToClipboard(delay = 2000): [CopyFn, boolean] {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (!isCopied) {
            return;
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
