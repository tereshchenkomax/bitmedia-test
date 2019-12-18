const express = require('express');
const router = express.Router();
const users = require('../users');
const users_statistic = require('../users_statistic');
const getJsonFromUrl = require('../helpers/getJsonFromUrl');

/* GET users listing. */
router.get('/', function (req, res, next) {
	const urlParams = new URLSearchParams(req.url);
	const myParam = urlParams.get('current_page');
	const myParam1 = urlParams.get('users_number');
	let jsonaaa = getJsonFromUrl(req.url);
	const result = users.map(a => {
		let userclicks = 0;
		let userviews = 0;
		users_statistic.filter(b => {
			if (b.user_id === a.id) {
				userclicks += b.clicks;
				userviews += b.page_views
			}
		});

		return {...a, userclicks, userviews}
	});
	console.log(jsonaaa);
	console.log(myParam,myParam1);

	res.send(result);
});

module.exports = router;
