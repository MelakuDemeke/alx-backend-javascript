// Define a Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional properties with any value
}

// Define a Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define a function type for printing a teacher's name
type PrintTeacherFunction = (firstName: string, lastName: string) => string;

// Implement a function to print a teacher's name
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Define an interface for a student class constructor
interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Define an interface for a student class
interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement a StudentClass class that implements IStudentClass
class StudentClass implements IStudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}

// Implement a function to create a student instance
function createStudent(
  StudentClassConstructor : IStudentClassConstructor,
  firstName: string,
  lastName: string
): IStudentClass {
  return new StudentClassConstructor (firstName, lastName);
}

// Export the types and functions
export { Teacher, Directors, PrintTeacherFunction, printTeacher, IStudentClass, StudentClass, createStudent };