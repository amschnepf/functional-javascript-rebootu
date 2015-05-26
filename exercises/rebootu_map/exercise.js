"use strict"

var random = require('../randomizer')
var runner = require('../runner')

console.log('running lite_map/exercise.js');

var input = random.arrayOfInts(19, 3, 9)

var usedMap = false
var regularMap = Array.prototype.map

Array.prototype.map = function() {
  usedMap = true
  return regularMap.apply(this, arguments)
}

module.exports = runner.init(function() {
  usedMap = false
}).wrapUp(function(callback) {
  if (!usedMap) {
    this.emit('fail', this.__('didnt_use_map'));
  } else {
    this.emit('pass', this.__('used_map'));
  }
  callback(null, usedMap)
})(input)
