export interface HeaderProps {
    variant: HeaderVariants;
}


export enum HeaderVariantsEnum {
    DEFAULT = 'default',
    OPEN = 'open',
}

export type HeaderVariants = Lowercase<keyof typeof HeaderVariantsEnum>;