import { config } from "./install.js";

const MIN_CONTAIN_AREA = 12000;

const rAlt = /\/([^/?#.]+)[^/?#]*(?:[?#].*)?$/;
const rStartSlash = /^\//;

const computeFocus = component => ( ( component.mode === `cover` ) && component.focus ) || undefined;

const computeRatio =
    ( { height, ratio, width } ) =>
        // eslint-disable-next-line no-nested-ternary
        ( ratio ? ratio.split( `/` ) : ( ( width && height ) ? [ width, height ] : [ 1, 1 ] ) );

// eslint-disable-next-line id-length
const computePlaceholderTransform = component => {
    const { mode } = component;
    const ratio = computeRatio( component );
    if ( mode === `cover` ) {
        return `cover=${ ratio.join( `:` ) }`;
    }
    let [ w, h ] = ratio;
    const area = w * h;
    if ( area < MIN_CONTAIN_AREA ) {
        const mult = Math.ceil( MIN_CONTAIN_AREA / area );
        w *= mult;
        h *= mult;
    }
    return `contain=${ w }x${ h }`;
};

const computePosition = ( { mode, position } ) => ( ( ( mode === `contain` ) && position ) || `center` );

export const computeMediaAlt = component => {
    let { alt } = component;
    if ( !alt ) {
        const tmp = rAlt.exec( component.src );
        alt = ( tmp && tmp[ 1 ] ) || `image`;
    }
    return alt;
};

export const computeMediaDataBot = component => ( {
    [ `data-${ config.class }-bot` ]: component.bot || undefined,
} );

export const computeMediaDataFocus = component => ( {
    [ `data-${ config.class }-focus` ]: computeFocus( component ),
} );

export const computeMediaDataSrc = component => ( {
    [ `data-${ config.class }-src` ]: `image:${ component.src }`,
} );

export const computeMediaDataStep = component => ( {
    [ `data-${ config.class }-step` ]: component.step || undefined,
} );

export const computeMediaHeight = ( { height } ) => height || undefined;

export const computeMediaSource =
    component => `${ config.domain }/v1/${ computePlaceholderTransform( component ) }/placeholder:transparent`;

export const computeMediaStyle = component => {
    const { mode, transition, transitionDelay, transitionDuration, transitionTimingFunction } = component;
    return {
        "objectFit": mode,
        "objectPosition": computePosition( component ),
        ...(
            transition ?
                {
                    transitionDelay,
                    transitionDuration,
                    transitionTimingFunction,
                } :
                {}
        ),
    };
};

export const computeMediaWidth = ( { width } ) => width || undefined;

export const computeWrapperClass = ( { transition } ) => `twic-w${ transition ? ` twic-t-fade` : `` }`;

export const computeWrapperStyle = component => {
    const ratio = computeRatio( component );
    const styles = {
        "backgroundPosition": computePosition( component ),
        "backgroundSize": component.mode,
        // eslint-disable-next-line no-magic-numbers
        "paddingTop": `${ ( ( ratio[ 1 ] * 100 ) / ratio[ 0 ] ).toFixed( 10 ) }%`,
    };
    const apiOutput = ( component.placeholder !== `none` ) && component.placeholder;
    if ( apiOutput ) {
        const { domain } = config;
        const { src } = component;
        const focusPoint = computeFocus( component );
        styles.backgroundImage = `url(${
            // add a slash if needed.
            rStartSlash.test( src ) ? `${ domain }${ src }` : `${ domain }/${ src }`
        }?twic=v1${
            focusPoint ? `/focus=${ focusPoint }` : ``
        }/${
            computePlaceholderTransform( component )
        }/output=${
            apiOutput
        })`;
    }
    return styles;
};
