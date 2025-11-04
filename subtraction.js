/**
 * @file subtraction.js
 * @description Provides functions for subtraction operations.
 */

class Subtraction {
  constructor() {
    this.result = 0;
  }

  /**
   * Subtracts two integers.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of two numbers
   */
  subtractInt(a, b) {
    return a - b;
  }

  /**
   * Subtracts two floating numbers.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of two numbers
   */
  subtractFloat(a, b) {
    return a - b;
  }

  display(value) {
    console.log(`Subtraction Result: ${value}`);
  }
}

export default Subtraction;
