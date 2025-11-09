import type { ComponentProps, FunctionComponent } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { Button } from '@/components/button';


export interface PaginationLinkProps extends ComponentProps<'a'> {
    isActive?: boolean;
    size?: ComponentProps<typeof Button>['size'];
    asChild?: boolean;
}

export const PaginationLink: FunctionComponent<PaginationLinkProps> = ({
    isActive = false,
    size = 'icon',
    asChild = false,
    ...props
}) => {
    const Comp = asChild ? Slot : 'a';

    return (
        <Button
            size={size}
            variant={isActive ? 'outline' : 'ghost'}
            asChild
        >
            <Comp
                aria-current={isActive ? 'page' : undefined}
                data-slot="pagination-link"
                data-active={isActive}
                {...props}
            />
        </Button>
    );
};
