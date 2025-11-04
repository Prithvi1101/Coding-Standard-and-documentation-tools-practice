/**
 * @file primeChecker.js
 * @description Checks whether a number is prime.
 */

class PrimeChecker {
  /**
   * @constructor
   * @param {number} number - Number to check for primality
   */
  constructor(number) {
    this.number = number;
  }

  /**
   * Checks if the number is prime.
   * @returns {boolean} True if prime, false otherwise
   */
  isPrime() {
    if (this.number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(this.number); i++) {
      if (this.number % i === 0) return false;
    }
    return true;
  }

  displayResult() {
    const message = this.isPrime()
      ? `${this.number} is a Prime Number.`
      : `${this.number} is NOT a Prime Number.`;
    console.log(message);
  }
}

export default PrimeChecker;
