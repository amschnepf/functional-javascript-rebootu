The Array#map function creates a new array from an old one, by taking each item in the old array and mapping it to some associated value.

For example:
```js
var numbers = [ 1.8, 1.4, -6.7, 3 ];
var roundedNumbers = numbers.map(Math.round); 
// roundedNumbers is [ 2, 1, -7, 3 ]
```

In the above example, we use the Math#round function to map each input number to its rounded version. So 1.8 maps to 2, 1.4 maps to 1, etc.

When you see a line like
```js
var roundedNumbers = numbers.map(Math.round); 
```
read it as "roundedNumbers is the result of rounding each element in numbers."

The generic pattern is:
```js
var mappedValues = originalValues.map(someFunction);
```

Calling map is like saying to some array, "Hey you, array, build me another array by passing each of your elements into this function." Without map, we would have to build that second array ourselves using a cumbersome loop:
```js
var numbers = [ 1.8, 1.4, -6.7, 3 ];
var roundedNumbers = [];
for (var i = 0; i < numbers.length; i++) {
	number = numbers[i];
	roundedNumber = Math.round(number);
	roundedNumbers.push(roundedNumber);
}
// roundedNumbers is (finally) [ 2, 1, -7, 3 ]
```

The map function provides a concise and expressive way of saying "convert this array of values into this other array of associated values". 

# Task
Rewrite this function using Array#map:
```js
function squareRoots(numbers) {
	var sqRoots = [];
  	for (var i = 0; i < numbers.length; i++) {
		var number = numbers[i];
		root = Math.sqrt(number);
		sqRoots.push(root);
  	}
	return sqRoots;
}

// example usage
var numbers = [ 9, 25, 169 ];
var roots = squareRoots(numbers);
// roots is [ 3, 5, 13 ]
```

## Conditions

  * Your solution should use Array.prototype.map()
  * Do not use any for/while loops or Array.prototype.forEach.


## Boilerplate

```js
function squareRoots(numbers) {
  // SOLUTION GOES HERE
}

// include this line so the program can test the correctness of your solution
module.exports = squareRoots;
```