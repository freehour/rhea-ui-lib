import { useCallback, useState } from 'react';

import { useDebounceCallback } from './use-debounce-callback';
import { useLatestCallback } from './use-latest-callback';


export interface SearchState {
    isPending: boolean;
    search: string;
    setSearch: (search: string) => void;
}

export function useSearch(
    searchFn: (searchTerm: string) => void,
    delay = 300,
): SearchState {
    const [search, setSearch] = useState('');
    const [isPending, setIsPending] = useState(false);

    const searchFunc = useLatestCallback(searchFn);
    const executeSearch = useCallback((search: string) => {
        setIsPending(false);
        searchFunc(search);
    }, [searchFunc]);

    const debouncedSearch = useDebounceCallback(executeSearch, delay);

    const updateSearch = useCallback((search: string) => {
        setIsPending(true);
        setSearch(search);
        debouncedSearch(search);
    }, [debouncedSearch]);

    return {
        isPending,
        search,
        setSearch: updateSearch,
    };
}
