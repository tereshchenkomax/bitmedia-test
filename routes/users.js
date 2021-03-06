const express = require('express');
const router = express.Router();
const users = require('../users');
const users_statistic = require('../users_statistic');

/* GET users listing. */
router.get('/', function (req, res) {
    const pageSize = req.query.users_number || 50;
    const pageIndex = parseInt(req.query.current_page) + 1 || 1;
	const usersSlised = users.slice(pageSize * pageIndex - pageSize, pageSize * pageIndex);
    const result = usersSlised.map(a => {
        let total_clicks = 0;
        let total_page_views = 0;
        users_statistic.filter(b => {
            if (b.user_id === a.id) {
                total_clicks += b.clicks;
                total_page_views += b.page_views
            }
        });
        return {...a, total_clicks, total_page_views}
    });
    res.send(result);
});

router.get('/singleuser', function (req, res) {
    const userid = req.query.userid;
    if (users.some(user => user.id === userid) ){
        console.log('test')
    }
})



module.exports = router;
