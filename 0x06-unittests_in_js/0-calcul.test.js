const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {

	it('should add two positive integers correctly', () => {
		assert.strictEqual(calculateNumber(2, 3), 5);
	});

	it('should add two negative integers correctly', () => {
		assert.strictEqual(calculateNumber(-2, -3), -5);
	});

});
