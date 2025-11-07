import { createContext } from 'react';


export type Theme = 'light' | 'dark' | 'system';
export type SetTheme = (theme: Theme) => void;

export interface ThemeContext {
    theme: Theme;
    setTheme: SetTheme;
}

export const ThemeContext = createContext<ThemeContext>({
    theme: 'system',
    setTheme: () => {},
});
