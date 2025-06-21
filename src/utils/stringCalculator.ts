// src/utils/stringCalculator.ts
export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }
  const cleanedNumbers = numbers.replace(/\n/g, ",");
  const nums = cleanedNumbers.split(',').map(numStr => parseInt(numStr, 10));

  return nums.reduce((acc, current) => acc + current, 0);
}
