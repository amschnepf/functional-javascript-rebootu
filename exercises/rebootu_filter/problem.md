Just like Array#map, Array#filter is another tool that allows us manipulate arrays by leveraging the powerful ability to pass functions in as arguments to other functions.

The Array#filter function lets you specify a filtering criteria on an array, and receive back a winnowed-down version of the original array, where only some elements remain and the rest have been filtered out. You express that filtering criteria by passing in a function, which, given a particular element, decrees yay or nay to the question, "Should this element be included?"

For example:
```js
var numbers = [ 8.5, 53, -19, 1200, -1200 ];
var negativeNumbers = numbers.filter( function(number) {
	return number < 0; // this will return true if number is less than 0, else false
});
// negativeNumbers is [ -19, -1200 ];
```

Code like the above should be read as

   `negativeNumbers` is the subset of elements from `numbers` that are less than 0.


Generically, a line like
```js
var filteredValues = originalValues.filter(chooserFunction)
```
should be read as:

   `filteredValues` is the subset of elements from `originalValues` that, when passed into `chooserFunction`, cause `chooserFunction` to return `true`.

When you call `filter`, the original array will repeatedly call your "chooser" function, once for each of its elements. Note that your "chooser" function must return a boolean. This is the mechanism by which the function communicates whether or not to include the element in question.

Also note that `filter`, just like `map`, returns a NEW array. The original array remains unmodified:
```js
var numbers = [ 6, 29, 1, 8, 6 ];
var evenNumbers = numbers.filter( function(number) {
	return number % 2 == 0;
});
// evenNumbers is [ 6, 8, 6 ]
// numbers is still [ 6, 29, 1, 8, 6 ]
```

# Task

Use Array#filter to rewrite this function:
```js
/**
 @function seriousContenders obtains just the serious contenders from a group of presidential candidates
 @input an array of presidential candidate objects
 @returns an array of only those candidates that have at least a 5 percent chance of winning the election
 */
function seriousContenders(candidates) {
	var contenders = [];
	for (var i = 0; i < candidates.length; i++) {
		var candidate = candidates[i];
		if (candidate.oddsOfWinning >= 0.05) {
			contenders,push(candidate);
		}
	}
	return contenders;
}
```

## Example Usage

```js
var candidates = [
	{ name: 'Hilary', party: 'D', oddsOfWinning: 0.55 },
	{ name: 'Ted', 	  party: 'R', oddsOfWinning: 0.03 },
	{ name: 'Bernie', party: 'D', oddsOfWinning: 0.01 },
	{ name: 'Jeb',    party: 'R', oddsOfWinning: 0.25 },
	{ name: 'Marco',  party: 'R', oddsOfWinning: 0.15 },
	{ name: 'Mitt',   party: 'R', oddsOfWinning: 0.02 },
];
var contenders = seriousContenders(candidates);
/* 
contenders should be [
	{ name: 'Hilary', party: 'D', oddsOfWinning: 0.55 },
	{ name: 'Jeb',    party: 'R', oddsOfWinning: 0.25 },
	{ name: 'Marco',  party: 'R', oddsOfWinning: 0.15 }
]
*/
```

## Arguments

* candidates: an Array of 10 or so candidate objects that look something like this:

```js
{ 
	name: 'Hilary', 
	party: 'D', 
	oddsOfWinning: 0.55 
}
```

## Conditions

* Use Array.prototype.filter
* Do not use any for/while loops or Array#forEach.
* Do not create any unnecessary functions e.g. helpers.

## Boilerplate

```js
function seriousContenders(candidates) {
	// SOLUTION GOES HERE
}

module.exports = seriousContenders;
```


