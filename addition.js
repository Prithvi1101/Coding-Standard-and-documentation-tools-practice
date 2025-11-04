/**
 * @file addition.js
 * @description Math utility: addition with flexible inputs.
 * @version 1.1
 */

class Addition {
  /**
   * @constructor
   */
  constructor() {
    this.result = 0;
  }

  /**
   * Adds two numbers (int or float).
   * @param {number} a - First number.
   * @param {number} b - Second number.
   * @returns {number} Sum of a and b.
   */
  addNumbers (a, b) {
    return a + b;
  }
    /**
   * Adds two numeric strings without string concatenation.
   * @param {string} a - Numeric string (e.g., '12.5').
   * @param {string} b - Numeric string (e.g., '7').
   * @returns {number} Sum as a number.
   * @throws {TypeError} If either input is not a numeric string.
   */
  addNumericStrings (a, b) {
    const x = Number(a);
    const y = Number(b);
    if (Number.isNaN(x) || Number.isNaN(y)) {
      throw new TypeError('Inputs must be numeric strings.');
    }
    return x + y;
  }

  /**
   * Displays a result (no string concatenation).
   * @param {number} value - Result to display.
   * @returns {void}
   */
  display (value) {
    console.log(`Addition result: ${value}`);
  }
}

export default Addition;
