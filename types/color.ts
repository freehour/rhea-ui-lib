
export const tailwindColors = [
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
    'stone',
    'neutral',
    'zinc',
    'gray',
    'slate',
] as const;

export type TailwindColorFamily = typeof tailwindColors[number];
export type TailwindColor = `${(typeof tailwindColors)[number]}-${50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}`;
