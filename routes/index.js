1
/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title: 'CoinSearch',
		action: 'Easily find the ballance of any wallet in the blockchain!'
	});
};
