import { useMemo } from 'react';

import { range } from '@/utils/range';


export type PageItem = number | 'left(...)' | 'right(...)';

export interface PaginationOptions {
    /**
     * The current page number, starting from 1.
     */
    currentPage: number;

    /**
     * The total number of pages available.
     */
    totalPages: number;

    /**
     * The size of the window around the current page to display.
     * Defaults to 2, meaning two pages before and after the current page.
     * If window is out of bounds, it will be shifted accordingly.
     * The remaining pages will be represented by ellipses ('...'), if they are more than one page away.
     *
     * For example, if currentPage is 5 and totalPages is 10 with a windowSize of 2,
     * the pagination will be: [1, left(...), 3, 4, 5, 6, 7, right(...), 10].
     * @default 2
     */
    windowSize?: number;
}

export function getPaginationControls({
    currentPage,
    totalPages,
    windowSize = 2,
}: PaginationOptions): PageItem[] {

    if (totalPages <= (2 * windowSize) + 5) {
        // If total pages are less than the minimum required for showing ellipses,
        // return all pages as numbers.

        // ex. windowSize = 2, totalPages = 9, currentPage = 5
        // (1) (2) (3) (4) [5] (6) (7) (8) (9)
        // ex. windowSize = 1, totalPages = 7, currentPage = 4
        // (1) (2) (3) [4] (5) (6) (7)
        // ex. windowSize = 0, totalPages = 5, currentPage = 3
        // (1) (2) [3] (4) (5)
        return range(1, totalPages);
    }

    if (currentPage <= windowSize + 3) {
        // If the current page is near the start, show the first few pages and ellipses on the right.

        // ex. windowSize = 2, currentPage = 5, totalPages = 10
        // (1) (2) (3) (4) [5] (6) (7) ... (10)
        // ex. windowSize = 1, currentPage = 4, totalPages = 10
        // (1) (2) (3) [4] (5) ... (10)
        // ex. windowSize = 0, currentPage = 3, totalPages = 10
        // (1) (2) [3] ... (10)
        return [...range(1, (2 * windowSize) + 3), 'right(...)', totalPages];
    }

    if (currentPage >= totalPages - windowSize - 2) {
        // If the current page is near the end, show ellipses on the left and the last few pages.

        // ex. windowSize = 2, currentPage = 6, totalPages = 10
        // (1) ... (4) (5) [6] (7) (8) (9) (10)
        // ex. windowSize = 1, currentPage = 7, totalPages = 10
        // (1) ... (6) [7] (8) (9) (10)
        // ex. windowSize = 0, currentPage = 8, totalPages = 10
        // (1) ... [8] (9) (10)
        return [1, 'left(...)', ...range(totalPages - (2 * windowSize) - 2, totalPages)];
    }

    // In the middle show ellipses on both sides and the current page with its window.
    // ex. windowSize = 2, currentPage = 5, totalPages = 10
    // (1) ... (3) (4) [5] (6) (7) ... (10)
    // ex. windowSize = 1, currentPage = 4, totalPages = 10
    // (1) ... (3) [4] (5) ... (10)
    // ex. windowSize = 0, currentPage = 3, totalPages = 10
    // (1) ... [3] ... (10)
    return [1, 'left(...)', ...range(currentPage - windowSize, currentPage + windowSize), 'right(...)', totalPages];
}

/**
 * Returns an array of page indexes and ellipses for pagination controls,
 * based on the current page, total pages, and a window size.
 *
 * @example
 * usePaginationControls({
 *   currentPage: 5,
 *   totalPages: 10,
 *   windowSize: 2,
 * });
 * // Returns: [1, 'left(...)', 3, 4, 5, 6, 7, 'right(...)', 10]
 *
 * @returns  An array of page items including numbers and ellipses.
 */
export function usePaginationControls({
    currentPage,
    totalPages,
    windowSize = 2,
}: PaginationOptions): PageItem[] {
    return useMemo(() => getPaginationControls({ currentPage, totalPages, windowSize }), [currentPage, totalPages, windowSize]);
}
