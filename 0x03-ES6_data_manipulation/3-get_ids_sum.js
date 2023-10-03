const getStudentIdsSum = (studentList) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.id;
  return studentList.reduce(reducer, 0);
};

export default getStudentIdsSum;
