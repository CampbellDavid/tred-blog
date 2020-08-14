import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
import Moment from 'moment'
import MarkdownPreview from '@uiw/react-markdown-preview'

class ViewArticle extends React.Component {
	state = {
		article: {},
		errors: {},
	}

	async componentDidMount() {
		const articleId = this.props.match.params.slug

		try {
			const { data } = await axios.get(`/api/articles/${articleId}`)
			this.setState({ article: data })
			console.log(data)
		} catch (error) {
			this.props.history.push('/unknown')
		}
	}

	isOwner = () => {
		return Auth.getPayload().sub === this.state.article.user
	}

	wordCount = () => {
		if (!this.state.article.text) return null
		const textArr = this.state.article.text.split(' ')
		return Math.ceil(textArr.length / 250)
	}

	render() {
		if (!this.state.article) return null
		const { article } = this.state

		return (
			<section className='section'>
				<div className='col-2'></div>
				<div className='col-8'>
					<div>
						<img
							src={article.image}
							alt={article.title}
							width='700'
							height='400'
						/>
						<h2>{article.title}</h2>
						<p>
							{`${Moment(article.createdAt).format(
								'MMM Do, YYYY'
							)} | ${this.wordCount()} min read`}
						</p>
						<hr />
						<MarkdownPreview source={article.text} />
						<p style={{ fontStyle: 'italic' }}>by {article.author}</p>
					</div>
				</div>
				<div className='col-2'></div>
			</section>
		)
	}
}

export default ViewArticle
