const fs = require('fs');

function countStudents (path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileContent = fs.readFileSync(dataPath, 'utf-8').trim();
  const fileLines = fileContent.split('\n');
}

module.exports = countStudents;
