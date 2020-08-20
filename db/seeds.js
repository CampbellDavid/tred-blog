const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Article = require('../models/article')
const User = require('../models/user')

mongoose.connect(
	dbURI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, db) => {
		if (err) return console.log(err)
		db.dropDatabase()
			.then(() => {
				return User.create([
					{
						username: 'newUser',
						email: 'newUser@email.co',
						password: 'password1',
						passwordConfirmation: 'password1',
					},
				])
			})
			.then((createdUsers) => {
				console.log(`${'newUser'.repeat(createdUsers.length)} users created`)
				return Article.create([
					{
						title: 'This Is A Demo Article',
						text:
							'Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Turpis tincidunt id aliquet risus feugiat in ante. Non blandit massa enim nec dui nunc mattis enim. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Potenti nullam ac tortor vitae purus faucibus. Nullam non nisi est sit. Porta non pulvinar neque laoreet suspendisse. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. In cursus turpis massa tincidunt dui ut ornare. Tortor pretium viverra suspendisse potenti. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Nunc lobortis mattis aliquam faucibus purus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Placerat vestibulum lectus mauris ultrices. Pellentesque dignissim enim sit amet. Volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat scelerisque varius morbi.',
						author: 'Joe Bloggs',
						tags: { type: String, required: false },
						image:
							'https://cdn.mos.cms.futurecdn.net/YLMh9EJRPhmht9GWNhiN7G-1024-80.jpg.webp',
						summary: 'This is a summary',
						user: createdUsers[0],
					},
				])
			})
			.then((createdArticles) =>
				console.log(`${createdArticles.length} articles created`)
			)
			.catch((err) => console.log(err))
			.finally(() => mongoose.connection.close())
	}
)
