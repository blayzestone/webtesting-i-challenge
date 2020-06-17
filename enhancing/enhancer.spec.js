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

  describe("succeed()", () => {
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

  describe("fail()", () => {
    it("Item enhancement is less than 15, should decrease durability by 5", () => {
      const item = {
        durability: 10,
        enhancement: 0,
      };

      const actual = enhancer.fail(item);
      const expected = 5;

      expect(actual.durability).toBe(expected);
    });
    it("Item enhancement is 15 or more, should decrease durability by 10", () => {
      const item = {
        durability: 10,
        enhancement: 15,
      };

      const actual = enhancer.fail(item);
      const expected = 0;

      expect(actual.durability).toBe(expected);
    });

    it("Item enhancement is greater than 16, should decrease enhancement by 1", () => {
      const item = {
        durability: 10,
        enhancement: 18,
      };

      const actual = enhancer.fail(item);
      const expected = 17;

      expect(actual.enhancement).toBe(expected);
    });
  });
});
