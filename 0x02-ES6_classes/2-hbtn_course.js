export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    else {
      this._name = name;
    }

    if (typeof length !== 'number') throw TypeError('Length must be a number');
    else {
      this._length = length;
    }

    if (!Array.isArray(students)) throw TypeError('Students must be an array');
    else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(na) {
    if (typeof na !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = na;
  }

  get length() {
    return this._length;
  }

  set length(zise) {
    if (typeof zise !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = zise;
  }

  get students() {
    return this._students;
  }

  set students(stu) {
    if (!Array.isArray(stu)) {
      throw new TypeError('must be a array');
    }
    this._students = stu;
  }
}
