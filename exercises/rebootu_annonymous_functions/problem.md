Let's take a look at another example use of Array#map:
```js
// helper function
function makeEnthusiastic(text) {
	return text.toUpperCase() + '!!!';
}

var greetings = [ 'hi', 'hello', 'aloha' ];
var psychoGreetings = greetings.map(makeEnthusiastic);
// psychoGreetings is [ 'HI!!!', 'HELLO!!!', 'ALOHA!!!' ]
```
This is just like the examples you've seen so far. The only difference is that instead of using a library function like Math#round, we defined and used our own mapping function, makeEnthusiastic(), which takes a string as input and returns a vigorously caffeinated version of that string.

Now, here's another way of writing that same code:
```js
var greetings = [ 'hi', 'hello', 'aloha' ];
var psychoGreetings = greetings.map( function(greeting) {
	return greeting.toUpperCase() + '!!!';
});
// psychoGreetings is [ 'HI!!!', 'HELLO!!!', 'ALOHA!!!' ]
```
This version looks a little weird, but it's actually doing the same thing. The only difference is that instead of pre-defining our makeEnthusiastic function and passing in its name, we simply defined the *entire implementation* of the function right there within the parentheses after map(): 
```js
greetings.map( /* we plopped an entire function right here */ );
```
This is called passing an "annonymous function", because we never formally gave the function a name. 


# Task
Use Array#map to rewrite this function:

```js
function generateSlogans(candidateNames) {
	var slogans = [];
	for (var i = 0; i < letters.length; i++) {
		var name = candidateNames[i];
		var slogan = 'Vote for ' + name + '!';
		slogans.push(slogan);
	}
	return slogans;
}

// example usage
var candidateNames = [ 'Hilary', 'Ted', 'Bernie' ];
var slogans = generateSlogans(candidateNames);
// slogans is [ 'Vote for Hilary!', 'Vote for Ted!', 'Vote for Bernie!' ]
```

## Conditions

  * Your solution should use Array.prototype.map()
  * Do not use any for/while loops or Array.prototype.forEach.
  * Your function should not make use of any helper functions. Instead, pass an annonymous function into map()


## Boilerplate

```js
function generateSlogans(candidateNames) {
  // SOLUTION GOES HERE
}

// include this line so the program can test the correctness of your solution
module.exports = generateSlogans;
```