function generateSlogans(candidateNames) {
	return candidateNames.map( function(name) {
		return 'Vote for ' + name + '!';
	});
}

module.exports = generateSlogans;