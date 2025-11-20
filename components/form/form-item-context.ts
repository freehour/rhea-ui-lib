import { createContext } from 'react';


interface FormItemContextValue {
    id: string;
}

export const FormItemContext = createContext<FormItemContextValue | null>(null);
