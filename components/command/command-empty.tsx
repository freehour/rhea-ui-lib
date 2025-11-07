import type { ComponentProps, FunctionComponent } from 'react';
import { Command as CommandPrimitive } from 'cmdk';


export interface CommandEmptyProps extends ComponentProps<typeof CommandPrimitive.Empty> {}

export const CommandEmpty: FunctionComponent<CommandEmptyProps> = props => (
    <CommandPrimitive.Empty
        data-slot="command-empty"
        className={`
            py-6
            text-center
            text-sm
        `}
        {...props}
    />
);
