import type { ComponentProps, FunctionComponent } from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';

import { InputGroup, InputGroupAddon } from '@/components/input-group';
import { cn } from '@/utils/cn';


export interface CommandInputProps extends ComponentProps<typeof CommandPrimitive.Input> {
}

export const CommandInput: FunctionComponent<CommandInputProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="command-input-wrapper"
        className={cn(`
            p-1
            pb-0
        `)}
    >
        <InputGroup
            className={cn(`
                h-8!
                rounded-lg!
                border-input/30
                bg-input/30
                shadow-none!
                *:data-[slot=input-group-addon]:pl-2!
            `)}
        >
            <CommandPrimitive.Input
                data-slot="command-input"
                className={cn(
                    `
                    w-full
                    text-sm
                    outline-hidden
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    `,
                    className,
                )}
                {...props}
            />
            <InputGroupAddon>
                <SearchIcon
                    className={cn(`
                        size-4
                        shrink-0
                        opacity-50
                    `)}
                />
            </InputGroupAddon>
        </InputGroup>
    </div>
);
