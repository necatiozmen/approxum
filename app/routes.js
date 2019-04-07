const routes = require('next-routes')();

routes
	.add('/', '/home/index')
	.add('/contact', '/contact/index')
	.add('/advantages', '/advantages/index')
	.add('/services', '/services/index')


module.exports = routes;