'use client';

import type { FunctionComponent } from 'react';
import { useMemo } from 'react';
import { LanguagesIcon } from 'lucide-react';

import type { ButtonProps } from '@/components/button/button';
import { Button } from '@/components/button/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { useControlled } from '@/hooks/use-controlled';
import type { Controlled } from '@/types/controlled';
import type { OmitFrom } from '@/types/from';
import { isString } from '@/utils/is-type';

import type { DefaultLanguageCode, Language, LanguageCode } from './languages';
import { defaultLanguages } from './languages';


export interface LanguageSelectorProps extends Controlled<LanguageCode>, OmitFrom<ButtonProps, 'value' | 'defaultValue' | 'onChange'> {
    languages: (DefaultLanguageCode | Language)[];
    label?: string;
}

export const LanguageSelector: FunctionComponent<LanguageSelectorProps> = ({
    defaultValue = 'en-US',
    value,
    onChange,
    languages,
    label = 'Select Language',
    ...props
}) => {
    const [language, setLanguage] = useControlled(value, defaultValue, onChange);

    const langs = useMemo(
        () => languages
            .map(lang => {
                if (isString(lang)) {
                    return { code: lang, ...defaultLanguages[lang] };
                }
                return lang;
            })
            .sort((a, b) => a.name.localeCompare(b.name)),
        [languages],
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    {...props}
                >
                    <LanguagesIcon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup onValueChange={setLanguage} value={language}>
                    {langs.map(({ code, name, flag }) => (
                        <DropdownMenuRadioItem
                            key={code}
                            value={code}
                        >
                            <span className="flex items-center gap-2">
                                <span>{flag}</span>
                                <span>{name}</span>
                            </span>
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
