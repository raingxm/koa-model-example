var assert = require('assert'),
	User = require('../models/user.js')

require('co-mocha');

describe('User Model testing', function() {
	it('should create a user', function*() {
		var user = new User();
		assert(typeof user, 'object');
	});
});