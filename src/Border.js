import React from "react";

import css from "./Button.css";

import distance         from "./lib/distance";
import oR               from "./lib/objectReduce";
import addV             from "./lib/addVertices";
import normalizeChamfer from "./lib/normalizeChamfer"

const defaultChamfer = 10;

export default function Border({ width, height, id, chamfer = defaultChamfer }) {
    const w = Math.floor(width);
    const h = Math.floor(height);

    if (!w || !h) {
        return "";
    }

    chamfer = normalizeChamfer(chamfer);

    const offset = 1;
    const corners = {
        lt : [ offset, offset ],
        tr : [ w - offset, offset ],
        rb : [ w - offset, h - offset ],
        bl : [ offset, h - offset ]
    };

    const vertices = {
        t0 : addV(corners.lt, [ chamfer[0], 0 ]),
        t1 : addV(corners.tr, [ -chamfer[1], 0 ]),
        r0 : addV(corners.tr, [ 0, chamfer[1] ]),
        r1 : addV(corners.rb, [ 0, -chamfer[2] ]),
        b0 : addV(corners.rb, [ -chamfer[2], 0 ]),
        b1 : addV(corners.bl, [ chamfer[3], 0 ]),
        l0 : addV(corners.bl, [ 0, -chamfer[3] ]),
        l1 : addV(corners.lt, [ 0, chamfer[0] ])
    };

    const points = oR(vertices, (acc, { value }) =>
        acc + ` ${value[0]} ${value[1]}`,
    "");


    console.log(vertices);


    const { length } = oR(vertices, (acc, { value }, idx) => {
        console.log("p", acc.prev, "v", value);
        if (!idx) {
            acc.prev = value;

            return acc;
        }

        const d = distance(acc.prev, value);

        console.log("l", acc.length);
        console.log("d", d);

        acc.length += d;

        console.log("l", acc.length);
        acc.prev = value;

        return acc;
    }, { length : 0 });

    console.log(length);

    const style = `#${id} { --length: ${length}; --dasharray: ${length / 2}; --durr: ${length * 10}ms; }`;

    return <svg
        className={css.border}
        id={id}
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
    >
        <style>{style}</style>

        <polygon points={points} />
    </svg>;
}