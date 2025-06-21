// src/utils/stringCalculator.ts
export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }
  return parseInt(numbers, 10);
}
