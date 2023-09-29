export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(cod) {
    if (typeof cod !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = cod;
  }
}
