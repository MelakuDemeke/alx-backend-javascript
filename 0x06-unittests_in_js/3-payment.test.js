const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use calculateNumber method of Utils with correct arguments', () => {
    const utilsSpy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(utilsSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilsSpy.calculateNumber.callCount).to.be.equal(1);
    utilsSpy.calculateNumber.restore();
  });
});