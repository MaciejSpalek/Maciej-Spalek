import { generateArray } from "helpers";

describe("generateArray", () => {
	test("checks if generateArray func returns correct array", () => {
		const result = generateArray(0, 5);
		const expected = [0, 1, 2, 3, 4, 5];

		expect(result).toEqual(expected);
	});
});
