// src/utils/stringCalculator.test.ts
import { Add } from "./stringCalculator";

describe("String Calculator - Add", () => {
  it("should return 0 for an empty string", () => {
    const numbers = "";
    const result = Add(numbers);
    expect(result).toBe(0);
  });
});
