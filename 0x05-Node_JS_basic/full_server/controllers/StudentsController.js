import readDatabase from '../utils';

class StudentController {
  static getAllStudents(req, res) {
    const dataPath = process.argv[2] || '';
    readDatabase(dataPath)
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

  }
}

export default StudentController;
