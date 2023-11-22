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
    
  });

  describe('Test Division', () => {
    
  });


});