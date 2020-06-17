const enhancer = require("./enhancer.js");

describe("enhancer", () => {
  it("should run tests using it()", () => {
    expect(true).toBe(true);
  });

  describe("repair()", () => {
    const item = {
      durability: 0,
    };
    const actual = enhancer.repair(item);
    const expected = 100;

    expect(actual.durability).toBe(expected);
  });
});
