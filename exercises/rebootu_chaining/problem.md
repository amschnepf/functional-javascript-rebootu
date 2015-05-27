Now that we know about `filter` and `map`, we can start chaining them together in cool ways.

For example:
```js
var purchases = [
	{ item: 'bagel creamcheese', type: 'food',     vendor: 'Park Ave Cafe' },
	{ item: 'metro 2-hour pass', type: 'transp',   vendor: 'Metrolink'     },
	{ item: 'overpriced tamale', type: 'food',     vendor: 'La Salud'      },
	{ item: 'another tamale',    type: 'food',     vendor: 'La Salud'      },
	{ item: 'gloves',            type: 'clothing', vendor: 'Shell Station' }
];

var namesOfFoodStoresVisited = purchases.filter( function(purchase) {
	return purchase.type === 'food';
}).map( function(purchase) {
	return purchase.vendor
});

// namesOfFoodStoresVisited is [ 'Park Ave Cafe', 'La Salud', 'La Salud' ]
```

# Task
Use Array#filter to write a function called `getShortMessages`.

`getShortMessages` takes an array of objects with '.message' properties and returns an array of messages that are *less than < 50 characters long*.

The function should return an array containing the messages themselves, *without their containing object*.

## Arguments

* messages: an Array of 10 to 100 random objects that look something like this:

```js
{
  message: 'Esse id amet quis eu esse aute officia ipsum.' // random
}
```

## Conditions

* Do not use any for/while loops or Array#forEach.
* Do not create any unnecessary functions e.g. helpers.

## Hint

* Try chaining some Array methods!

## Example

```
[ 'Tempor quis esse consequat sunt ea eiusmod.',
  'Id culpa ad proident ad nulla laborum incididunt.',
  'Ullamco in ea et ad anim anim ullamco est.',
  'Est ut irure irure nisi.' ]
```

## Resources

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Boilerplate

```js
function getShortMessages(messages) {
  // SOLUTION GOES HERE
}

module.exports = getShortMessages
```
