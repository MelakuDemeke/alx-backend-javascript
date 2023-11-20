const fs = require('fs');

function countStudents (path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if(!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
