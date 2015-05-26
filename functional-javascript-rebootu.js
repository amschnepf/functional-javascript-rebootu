#!/usr/bin/env node

"use strict"

var Workshopper = require('workshopper')
var path = require('path')

Workshopper({
    name   : 'functional-javascript-rebootu'
  , appDir : __dirname
  , languages   : ['en', 'fr']
})
