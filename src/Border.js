import React from "react";

import css from "./Button.css";

import oR               from "./lib/objectReduce";
import addV             from "./lib/addVertices";
import normalizeChamfer from "./lib/normalizeChamfer"
import perimeter        from "./lib/perimeter";

const defaults = {
    chamfer     : 10,
    hoverCount  : 2,
    hoverSpeed  : 800,
    borderWidth : 2
};

export default function Border(props) {
    const {
        width, height,

        chamfer     = defaults.chamfer,
        borderWidth = defaults.borderWidth,
        hoverCount  = defaults.hoverCount,
        hoverSpeed  = defaults.hoverSpeed
    } = props;

    // nearest pixel
    const w = Math.floor(width);
    const h = Math.floor(height);
    const id = `w${w}h${h}`;

    if (!w || !h) {
        return "";
    }

    // normalized value across corners ([ nw, ne, se, sw ])
    const chamfers = normalizeChamfer(chamfer);
    // inset the border by 1/2
    const offset = borderWidth / 2;
    // outside box corners
    const corners = {
        lt : [ offset, offset ],
        tr : [ w - offset, offset ],
        rb : [ w - offset, h - offset ],
        bl : [ offset, h - offset ]
    };
    // vertices with chamfer
    const vertices = {
        t0 : addV(corners.lt, [ chamfers[0], 0 ]),
        t1 : addV(corners.tr, [ -chamfers[1], 0 ]),
        r0 : addV(corners.tr, [ 0, chamfers[1] ]),
        r1 : addV(corners.rb, [ 0, -chamfers[2] ]),
        b0 : addV(corners.rb, [ -chamfers[2], 0 ]),
        b1 : addV(corners.bl, [ chamfers[3], 0 ]),
        l0 : addV(corners.bl, [ 0, -chamfers[3] ]),
        l1 : addV(corners.lt, [ 0, chamfers[0] ])
    };

    // svg polygon points
    const points = oR(vertices, (acc, { value }) =>
        acc + ` ${value[0]} ${value[1]}`,
    "");

    // for dashoffset
    const length = perimeter(Object.values(vertices));

    return <svg
        className={css.border}
        id={id}
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
    >
        <style>{
            `#${id} {
                --length:      ${length};
                --dasharray:   ${length / (hoverCount * 2)};
                --duration:    ${hoverSpeed}ms;
                --borderWidth: ${borderWidth}px
            }`
        }</style>

        <polygon points={points} />
    </svg>;
}