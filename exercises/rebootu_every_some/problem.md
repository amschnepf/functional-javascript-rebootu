Let's examine two more very handy array functions: `Array#every` and `Array#some`.

These functions, like `Array#filter`, take a "criteria" function as input. But rather than returning back another array, they return a boolean. 

`Array#every` answers the question, "Does every element in the array meet the criteria?"
`Array#some` answers the question, "Do some of the elements (ie, at least 1) meet the criteria?"

Here's an example:
```js
// helper function
function isNegative(number) {
	return number < 0;
}
var a = isNegative(8);  // => false
var b = isNegative(-3); // => true

var numbers = [ -2, -1, 0, 1, 2, 3, 4 ];
var someNegative = numbers.some(isNegative) // => true
var allNegative = numbers.some(isNegative) // => false
```

# Task

Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

To keep things simple, we'll say that a user object has only one field, `id`. When comparing two users, you only need to check that the `id`s match. So to check whether a particular user "exists" in the original list, you are really just checking whether the original list contains a user whose `id` is the same.

## Example

```js
var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers)

testAllValid([
  { id: 2 },
  { id: 1 }
])
// => true

testAllValid([
  { id: 2 },
  { id: 4 },
  { id: 1 }
])
// => false
```

## Arguments

* goodUsers: a list of valid users

Use Array.prototype.some and Array.prototype.every to check whether every user passed to your returned function exists in the array passed to the exported function.

## Conditions

* Do not use any for/while loops or Array#forEach.
* Do not create any unecessary functions e.g. helpers.

## Resources

* https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
* https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some

## Boilerplate

```js
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
  };
}

module.exports = checkUsersValid
```
