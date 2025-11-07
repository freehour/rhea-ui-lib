import type { ComponentProps, FunctionComponent } from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/utils/cn';


export interface LabelProps extends ComponentProps<typeof LabelPrimitive.Root> {
}

export const Label: FunctionComponent<LabelProps> = ({
    className,
    ...props
}) => (
    <LabelPrimitive.Root
        data-slot="label"
        className={cn(
            `
            flex
            items-center
            gap-2
            text-sm
            leading-none
            font-medium
            select-none
            group-data-[disabled=true]:pointer-events-none
            group-data-[disabled=true]:opacity-50
            peer-disabled:cursor-not-allowed
            peer-disabled:opacity-50
            `,
            className,
        )}
        {...props}
    />
);
