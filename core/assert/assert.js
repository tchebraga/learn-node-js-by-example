var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);

// these three assertions are equivalent:
assert( expected === 3, 'one plus two is three');
assert.ok( expected == 3, 'one plus two is three');
assert.equal(expected, 3, 'one plus two is three');

// these three assertions are equivalent:
assert(expected != 4, 'one plus two is three');
assert.ok(expected != 4, 'one plus two is three');
assert.notEqual(expected, 4, 'one plus two is three (NOT Four!)');


var list1 = [1, 2, , 3, 4, 5]; // these look the same
var list2 = [1, 2, 3, 4, , 5]; // but they are NOT the same.

// deepEqual checks the elements in the arrays are identical
assert.notDeepEqual(list1, list2, 'not the same');


var person1 = { "name":"john", "age":"21" };
var person2 = { "name":"jane", "age":"19" };

// deepEqual checks the elements in the objects are identical
assert.notDeepEqual(person1, person2, 'these two objects are NOT the same');

assert.equal(1, true, 'not the same but passes because 1 is "truthy"');
assert.strictEqual(1, 1, 'these are obviously the same');

assert.notStrictEqual(1, true, 'not the same');
