export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Melaku",
  lastName: "Demeke",
  age: 26,
  location: "Addis ababa, Ethiopia",
};
const student2: Student = {
  firstName: "Getnet",
  lastName: "legese",
  age: 22,
  location: "Aseb Erithrea",
};

const studentsList: Array<Student> = [student1, student2];

export const showStudents = (students: Array<Student>): void => {
  
};
