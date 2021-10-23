import { trimRegExpFactory } from "./utils";

export type Mode = `contain` | `cover`;
export type Placeholder = `maincolor` | `meancolor` | `none` | `preview`;

export interface Attributes {
    alt?: string,
    bot?: string,
    focus?: string,
    mode?: Mode,
    placeholder?: Placeholder,
    position?: string,
    ratio?: number | string,
    step?: number | string,
    src: string,
    transition?: boolean | string,
    transitionDelay?: string,
    transitionDuration?: string,
    transitionTimingFunction?: string,
}

export interface Options {
    anticipation?: number,
    class?: string,
    domain: string,
    maxDPR?: number,
    path?: string,
    step?: number,
}

export interface Config {
    class: string,
    domain?: string,
}
const validFactory = < T >( regExp: RegExp ) => ( value: T | string ): boolean => regExp.test( String( value ) );

export const validModes: Array< Mode > = [ `contain`, `cover` ];
export const rValidMode = trimRegExpFactory( validModes );
export const isValidMode = validFactory< Mode >( rValidMode );

export const validPlaceholders: Array< Placeholder > = [ `maincolor`, `meancolor`, `none`, `preview` ];
export const rValidPlaceholder = trimRegExpFactory( validPlaceholders );
export const isValidPlaceholder = validFactory< Placeholder >( rValidPlaceholder );

export const rValidRatio = trimRegExpFactory( `(\\d+(?:\\.\\d+)?)(?:\\s*\\/\\s*(\\d+(?:\\.\\d+)?))?` );

export const validTransition = [ `false`, `true` ];
export const rValidTransition = trimRegExpFactory( validTransition );
export const isValidTransition = validFactory< boolean >( rValidTransition );
