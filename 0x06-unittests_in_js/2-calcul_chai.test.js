const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('test Addition', () => {
    it('should add two positive integers correctly', () => {
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });

    it('should add two negative integers correctly', () => {
      expect(calculateNumber('SUM', -2, -3)).to.equal(-5);
    });

    it('should add a positive integer and a negative integer correctly', () => {
      expect(calculateNumber('SUM', 2, -3)).to.equal(-1);
    });

    it('should add two floats correctly', () => {
      expect(calculateNumber('SUM', 2.7, 3.2)).to.equal(6);
    });

    it('should add two negative floats correctly', () => {
      expect(calculateNumber('SUM', -2.7, -3.2)).to.equal(-6);
    });

    it('should add a positive float and a negative float correctly', () => {
      expect(calculateNumber('SUM', 2.7, -3.2)).to.equal(0);
    });

    it('should return 0 for two zeros', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('test Subtraction', () => {
    it('should subtract two positive integers correctly', () => {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });

    it('should subtract two negative integers correctly', () => {
      expect(calculateNumber('SUBTRACT', -2, -3)).to.equal(1);
    });

    it('should subtract a positive integer and a negative integer correctly', () => {
      expect(calculateNumber('SUBTRACT', 2, -3)).to.equal(5);
    });

    it('should subtract two floats correctly (rounded)', () => {
      expect(calculateNumber('SUBTRACT', 3.5, 1.2)).to.equal(3);
    });

    it('should subtract two negative floats correctly (rounded)', () => {
      expect(calculateNumber('SUBTRACT', -2.7, -1.2)).to.equal(-2);
    });

    it('should subtract a positive float and a negative float correctly (rounded)', () => {
      expect(calculateNumber('SUBTRACT', 5.7, -3.2)).to.equal(9);
    });

    it('should return 0 for two equal numbers', () => {
      expect(calculateNumber('SUBTRACT', 3, 3)).to.equal(0);
    });
  });

  describe('test Division', () => {
    it('should divide two positive integers correctly', () => {
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    });

    it('should divide two negative integers correctly', () => {
      expect(calculateNumber('DIVIDE', -9, -3)).to.equal(3);
    });

    it('should divide a positive integer by a negative integer correctly', () => {
      expect(calculateNumber('DIVIDE', 10, -2)).to.equal(-5);
    });

    it('should divide two floats correctly (rounded)', () => {
      expect(calculateNumber('DIVIDE', 5.5, 2.2)).to.equal(3);
    });

    it('should divide two negative floats correctly (rounded)', () => {
      expect(calculateNumber('DIVIDE', -8.4, -2)).to.equal(4);
    });

    it('should divide a positive float by a negative float correctly (rounded)', () => {
      expect(calculateNumber('DIVIDE', 7.2, -1.8)).to.equal(-3.5);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });
  });
});
