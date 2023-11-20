const fs = require('fs');

function countStudents (path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
