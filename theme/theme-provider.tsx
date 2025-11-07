import type { FunctionComponent, PropsWithChildren } from 'react';
import { useEffect, useMemo } from 'react';

import { useLocalStorage } from '@/hooks/use-local-storage';

import type { Theme } from './theme-context';
import { ThemeContext } from './theme-context';


export type ThemeProviderProps = PropsWithChildren<{
    defaultTheme?: Theme;
    storageKey: string;
}>;

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
    children,
    defaultTheme = 'system',
    storageKey,
    ...props
}) => {
    const [theme, setTheme] = useLocalStorage<Theme>(storageKey, defaultTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';

            root.classList.add(systemTheme);
            return;
        }
        root.classList.add(theme);
    }, [theme]);

    const value: ThemeContext = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme, setTheme],
    );

    return (
        <ThemeContext.Provider {...props} value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
