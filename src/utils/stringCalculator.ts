// src/utils/stringCalculator.ts
export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }
  const numsArray = numbers.split(",");

  if (numsArray.length === 1) {
    return parseInt(numsArray[0], 10);
  }

  let sum = 0;
  for (const numStr of numsArray) {
    sum += parseInt(numStr, 10);
  }
  return sum;
}
