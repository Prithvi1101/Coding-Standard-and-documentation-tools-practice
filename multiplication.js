/**
 * @file multiplication.js
 * @description Provides functions for multiplication operations.
 */

class Multiplication {
  constructor() {
    this.result = 0;
  }

  /**
   * Multiplies two integers.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of two numbers
   */
  multiplyInt(a, b) {
    return a * b;
  }

  /**
   * Multiplies two float numbers.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of two numbers
   */
  multiplyFloat(a, b) {
    return a * b;
  }

  display(value) {
    console.log(`Multiplication Result: ${value}`);
  }
}

export default Multiplication;
