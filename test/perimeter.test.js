import perimeter from "../src/lib/perimeter";

test("square", () => {
    expect(perimeter([
        [ 0, 0 ],
        [ 10, 0 ],
        [ 10, 10 ],
        [ 0, 10 ]
    ])).toBe(40);
});

test("rect", () => {
    expect(perimeter([
        [ 0, 0 ],
        [ 20, 0 ],
        [ 20, 10 ],
        [ 0, 10 ]
    ])).toBe(60);
});

test("tri 1", () => {
    expect(perimeter([
        [ 0, 0 ],
        [ 10, 10 ],
        [ 0, 10 ]
    ])).toBe(34.1);
});

test("chamfer: top left, bottom right", () => {
    expect(perimeter([
        [ 10, 0 ],
        [ 100, 0 ],
        [ 100, 40 ],
        [ 90, 50 ],
        [ 0, 50 ],
        [ 0, 10 ]
    ])).toBe(288.3);
});
