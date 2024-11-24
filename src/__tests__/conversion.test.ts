import { getQueryParams } from "helpers";

describe("getQueryParams", () => {
  test("checks if getQueryParams func returns correct string", () => {
    const result = getQueryParams({
      firstParam: "1",
      secondParam: "2",
      thirdParam: "3",
    });
    const expected = `?firstParam=1&secondParam=2&thirdParam=3`;

    expect(result).toEqual(expected);
  });
});
