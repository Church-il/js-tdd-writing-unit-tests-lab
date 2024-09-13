// src/__tests__/utils.test.js
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a valid palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("returns true for a palindrome with mixed case", () => {
    expect(isPalindrome("RaCeCaR")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error if the input is not a string", () => {
    expect(() => isPalindrome(12345)).toThrow("Input must be a string");
  });

  it("throws an error if the input has non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow("Input must only contain alphabetic characters");
  });
});