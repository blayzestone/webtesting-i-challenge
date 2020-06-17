const enhancer = require("./enhancer.js");

describe("enhancer", () => {
  it("should run tests using it()", () => {
    expect(true).toBe(true);
  });

  describe("repair()", () => {
    it("fully repairs the item's durability", () => {
      const item = {
        durability: 0,
      };
      const actual = enhancer.repair(item);
      const expected = 100;

      expect(actual.durability).toBe(expected);
    });
  });

  describe("success()", () => {
    it("should increase the item's enhancement value by 1", () => {
      const item = {
        enhancement: 0,
      };
      const actual = enhancer.succeed(item);
      const expected = 1;

      expect(actual.enhancement).toBe(expected);
    });
    it("should not increase the item's enhancement value because it is already maxxed", () => {
      const fullyEnhancedItem = {
        enhancement: 20,
      };

      const actual = enhancer.succeed(fullyEnhancedItem);
      const expected = 20;

      expect(actual.enhancement).toBe(expected);
    });
  });
});
