const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
	User.create(req.body)
		.then((user) =>
			res.status(201).json({
				message: `Created account successfully with username: ${user.username}`,
			})
		)
		.catch((error) => res.json(error))
}

function login(req, res) {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (!user || !user.validatePassword(req.body.password)) {
				return res.status(401).json({ message: 'Unauthorized' })
			}
			const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '24h' })
			res.status(202).json({ message: `Welcome back ${user.username}`, token })
		})
		.catch(() => res.status(401).json({ message: 'Unauthorized' }))
}

module.exports = { register, login }
