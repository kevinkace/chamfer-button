import distance from "../src/lib/distance";

test("same point is 0", () => {
    expect(distance([ 1, 1 ], [ 1, 1 ])).toBe(0);
    expect(distance([ 0, 0 ], [ 0, 0 ])).toBe(0);
});

test("if x0 === x2, length is delta y", () => {
    expect(distance([ 1, 1 ], [ 1, 4 ])).toBe(3);
    expect(distance([ 0, 0 ], [ 5, 0 ])).toBe(5);
});

test("3, 4, 5", () => {
    expect(distance([ 0, 0 ], [ 3, 4 ])).toBe(5)
});

test("negative slope", () => {
    expect(distance([ 3, 4 ], [ 0, 0 ])).toBe(5);
});

test("negative line", () => {
    expect(distance([ 60, 46 ], [ 3, 46 ])).toBe(57);
});
