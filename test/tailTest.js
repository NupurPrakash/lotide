/*
const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = ["Hello","Lighthouse","Labs"];
tail(result);
assertEqual(result.length,3);//3 === 3

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");
assertEqual(result[1],"Lighthouse");

const arr = ["hello"];
tail(arr);
assertEqual(arr.length,1);

const tailCheck1 = [];
tail(tailCheck1);
assertEqual(tailCheck1,1);

const tailCheck2 = [1];
tail(tailCheck2);
assertEqual(tailCheck2.length,4);
*/

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {

  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });

  it("returns ['Lighthouse','Labs'] for ['Hello','Lighthouse','Labs']", () => {
    assert.deepEqual(tail(['Hello','Lighthouse','Labs']), ['Lighthouse','Labs']);
  });

  it('returns [] for [1]', () => {
    assert.deepEqual(tail([1]),[]);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]),[]);
  });


});