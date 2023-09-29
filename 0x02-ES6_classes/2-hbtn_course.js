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


}
