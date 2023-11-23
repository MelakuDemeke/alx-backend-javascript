/**
 * Retrieves a payment token from the API.
 * @param {boolean} success - Indicates whether the API call was successful.
 * @returns {Promise} A promise that resolves to the API response.
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  if (success) {
    resolve({ data: 'Successful response from the API' });
  }
});

module.exports = getPaymentTokenFromAPI;
