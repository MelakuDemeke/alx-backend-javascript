const fs = require('fs');

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
}

module.exports = countStudents;
