import {
    CircleCheckIcon,
    InfoIcon,
    Loader2Icon,
    OctagonXIcon,
    TriangleAlertIcon,
} from 'lucide-react';
import type { CSSProperties, FunctionComponent } from 'react';
import * as SonnerPrimitive from 'sonner';

import { useTheme } from '@/theme/use-theme';


export interface ToasterProps extends SonnerPrimitive.ToasterProps {
}

export const Toaster: FunctionComponent<ToasterProps> = props => {
    const { theme = 'system' } = useTheme();

    return (
        <SonnerPrimitive.Toaster
            theme={theme}
            className="group"
            icons={{
                success: <CircleCheckIcon className="size-4" />,
                info: <InfoIcon className="size-4" />,
                warning: <TriangleAlertIcon className="size-4" />,
                error: <OctagonXIcon className="size-4" />,
                loading: <Loader2Icon className="size-4 animate-spin" />,
            }}
            style={{
                '--normal-bg': 'var(--popover)',
                '--normal-text': 'var(--popover-foreground)',
                '--normal-border': 'var(--border)',
                '--border-radius': 'var(--radius)',
            } as CSSProperties}
            {...props}
        />
    );
};
