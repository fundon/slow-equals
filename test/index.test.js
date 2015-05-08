var assert = require('assert');
var slowEquals = require('..');

describe('slow-equals', function() {
  var a, b, r;

  it('should not equal when lenght not equal', function() {
    a = 'hello';
    b = 'hello world';
    r = slowEquals(a, b);

    assert.equal(false, r);

    r = slowEquals(b, a);

    assert.equal(false, r);
  });

  it('should equal', function() {
    a = 'hello';
    b = 'hello';
    r = slowEquals(a, b);

    assert.equal(true, r);
  });

  it('should not equal', function() {
    a = 'hello';
    b = 'helLo';
    r = slowEquals(a, b);

    assert.equal(false, r);
  });

});
