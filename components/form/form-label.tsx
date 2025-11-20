import type { ComponentProps, FunctionComponent } from 'react';

import type * as LabelPrimitive from '@radix-ui/react-label';

import { Label } from '@/components/label';
import { cn } from '@/utils/cn';

import { useFormField } from './use-form-field';


export interface FormLabelProps extends ComponentProps<typeof LabelPrimitive.Root> {
}

export const FormLabel: FunctionComponent<FormLabelProps> = ({
    className,
    ...props
}) => {
    const { error, formItemId } = useFormField();

    return (
        <Label
            data-slot="form-label"
            data-error={error !== undefined}
            htmlFor={formItemId}
            className={cn('data-[error=true]:text-destructive', className)}
            {...props}
        />
    );
};
