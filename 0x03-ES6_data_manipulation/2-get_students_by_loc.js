const getStudentsByLocation = (studentList, location) => {
  return studentList.filter((student) => student.location === location);
}

export default getStudentsByLocation;
