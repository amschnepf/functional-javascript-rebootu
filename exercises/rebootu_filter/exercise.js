"use strict"

var runner = require('../runner')

var input = [
    { name: 'Hilary', party: 'D', oddsOfWinning: 0.55 },
    { name: 'Ted', party: 'R', oddsOfWinning: 0.03 },
    { name: 'Bernie', party: 'D', oddsOfWinning: 0.01 },
    { name: 'Jeb', party: 'R', oddsOfWinning: 0.25 },
    { name: 'Marco', party: 'R', oddsOfWinning: 0.15 },
    { name: 'Mitt', party: 'R', oddsOfWinning: 0.02 },
    { name: 'Scott', party: 'R', oddsOfWinning: 0.09 },
    { name: 'Rand', party: 'R', oddsOfWinning: 0.05 },
    { name: 'Barack', party: 'D', oddsOfWinning: 0.0 }
];

module.exports = runner.hideInput(input)
