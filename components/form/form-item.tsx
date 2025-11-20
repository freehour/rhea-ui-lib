import type { ComponentProps, FunctionComponent } from 'react';
import { useId, useMemo } from 'react';

import { cn } from '@/utils/cn';

import { FormItemContext } from './form-item-context';


export interface FormItemProps extends ComponentProps<'div'> {}

export const FormItem: FunctionComponent<FormItemProps> = ({
    className,
    ...props
}) => {
    const id = useId();
    const value = useMemo(() => ({ id }), [id]);

    return (
        <FormItemContext.Provider value={value}>
            <div
                data-slot="form-item"
                className={cn('grid gap-2', className)}
                {...props}
            />
        </FormItemContext.Provider>
    );
};
