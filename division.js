/**
 * @file division.js
 * @description Provides functions for division operations.
 */

class Division {
  constructor() {
    this.result = 0;
  }

  /**
   * Divides two integers safely.
   * @param {number} a - Numerator
   * @param {number} b - Denominator
   * @returns {number|string} Result or error message
   */
  divideInt(a, b) {
    if (b === 0) return 'Error: Division by zero.';
    return a / b;
  }

  /**
   * Divides two floating-point numbers.
   * @param {number} a - Numerator
   * @param {number} b - Denominator
   * @returns {number|string} Result or error message
   */
  divideFloat(a, b) {
    if (b === 0) return 'Error: Division by zero.';
    return a / b;
  }

  display(value) {
    console.log(`Division Result: ${value}`);
  }
}

export default Division;
