// src/utils.js
export function pointsForWord(word) {
  // Check if the input is not a string or if it's an empty string
  if (typeof word !== "string" || word.length === 0) {
    return 0;
  }

  let points = 0;

  // Convert word to lowercase to handle both uppercase and lowercase letters
  for (const char of word.toLowerCase()) {
    if (/[aeiou]/.test(char)) {
      points += 1; // 1 point for vowels
    } else if (/[bcdfghjklmnpqrstvwxyz]/.test(char)) {
      points += 2; // 2 points for consonants
    }
    // Non-alphabetic characters are ignored
  }

  return points;
}
