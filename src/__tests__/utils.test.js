// src/__tests__/utils.test.js
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it("ignores non-alphabetic characters and calculates points only for letters", () => {
    const word = "test!";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("returns 0 for a non-string input", () => {
    const word = 12345;
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });
});
