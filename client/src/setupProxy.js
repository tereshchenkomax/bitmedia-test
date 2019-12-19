const proxy = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		proxy('/usersendpoint',
			{
				target: 'http://localhost:3001/',
				changeOrigin: true,
			}
		));
};
