import distance from "./distance";

const noisy = false;

function last(arr) {
    return arr[arr.length - 1];
}

export default function perimeter(vertices) {
    let prevVertex = last(vertices);

    const length = vertices.reduce((_length, vertex) => {
        noisy && console.log("l", _length, "p", prevVertex, "v", vertex);

        const d = distance(prevVertex, vertex);

        noisy && console.log("d", d);

        _length += d;

        noisy && console.log("l", _length);

        prevVertex = vertex;

        return _length;
    }, 0);

    return Math.round(length * 10) / 10;
}
