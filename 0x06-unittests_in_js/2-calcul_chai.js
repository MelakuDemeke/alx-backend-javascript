/**
 * Performs a mathematical operation on two numbers.
 * @param {string} type - The type of operation to perform. Valid values are 'SUM',
 *                        'SUBTRACT', and 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the operation. If the operation is
 *                           'DIVIDE' and the second number is 0, returns 'Error'.
 */
const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }

  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }

  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }

  return 0;
};

module.exports = calculateNumber;
