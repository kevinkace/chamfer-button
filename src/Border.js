import React from "react";

import css from "./Button.css";

export default function Border({ width, height, id, chamfer = 10 }) {
    const w = Math.floor(width);
    const h = Math.floor(height);

    const x = {
        max  : w - 1,
        maxC : w - 1 - chamfer
    };
    const y = {
        max  : h - 1,
        maxC : h - 1 - chamfer
    };

    const length = Math.floor(
        // 2 tops
        2 * (x.maxC - 1) +
        // 2 sides
        2 * (y.maxC - 1) +
        // 2 angles
        2 * Math.sqrt(2 * Math.pow(chamfer, 2))
    );

    const points = `${x.max} ${y.maxC} ${x.maxC} ${y.max} 1 ${y.max} 1 ${1 +
        chamfer} ${1 + chamfer} 1 ${x.max} 1 ${x.max} ${y.maxC}`;

    const style = `#${id} { --length: ${length}; --dasharray: ${length / 4}; --durr: ${length * 0.8 + 400}ms; }`;

    return w && h ?
        <svg
            className={css.border}
            id={id}
            viewBox={`0 0 ${w} ${h}`}
            width={w}
            height={h}
        >
            <style>{style}</style>

            <polygon points={points} />
        </svg> :
        "";
}