// src/utils/stringCalculator.ts
export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let numbersToParse = numbers;
  let splitPattern: RegExp;
  
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch && delimiterMatch[1]) {
      const customDelim = delimiterMatch[1].replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );
      splitPattern = new RegExp(`[${customDelim},\\n]`);
      numbersToParse = numbers.substring(delimiterMatch[0].length);
    } else {
      splitPattern = /[,|\n]/;
    }
  } else {
    splitPattern = /[,|\n]/; 
  }

  const nums = numbersToParse
    .split(splitPattern)
    .map((numStr) => parseInt(numStr, 10));

  return nums.reduce((acc, current) => acc + current, 0);
}
