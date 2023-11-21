import readDatabase from '../utils';
const VALID_MAJORS = ['CS', 'SWE'];
const DB_FILE = process.argv[2] || '';

class StudentController {
  static getAllStudents(req, res) {
    readDatabase(DB_FILE)
      .then((studentGroups) => {
        const responseParts = ['List of students:'];
        const compareIgnoreCase = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());
        for (const [field, group] of Object.entries(studentGroups).sort((a,
          b) => compareIgnoreCase(a[0], b[0]))) {
          responseParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
        }
        res.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        res.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!VALID_MAJORS.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(DB_FILE)
    .then((studentGroups) => {
      const responseText = Object.keys(studentGroups).includes(major)
          ? `List: ${studentGroups[major].map((student) => student.firstname).join(', ')}`
          : '';

        res.status(200).send(responseText);
    })
    .catch((err) => {
      res.status(500).send(err instanceof Error ? err.message : err.toString());
    });

  }
}

export default StudentController;
