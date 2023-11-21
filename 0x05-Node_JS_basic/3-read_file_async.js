const fs = require('fs');

/**
 * Counts the number of students in a CSV file and displays the results
 * @param {string} path - The path to the database file
 * @returns {Promise} - The number of students in the database
 * @author Melaku Demeke <https://github.com/MelakuDemeke>
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      
    }
  });
});

module.exports = countStudents;
