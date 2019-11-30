export default function distance([ x0, y0 ], [ x1, y1 ]) {
    if (x0 === x1) {
        return Math.abs(y1 - y0);
    }
    if (y0 === y1) {
        return Math.abs(x1 - x0);
    }

    const xSquared = Math.pow(x1 - x0, 2);
    const ySquared = Math.pow(y1 - y0, 2);

    return Math.abs(Math.sqrt(xSquared + ySquared));
}
