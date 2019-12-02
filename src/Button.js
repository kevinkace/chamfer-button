import React, { useState } from "react";

import Border from "./Border";

import css from "./Button.css";

export default function Button({ children, ...props }) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    return (
        <button
            className={css.button}
            ref={element => {
                if (!element) {
                    return;
                }

                const rect = element.getBoundingClientRect();

                if (!rect.height || !rect.width) {
                    return;
                }

                setWidth(rect.width);
                setHeight(rect.height);
            }}
        >
            {children}
            <Border height={height} width={width} {...props} />
        </button>
    );
}
