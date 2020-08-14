const router = require('express').Router()
const articles = require('../controllers/articles')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/articles').get(articles.index).post(secureRoute, articles.create)

router
	.route('/articles/:slug')
	.get(articles.show)
	.delete(secureRoute, articles.deleteArticle)
	.put(secureRoute, articles.edit)

router.route('/register').post(users.register)

router.route('/login').post(users.login)

module.exports = router
