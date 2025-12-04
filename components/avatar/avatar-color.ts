import type { TailwindColorFamily } from '@/types/color';
import { tailwindColors } from '@/types/color';


function letterToIndex(ch: string): number {
    if (!ch) {
        return 0;
    }
    const code = ch.codePointAt(0) ?? 0;
    if (/[A-Z]/.test(ch)) {
        return code - 65;
    }
    if (/[a-z]/.test(ch)) {
        return code - 97;
    }
    return Math.abs(code) % 26;
}

/**
 * Maps two letters to one of the Tailwind color families deterministically.
 */
function twoLettersToTailwindColorFamily(
    a: string,
    b: string,
    palette:
    readonly TailwindColorFamily[] = tailwindColors,
): TailwindColorFamily {
    const i1 = letterToIndex(a);
    const i2 = letterToIndex(b);

    // Combine into deterministic index
    const combined = (i1 * 26) + i2;

    // Distribute uniformly across available colors
    const color = palette[combined % palette.length];
    return color;
}

export function avatarColorFamily(initials: string): TailwindColorFamily {
    const family = twoLettersToTailwindColorFamily(
        initials.charAt(0),
        initials.charAt(1),
        [
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
        ],
    );

    return family;
}
