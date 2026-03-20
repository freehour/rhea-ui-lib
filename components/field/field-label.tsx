import type { FunctionComponent } from 'react';

import type { LabelProps } from '@/components/label';
import { Label } from '@/components/label';
import { cn } from '@/utils/cn';


export interface FieldLabelProps extends LabelProps {
}

export const FieldLabel: FunctionComponent<FieldLabelProps> = ({
    className,
    ...props
}) => (
    <Label
        data-slot="field-label"
        className={cn(
            `
            group/field-label
            peer/field-label
            flex
            w-fit
            gap-2
            leading-snug
            group-data-[disabled=true]/field:opacity-50
            has-data-checked:border-primary/30
            has-data-checked:bg-primary/5
            has-[>[data-slot=field]]:w-full
            has-[>[data-slot=field]]:flex-col
            has-[>[data-slot=field]]:rounded-lg
            has-[>[data-slot=field]]:border
            *:data-[slot=field]:p-2.5
            dark:has-data-checked:border-primary/20
            dark:has-data-checked:bg-primary/10
            `,
            className,
        )}
        {...props}
    />
);
