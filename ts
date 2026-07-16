```typescript
// apps/api/src/utils/is-hiragana-letter-ro-present.ts

/**
 * Checks if the given string contains the Unicode Hiragana letter RO (U+308D).
 *
 * @param input - The string to check.
 * @returns true if the string contains the Hiragana letter RO, false otherwise.
 */
export function isHiraganaLetterRoPresent(input: string): boolean {
  // Regular expression to match the Hiragana letter RO (U+308D)
  const roRegex = /[\u308D]/;

  return roRegex.test(input);
}

// Example usage:
const testString1 = "こんにちは";
const testString2 = "世界";

console.log(isHiraganaLetterRoPresent(testString1)); // Output: false
console.log(isHiraganaLetterRoPresent(testString2)); // Output: true

```