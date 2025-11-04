
class MaxOfThree {
  constructor() {}

  findMax (a, b, c) {
    let max = a;

    if (b > max) {
      max = b;
    }

    if (c > max) {
      max = c;
    }

    return max;
  }

  findMaxFromArray (values) {
    if (!Array.isArray(values) || values.length !== 3) {
      throw new RangeError('values must be an array of exactly three numbers.');
    }
    const [a, b, c] = values;
    return this.findMax(a, b, c);
  }

  findMaxFromStrings (a, b, c) {
    const nums = [a, b, c].map(Number);
    if (nums.some((n) => Number.isNaN(n))) {
      throw new TypeError('All inputs must be numeric strings.');
    }
    return this.findMax(nums[0], nums[1], nums[2]);
  }
}

export default MaxOfThree;
