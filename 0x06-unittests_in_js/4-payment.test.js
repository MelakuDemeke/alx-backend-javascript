const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use calculateNumber method of Utils with correct arguments', () => {
    const utilsSpy  = sinon.spy(console);
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.be.equal(1);
    expect(utilsSpy .log.calledWith('The total is: 10')).to.be.true;
    expect(utilsSpy .log.callCount).to.be.equal(1);
    calculateNumberStub.restore();
    utilsSpy .log.restore();
  });
});