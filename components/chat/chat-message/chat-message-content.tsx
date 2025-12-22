import type { ComponentProps, CSSProperties, FunctionComponent } from 'react';

import { useIsMultiline } from '@/hooks/use-is-multiline';
import type { TailwindColorFamily } from '@/types/color';
import type { OmitFrom } from '@/types/from';
import { cn } from '@/utils/cn';


export interface ChatMessageContentProps extends OmitFrom<ComponentProps<'div'>, 'color'> {
    color?: TailwindColorFamily;
}

export const ChatMessageContent: FunctionComponent<ChatMessageContentProps> = ({
    className,
    color,
    ...props
}) => {
    const { ref, isMultiline } = useIsMultiline<HTMLDivElement>();

    return (
        <div
            ref={ref}
            data-multiline={isMultiline === true ? true : undefined}
            style={
                color
                    ? {
                        '--message-background-color': `var(--color-${color}-100)`,
                        '--message-border-color': `var(--color-${color}-200)`,
                        '--message-foreground-color': `var(--color-${color}-950)`,
                    } as CSSProperties
                    : {
                        '--message-background-color': 'var(--color-secondary)',
                        '--message-border-color': 'var(--color-border)',
                        '--message-foreground-color': 'var(--color-foreground)',
                    } as CSSProperties
            }
            className={cn(
                `
                relative
                flex
                flex-col
                gap-2
                rounded-xl
                border
                border-(--message-border-color)
                bg-(--message-background-color)
                px-4
                py-1.5
                text-(--message-foreground-color)
                data-multiline:py-3
                `,
                className,
            )}
            {...props}
        />
    );
};
