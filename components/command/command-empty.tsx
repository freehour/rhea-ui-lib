import { Command as CommandPrimitive } from 'cmdk';
import type { ComponentProps, FunctionComponent } from 'react';


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
