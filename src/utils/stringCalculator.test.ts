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
  // Test for a numbers with a newline
  it("should handle new lines between numbers as delimiters", () => {
    const numbers = "1\n2,3";
    const result = Add(numbers);
    expect(result).toBe(6);
  });

  it("should handle only new line delimiters", () => {
    expect(Add("1\n2\n3")).toBe(6);
  });
  // Test for a mix of commas and new lines
  it("should support custom single character delimiter", () => {
    const numbers = "//;\n1;2";
    const result = Add(numbers);
    expect(result).toBe(3);
  });

  it("should support another custom single character delimiter", () => {
    expect(Add("//|\n1|2|3")).toBe(6);
  });

  it("should still support default delimiters (comma and newline) even with custom delimiter prefix", () => {
    expect(Add("//;\n1;2,3\n4")).toBe(10);
  });
  // Test for a negative number
   it('should throw an exception for a single negative number', () => {
    const numbers = "1,-2";
    expect(() => Add(numbers)).toThrow("negatives not allowed: -2");
  });

  it('should throw an exception with all negative numbers if multiple are present', () => {
    const numbers = "1,-2,3,-4,5,-6";
    expect(() => Add(numbers)).toThrow("negatives not allowed: -2,-4,-6");
  });

  it('should throw an exception for only negative numbers', () => {
    expect(() => Add("-1,-5")).toThrow("negatives not allowed: -1,-5");
  });
});
