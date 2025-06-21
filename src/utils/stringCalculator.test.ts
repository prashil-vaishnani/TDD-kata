// src/utils/stringCalculator.test.ts
import { Add } from "./stringCalculator";

describe("String Calculator - Add", () => {
  it("should return 0 for an empty string", () => {
    const numbers = "";
    const result = Add(numbers);
    expect(result).toBe(0);
  });
  // Test for a single number
  it("should return the number itself for a single number string", () => {
    const numbers = "1";
    const result = Add(numbers);
    expect(result).toBe(1);
  });

  it("should return the number itself for another single number string", () => {
    const numbers = "5";
    const result = Add(numbers);
    expect(result).toBe(5);
  });
});
