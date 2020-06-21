/*

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4]), [2, 3]);
assertArraysEqual(middle(["1", "2", "3"]), ["1", "2", "3"]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]), [2]); 
assertArraysEqual(middle([1, 2, 3]),[2]);

*/
const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for ['Hello','Lighthouse']", () => {
    assert.deepEqual(middle(['Lighthouse','Labs']), []);
  });

  it('returns [3] for [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });

  it('returns [2,3] for [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });


});
