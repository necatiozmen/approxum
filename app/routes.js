const routes = require('next-routes')();

routes
	.add('/', '/home/index')
	.add('/contact', '/contact/index')


module.exports = routes;