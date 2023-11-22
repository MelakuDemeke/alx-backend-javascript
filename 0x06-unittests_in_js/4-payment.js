const Utils = require('./utils');

/**
 * Sends a payment request to the API.
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost.
 * @returns {void}
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
};

module.exports = sendPaymentRequestToApi;
