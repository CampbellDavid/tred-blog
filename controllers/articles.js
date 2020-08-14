const Article = require('../models/article')

function index(req, res) {
	Article.find()
		.then((foundArticles) => res.status(200).json(foundArticles))
		.catch((err) => console.log(err))
}

function create(req, res) {
	req.body.user = req.currentUser
	Article.create(req.body)
		.then((createdArticle) => res.status(201).json(createdArticle))
		.catch((err) => console.log(err))
}

function show(req, res) {
	Article.findOne({ slug: req.params.slug })
		.then(console.log(req.params.slug))
		.then((article) => res.status(202).json(article))
		.catch((err) => console.log(err))
}

function deleteArticle(req, res) {
	Article.findOne({ slug: req.params.slug })
		.then((article) => article.deleteOne())
		.then(() => res.sendStatus(204))
		.catch((err) => console.log(err))
}

function edit(req, res) {
	Article.findOne({ slug: req.params.slug })
		.then((article) => {
			if (!article) return res.status(404).json({ message: 'Not Found' })
			Object.assign(article, req.body)
			return article.save()
		})
		.then((editedArticle) => res.status(202).json(editedArticle))
		.catch((err) => res.json(err))
}

module.exports = {
	index,
	create,
	show,
	deleteArticle,
	edit,
}

// delete requires user auth?
