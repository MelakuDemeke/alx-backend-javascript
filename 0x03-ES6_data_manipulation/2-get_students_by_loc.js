const getStudentsByLocation = (studentList, location) => {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.filter((student) => student.location === location);
}

export default getStudentsByLocation;
