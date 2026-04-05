import type { ComponentProps, FunctionComponent } from 'react';

import type { OmitFrom } from '@/types/from';


export interface LinkProps extends OmitFrom<ComponentProps<'a'>, 'aria-disabled'> {
    disabled?: boolean;
}


export const Link: FunctionComponent<LinkProps> = ({
    disabled = false,
    href,
    ...props
}) => (
    <a
        data-slot="link"
        aria-disabled={disabled}
        href={disabled ? undefined : href}
        {...props}
    />
);
