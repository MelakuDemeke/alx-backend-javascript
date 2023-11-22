const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let loggerSpy;

  beforeEach(() => {
    if (!loggerSpy) {
      loggerSpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    loggerSpy.log.resetHistory();
  });

  it('should log "The total is: 120" to the console when sending a payment request with amounts 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(loggerSpy.log.calledWith('The total is: 120')).to.be.true;
    expect(loggerSpy.log.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" to the console when sending a payment request with amounts 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(loggerSpy.log.calledWith('The total is: 20')).to.be.true;
    expect(loggerSpy.log.calledOnce).to.be.true;
  });
});
