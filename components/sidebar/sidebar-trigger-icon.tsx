import type { FunctionComponent, RefAttributes } from 'react';
import type { LucideProps } from 'lucide-react';
import { MenuIcon, PanelLeftIcon, PanelRightIcon, XIcon } from 'lucide-react';

import { useIsMobile } from '@/hooks/use-device';
import type { OmitFrom } from '@/types/from';

import { useSidebar } from './use-sidebar';


export interface SidebarTriggerIconProps extends OmitFrom<LucideProps, 'ref'>, RefAttributes<SVGSVGElement> {
    side?: 'left' | 'right';
}

export const SidebarTriggerIcon: FunctionComponent<SidebarTriggerIconProps> = ({
    side = 'left',
    ...props
}) => {
    const isMobile = useIsMobile();
    const sidebar = useSidebar();

    if (isMobile) {
        return sidebar.isOpen ? <XIcon {...props} /> : <MenuIcon {...props} />;
    }
    return side === 'left' ? <PanelLeftIcon {...props} /> : <PanelRightIcon {...props} />;
};
