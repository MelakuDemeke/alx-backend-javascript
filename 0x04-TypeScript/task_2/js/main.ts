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
  const table = document.createElement('table');

  // Create the table header
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  headRow.innerHTML = `
    <td>FirstName</td>
    <td>Location</td>
  `;
  tableHead.appendChild(headRow);

  // Create the table body
  const tableBody = document.createElement('tbody');
  students.forEach((student) => {
    const bodyRow = document.createElement('tr');
    bodyRow.innerHTML = `
      <td>${student.firstName}</td>
      <td>${student.location}</td>
    `;
    tableBody.appendChild(bodyRow);
  });

  // Assemble the table
  table.appendChild(tableHead);
  table.appendChild(tableBody);

  // Append the table to the document body
  document.body.appendChild(table);
};

showStudents(studentsList);
