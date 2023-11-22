const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('Test Addition', () => {
    it('should add two positive integers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    });
  
    it('should add two negative integers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', -2, -3), -5);
    });
  
    it('should add a positive integer and a negative integer correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 2, -3), -1);
    });
  
    it('should add two floats correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 2.7, 3.2), 6);
    });
  
    it('should add two negative floats correctly', () => {
      assert.strictEqual(calculateNumber('SUM', -2.7, -3.2), -6);
    });
  
    it('should add a positive float and a negative float correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 2.7, -3.2), 0);
    });
  
    it('should return 0 for two zeros', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('Test Subtraction', () => {
    it('should subtract two positive integers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    });
  
    it('should subtract two negative integers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2, -3), 1);
    });
  
    it('should subtract a positive integer and a negative integer correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, -3), 5);
    });
  
    it('should subtract two floats correctly (rounded)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 1.2), 3);
    });
  
    it('should subtract two negative floats correctly (rounded)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.7, -1.2), -2);
    });
  
    it('should subtract a positive float and a negative float correctly (rounded)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.7, -3.2), 9);
    });
  
    it('should return 0 for two equal numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 3), 0);
    });
  });

  describe('Test Division', () => {
    
  });


});