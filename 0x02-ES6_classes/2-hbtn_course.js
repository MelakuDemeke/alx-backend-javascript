export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    else {
      this._name = name;
    }

    this._length = length;
    this._students = students;
  }
}
