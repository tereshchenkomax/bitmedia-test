const express = require('express');
const router = express.Router();
const users = require('../users');
const users_statistic = require('../users_statistic');

/* GET users listing. */
router.get('/', function (req, res, next) {
    const users_number = req.query.users_number || 50;
    const current_page = req.query.current_page || 1;
	const usersSlised = users.slice(users_number * current_page - users_number, users_number * current_page);
    const result = usersSlised.filter(a => {
        let totalClicks = 0;
        let totalViews = 0;
        users_statistic.filter(b => {
            if (b.user_id === a.id) {
                totalClicks += b.clicks;
                totalViews += b.page_views
            }
        });

        return {...a, totalClicks, totalViews}
    });
    res.send(result);
});

module.exports = router;
