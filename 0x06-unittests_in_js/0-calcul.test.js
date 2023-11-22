const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {

	it('should add two positive integers correctly', () => {
		assert.strictEqual(calculateNumber(2, 3), 5);
	});

	it('should add two negative integers correctly', () => {
		assert.strictEqual(calculateNumber(-2, -3), -5);
	});

	it('should add a positive integer and a negative integer correctly', () => {
		assert.strictEqual(calculateNumber(2, -3), -1);
	});

	it('should add two floats correctly', () => {
		assert.strictEqual(calculateNumber(2.7, 3.2), 6);
	});

	it('should add two negative floats correctly', () => {
		assert.strictEqual(calculateNumber(-2.7, -3.2), -6);
	});

});
