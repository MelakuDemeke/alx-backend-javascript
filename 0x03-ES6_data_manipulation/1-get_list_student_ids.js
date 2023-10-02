const getListStudentIds = (studentList) => {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.map((student) => student.id);
};

export default getListStudentIds;
