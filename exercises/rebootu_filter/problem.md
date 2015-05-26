Array#filter is another tool that lets us manipulate arrays by leveraging the powerful ability to pass functions in as arguments to other functions.

Array#filter allows you to pluck from an array only those elements that meet a certain criteria. You express that criteria by passing in a "chooser" function, which, given a particular element, decrees yay or nay to the question, "Should this element pass through the filter?"

For example:
```js
var numbers = [ 8.5, 53, -19, 1200, -1200 ];
var negativeNumbers = numbers.filter(function(number) {
	return number < 0; // in other words, return true if number is less than 0, else false
});
// negativeNumbers is [ -19, -1200 ];
```

Code like the above should be read as
	negativeNumbers is the subset of elements from numbers that are less than 0.
	
Generically, a line like
```js
filteredValues = originalValues.filter(chooserFunction)
```
should be read as:
	filteredValues is the subset of elements from originalValues that, when passed into chooserFunction, cause chooserFunction to return true.
