import React from "react";

import { installTwicPics as install, TwicImg } from "../dist/react/esm.js";
import "../dist/react/style.css";
import "./Sample.css";

// for next
export const installTwicPics = install;

const Sample = () => (
    <main>
        <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
        <TwicImg
            src="football.jpg"
            ratio="16/9"
            step="100"
            placeholder="meancolor"
        />
        <TwicImg
            src="/football.jpg"
            alt="custom alt attribute"
            step="100"
            focus="auto"
            width="500"
            height="800"
            placeholder="none"
        />
        <TwicImg
            src="football.jpg"
            ratio="16/9"
            step="100"
            mode="contain"
            position="left"
        />
    </main>
);

export default Sample;
