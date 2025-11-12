import { useMemo } from 'react';


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
     * the pagination will show: [1, ..., 3, 4, 5, 6, 7, ..., 10].
     * @default 2
     */
    windowSize?: number;
}

export function getPaginationControls({
    currentPage,
    totalPages,
    windowSize = 2,
}: PaginationOptions): PageItem[] {
    const pages: PageItem[] = [];

    if (totalPages <= 1) {
        return [1];
    }

    // Calculate the initial window
    let start = currentPage - windowSize;
    let end = currentPage + windowSize;

    // Shift window if it goes out of bounds
    if (start < 1) {
        end += 1 - start;
        start = 1;
    }
    if (end > totalPages) {
        start -= end - totalPages;
        end = totalPages;
    }

    // Ensure start is at least 1 (after adjustments)
    start = Math.max(1, start);

    // Always include the first page
    pages.push(1);

    // Left gap
    if (start > 2) {
        if (start === 3) {
            pages.push(2);
        } else {
            pages.push('left(...)');
        }
    }

    // Main window
    for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
            pages.push(i);
        }
    }

    // Right gap
    if (end < totalPages - 1) {
        if (end === totalPages - 2) {
            pages.push(totalPages - 1);
        } else {
            pages.push('right(...)');
        }
    }

    // Always include the last page
    if (totalPages > 1) {
        pages.push(totalPages);
    }

    return pages;
}

/**
 * Returns an array of page indexes and ellipses for pagination controls,
 * based on the current page, total pages, and an optional window size.
 *
 * @example
 * usePaginationControls({
 *   currentPage: 5,
 *   totalPages: 10,
 *   windowSize: 2,
 * });
 * // Returns: [1, '...', 3, 4, 5, 6, 7, '...', 10]
 *
 * @example
 * usePaginationControls({
 *   currentPage: 1,
 *   totalPages: 5,
 * });
 * // Returns: [1, 2, 3, 4, 5]
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
