
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(input) {
  input = input.replace(/\s+/g,"");
  console.log("After trim :", input);
  let results = {};
  for (const str of input) {
    if (results[str]) {
      results[str]++;
    }
    else {
      results[str] = 1;
    }
  }
  return results;

};
console.log(countLetters('Nannu'));
console.log(countLetters('Lighthouse Labs'));
console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters('Lighthouse Labs'), 'Lighthouse Labs');
assertEqual(countLetters('Nannu'),"hello");
