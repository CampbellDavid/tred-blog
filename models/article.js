const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const articleSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, maxlength: 150 },
		text: { type: String, required: true },
		author: { type: String, required: true, maxLength: 40 },
		authorBio: { type: String },
		image: { type: String, required: true },
		summary: { type: String, required: true, maxLength: 75 },
		slug: { type: String, slug: 'title', slug_padding_size: 4, unique: true },
		user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Article', articleSchema)
