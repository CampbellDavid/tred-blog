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

	handleDelete = async () => {
		const articleId = this.props.match.params.slug
		try {
			await axios.delete(`/api/articles/${articleId}`, {
				headers: { Authorization: `Bearer ${Auth.getToken()}` },
			})
			this.props.history.push('/blog')
		} catch (err) {
			this.props.history.push('/unknown')
		}
	}

	wordCount = () => {
		if (!this.state.article.text) return null
		const textArr = this.state.article.text.split(' ')
		return Math.ceil(textArr.length / 250)
	}

	handleLogout = () => {
		Auth.logout()
		this.props.history.push('/blog')
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
					<>
						{Auth.isAuthenticated() ? (
							<div>
								{
									<div>
										<Link to={`/blog/${article.slug}/edit`}>
											<button
												to={`/blog/${article.slug}/edit`}
												className='btn btn-dark'
												type='button'
											>
												Edit
											</button>
										</Link>
										<button
											className='btn btn-danger'
											onClick={this.handleDelete}
										>
											Delete
										</button>
									</div>
								}
							</div>
						) : null}
					</>
				</div>
				{Auth.isAuthenticated() && (
					<button onClick={this.handleLogout}>Logout</button>
				)}
				<div className='col-2'></div>
			</section>
		)
	}
}

export default ViewArticle
