const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let utilsSpy;

  beforeEach(() => {
    if (!utilsSpy) {
      utilsSpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    utilsSpy.log.resetHistory();
  });

  it('The total is: 120" to the console when invoking `sendPaymentRequestToApi(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(utilsSpy.log.calledWith('The total is: 120')).to.be.true;
    expect(utilsSpy.log.calledOnce).to.be.true;
  });

  it('The total is: 20" to the console when invoking `sendPaymentRequestToApi(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    expect(utilsSpy.log.calledWith('The total is: 20')).to.be.true;
    expect(utilsSpy.log.calledOnce).to.be.true;
  });
});
