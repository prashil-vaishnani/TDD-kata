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
  // Test for two comma-separated numbers
  it("should return the sum of two comma-separated numbers", () => {
    expect(Add("1,9")).toBe(10);
    expect(Add("5,7")).toBe(12);
  });
  // Test for multiple comma-separated numbers
  it("should return the sum of an unknown amount of comma-separated numbers", () => {
    const numbers = "1,2,3,4,5";
    const result = Add(numbers);
    expect(result).toBe(15);
  });

  it("should handle a larger set of numbers", () => {
    expect(Add("10,20,30,40")).toBe(100);
  });
});
