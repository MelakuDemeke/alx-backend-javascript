import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(am) {
    this._amount = am;
  }

  get currency() {
    return this._currency;
  }

  set currency(cur) {
    this._currency = cur;
  }
}
