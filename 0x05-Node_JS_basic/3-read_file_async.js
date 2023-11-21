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
      const fileContent = fs.readFileSync(path, 'utf-8').trim();
      const fileLines = fileContent.split('\n');

      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
    
    }
  });
});

module.exports = countStudents;
