import type { TailwindColorFamily } from '@/types/color';
import { colorPalette } from '@/types/color';
import { hashString } from '@/utils/hash';


export function badgeColorFamily(value: string): TailwindColorFamily {
    const hash = hashString(value);
    return colorPalette[hash % colorPalette.length];
}
