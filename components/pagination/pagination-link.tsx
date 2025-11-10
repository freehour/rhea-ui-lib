import type { ComponentProps, FunctionComponent } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { Button } from '@/components/button';


export interface PaginationLinkProps extends ComponentProps<'a'> {
    isActive?: boolean;
    disabled?: boolean;
    size?: ComponentProps<typeof Button>['size'];
    asChild?: boolean;
}

/**
 * Renders a pagination link.
 * **Note:** Uses `<a>` as the default link element, but can be customized with `asChild`.
 *
 * @example
 * <PaginationLink isActive href="/page-1">1</PaginationLink>
 *
 * <PaginationLink size="default" asChild>
 *      <CustomLink href="/next-page">
 *          <PaginationNextLabel>Next</PaginationNextLabel>
 *      </CustomLink>
 * </PaginationLink>
 */
export const PaginationLink: FunctionComponent<PaginationLinkProps> = ({
    isActive = false,
    disabled = false,
    size = 'icon',
    asChild = false,
    href,
    ...props
}) => {
    // TODO: Replace <a> with a custom Link component (supporting disabled)

    const Comp = asChild ? Slot : 'a';

    return (
        <Button
            size={size}
            variant={isActive ? 'outline' : 'ghost'}
            disabled={disabled}
            asChild
        >
            <Comp
                aria-current={isActive ? 'page' : undefined}
                data-slot="pagination-link"
                data-active={isActive}
                href={disabled ? undefined : href}
                {...props}
            />
        </Button>
    );
};
