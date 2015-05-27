function seriousContenders(candidates) {
	return candidates.filter( function(candidate) {
		return candidate.oddsOfWinning >= 0.05;
	});
}

module.exports = seriousContenders;
