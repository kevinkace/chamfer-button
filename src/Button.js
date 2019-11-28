import React, { useState } from "react";

import Border from "./Border";

import css from "./Button.css";

export default function Button({ children }) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    return (
        <button
            className={css.button}
            ref={element => {
                if (element) {
                const rect = element.getBoundingClientRect();

                if (!rect.height || !rect.width) {
                    return;
                }

                setWidth(rect.width);
                setHeight(rect.height);
                }
            }}
        >
            {children}
            <Border height={height} width={width} id={children.split(" ")[0]} />
        </button>
    );
}
