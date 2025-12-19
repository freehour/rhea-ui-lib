import type { ComponentProps, CSSProperties, FunctionComponent } from 'react';
import { useMemo } from 'react';

import type { TailwindColorFamily } from '@/types';
import type { OmitFrom } from '@/types/from';
import { cn } from '@/utils/cn';

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
    className,
    ...props
}) => {
    const initials = useMemo(() => props.initials.slice(0, 2).toUpperCase(), [props.initials]);
    const css = useMemo(() => {
        const family = color ?? avatarColorFamily(initials);
        const bgValue = variant === 'light' ? 100 : 200;
        return {
            backgroundColor: `var(--color-${family}-${bgValue})`,
            color: `var(--color-${family}-950)`,
            ...style,
        } as CSSProperties;
    }, [color, initials, style, variant]);

    return (
        <span
            style={css}
            className={cn('text-sm', className)}
            {...props}
        >
            {initials}
        </span>
    );
};
