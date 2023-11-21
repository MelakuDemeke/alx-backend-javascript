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

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        const studentEntry = Object.fromEntries(
          studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]),
        );

        studentGroups[field].push(studentEntry);
      }

      const totalStudents = Object.values(studentGroups)
        .reduce((total, group) => total + group.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
