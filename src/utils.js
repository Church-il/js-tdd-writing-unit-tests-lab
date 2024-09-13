// src/utils.js
export function isPalindrome(word) {
  // Check if the input is a string
  if (typeof word !== "string") {
    throw new Error("Input must be a string.");
  }

  // Special case: empty string
  if (word.length === 0) {
    return false;
  }

  // Check if the input contains only alphabetic characters
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must only contain alphabetic characters.");
  }

  // Convert the word to lowercase
  const lowercasedWord = word.toLowerCase();

  // Check if the word is a palindrome
  const reversedWord = lowercasedWord.split('').reverse().join('');
  return lowercasedWord === reversedWord;
}
