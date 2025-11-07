import type { ComponentProps, CSSProperties, FunctionComponent } from 'react';
import { useMemo } from 'react';

import type { TailwindColor, TailwindColorFamily } from '@/types/color';
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

interface AvatarColor {
    base: TailwindColor;
    contrast: TailwindColor;
}

function color(initials: string): AvatarColor {
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

    const base = `${family}-200` as TailwindColor;
    const contrast = `${family}-950` as TailwindColor;

    return { base, contrast };
}

export interface AvatarInitialsProps extends ComponentProps<'span'> {
    initials: string;
}

/**
 * Renders the initials of a user as an avatar.
 * The initials are styled with a background color based on the initials.
 *
 * @example
 * <AvatarFallback asChild>
 *    <AvatarInitials initials="JD" />
 * </AvatarFallback>
 */
export const AvatarInitials: FunctionComponent<AvatarInitialsProps> = ({
    style,
    ...props
}) => {
    const initials = useMemo(() => props.initials.slice(0, 2).toUpperCase(), [props.initials]);
    const { base, contrast } = useMemo(() => color(initials), [initials]);

    return (
        <span
            style={
                {
                    backgroundColor: `var(--color-${base})`,
                    color: `var(--color-${contrast})`,
                    ...style,
                } as CSSProperties
            }
            {...props}
        >
            {initials}
        </span>
    );
};
