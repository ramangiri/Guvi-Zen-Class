var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 64};
function assertObjectsEqual(actual, expected, testName){
 if (JSON.stringify(expected) === JSON.stringify(actual))
  return "Passed";
 else
  return `Failed. Expected ${expected} but got ${actual}`;
}
console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'));