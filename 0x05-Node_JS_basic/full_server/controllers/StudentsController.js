import readDatabase from '../utils';

class StudentController {
  static getAllStudents(request, response) {
    const dataPath = process.argv[2] || '';
    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['List of students:'];
      });
  }

  static getAllStudentsByMajor(request, response) {

  }
}

export default StudentController;
