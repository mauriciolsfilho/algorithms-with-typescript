import { describe, expect, it } from "vitest";
import { Fibonacci } from "./fibonacci";

describe("Fibonacci algorithm", () => {
  it("should return an array of numbers", () => {
    const sequenceLength = 10;

    const fibonacci = new Fibonacci();

    const result = fibonacci.getSequence(sequenceLength);

    console.log("Sequence: ", result.join(", "));

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(sequenceLength);

    if (sequenceLength >= 3) {
      expect(result[result.length - 1]).toBe(
        result[result.length - 2] + result[result.length - 3]
      );
    }
  });

  it("should not be able to use negative numbers", () => {
    const sequenceLength = -2;

    const fibonacci = new Fibonacci();

    expect(() => fibonacci.getSequence(sequenceLength)).toThrow();
  });

  it("should return an empty array with parameter zero", () => {
    const sequenceLength = 0;

    const fibonacci = new Fibonacci();

    const result = fibonacci.getSequence(sequenceLength);
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(0);
  });
});
