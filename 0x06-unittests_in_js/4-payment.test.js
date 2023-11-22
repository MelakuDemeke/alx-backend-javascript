const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberStub.restore();
  });

  it('should use calculateNumber method of Utils with correct arguments', () => {
    const amount = 100;
    const tax = 20;

    sendPaymentRequestToApi(amount, tax);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWithExactly('SUM', amount, tax)).to.be.true;
  });
});
