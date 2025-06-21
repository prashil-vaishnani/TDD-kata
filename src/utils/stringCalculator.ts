// src/utils/stringCalculator.ts

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let numbersToParse = numbers;
  const delimiters: string[] = [",", "\n"];

  if (numbers.startsWith("//")) {
    const headerMatch = numbers.match(/^\/\/(.*)\n/);

    if (headerMatch && headerMatch[1]) {
      const headerPart = headerMatch[1]; 
      const bracketDelimiters = headerPart.match(/\[(.*?)\]/g);

      if (bracketDelimiters) {
        bracketDelimiters.forEach((bracketedDelim) => {
          const actualDelim = bracketedDelim.substring(
            1,
            bracketedDelim.length - 1
          );
          delimiters.push(actualDelim);
        });
      } else {
        delimiters.push(headerPart);
      }

      numbersToParse = numbers.substring(headerMatch[0].length);
    }
  }
  const escapedDelimiters = delimiters
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|"); 
  const splitPattern = new RegExp(escapedDelimiters);

  const parsedNumbers = numbersToParse
    .split(splitPattern)
    .filter((s) => s !== "") 
    .map((numStr) => parseInt(numStr, 10)); 

  const negativeNumbers = parsedNumbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(",")}`);
  }

  return parsedNumbers.reduce((acc, current) => acc + current, 0);
}
