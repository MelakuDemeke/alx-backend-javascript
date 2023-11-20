const fs = require('fs');

/**
 * Counts the number of students in a CSV file and displays the results.
 * 
 * @param {string} path - The path to the database file.
 * @throws {Error} If the database file does not exist.
 * @author Melaku Demeke <https://github.com/MelakuDemeke>
 */
function countStudents (path) {
  // Check if the file exists
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read and process the file contents
  const fileContent = fs.readFileSync(path, 'utf-8').trim();
  const fileLines = fileContent.split('\n');

  // Initialize Variables
  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  // Process each line of the file
  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];

    // Create or update student groups
    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }

    // Create an object for each student entry
    const studentEntry = Object.fromEntries(
      studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]])
    );

    // Add the student entry to the appropriate group
    studentGroups[field].push(studentEntry);
  }
  // Calculate and display the total number of students
  const totalStudents = Object.values(studentGroups)
    .reduce((total, group) => total + group.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  // Display the number of students in each group
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
}

module.exports = countStudents;
