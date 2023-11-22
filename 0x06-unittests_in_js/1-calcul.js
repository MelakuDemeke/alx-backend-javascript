/**
 * Adds two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
const calculateNumber = (type, a, b) =>{
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    }

}

module.exports = calculateNumber;
