const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(item) {
  return item.slice(1);
};

const result = ["Hello","Lighthouse","Labs"];
tail(result);
assertEqual(result.length,3);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

const arr = ["hello"];
tail(arr);
assertEqual(arr.length,1);

const tailCheck1 = [];
tail(tailCheck1);

const tailCheck2 = [1];
tail(tailCheck2);