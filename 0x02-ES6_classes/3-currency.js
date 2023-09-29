export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(cod) {
    this._code = cod;
  }

  get name() {
    return this._name;
  }

  set name(na) {
    this._name = na;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
