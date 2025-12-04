import type { ComponentProps, CSSProperties, FunctionComponent } from 'react';
import { useMemo } from 'react';

import { avatarColor } from './avatar-color';


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
    const { base, contrast } = useMemo(() => avatarColor(initials), [initials]);

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
