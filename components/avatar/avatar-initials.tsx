import type { ComponentProps, CSSProperties, FunctionComponent } from 'react';
import { useMemo } from 'react';

import type { TailwindColorFamily } from '@/types';
import type { OmitFrom } from '@/types/from';

import { avatarColorFamily } from './avatar-color';


export interface AvatarInitialsProps extends OmitFrom<ComponentProps<'span'>, 'color'> {
    initials: string;
    color?: TailwindColorFamily;
    variant?: 'light' | 'default';
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
    color,
    variant = 'default',
    style,
    ...props
}) => {
    const initials = useMemo(() => props.initials.slice(0, 2).toUpperCase(), [props.initials]);
    const family = useMemo(() => color ?? avatarColorFamily(initials), [color, initials]);
    const bgValue = variant === 'light' ? 100 : 200;

    return (
        <span
            style={
                {
                    backgroundColor: `var(--color-${family}-${bgValue})`,
                    color: `var(--color-${family}-950)`,
                    ...style,
                } as CSSProperties
            }
            {...props}
        >
            {initials}
        </span>
    );
};
