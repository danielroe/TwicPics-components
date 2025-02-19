import React from "react";
import { parseClassName, parseDuration, parseFrom, parseTo } from "../_/parse";
import { preComputeVideoOptions } from "../_/preCompute";
import { number } from "./props";
import TwicMedia from "./TwicMedia";
import type { BaseAttributes } from "./types";

interface VideoAttributes extends BaseAttributes {
    duration?: number | string,
    from?: number | string,
    posterFrom?: number | string,
    to?: number | string,
}

const TwicVideo: React.FC< VideoAttributes > = props => {
    const className = parseClassName( props.className ) || ``;
    const duration = parseDuration( props.duration );
    const from = parseFrom( props.from );
    const posterFrom = parseFrom( props.posterFrom );
    const to = parseTo( props.to );
    const videoOptions = preComputeVideoOptions( duration, from, posterFrom, to );
    return (
        <div className={ `twic-i ${ className }` }>
            <TwicMedia
                { ...props }
                className=""
                mediaTag="video"
                refit={ false }
                videoOptions={ videoOptions }
            />
        </div>
    );
};

TwicVideo.propTypes = {
    "duration": number,
    "from": number,
    "posterFrom": number,
    "to": number,
};

export default TwicVideo;
