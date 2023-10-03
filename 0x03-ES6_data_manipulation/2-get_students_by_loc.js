const getStudentsByLocation = (studentList,
  location) => studentList.filter((student) => student.location === location);

export default getStudentsByLocation;
