import { expect, test, describe } from "bun:test";

test("2 + 2", () => {
    expect(2 + 2).toBe(4);
});

describe("arithmetic", () => {
    test("2 * 2", () => {
        expect(2 * 2).toBe(4)
    });

    test("2 / 2", async () => {
        const result = await Promise.resolve(2 / 2);
        expect(result).toBe(1);
    });

    test("2 % 2", done => {
        Promise.resolve(2 % 2).then(result => {
            expect(result).toBe(0);
            done();
        });
    })
});