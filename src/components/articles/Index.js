import React from 'react'
import axios from 'axios'
import ArticleCard from './ArticleCard'
import SearchBar from '../common/SearchBar'
import Auth from '../../lib/auth'

class Index extends React.Component {
	state = {
		articles: null,
		userInput: '',
	}

	async componentDidMount() {
		try {
			const articles = await axios.get('/api/articles')
			this.setState({ articles: articles.data })
			console.log('index', articles.data)
		} catch (error) {
			console.log(error)
		}
	}

	handleChange = (userInput) => {
		this.setState({ userInput })
	}

	handleLogout = () => {
		Auth.logout()
		this.props.history.push('/blog')
	}

	createNewArticle = () => {
		this.props.history.push('/blog/create')
	}

	render() {
		if (!this.state.articles) return null
		const articleArray = this.state.articles.filter((article) =>
			article.title.toLowerCase().includes(this.state.userInput.toLowerCase())
		)
		return (
			<section className='section'>
				<div className='container'>
					<div className='pt-10 d-flex row justify-content-center align-items-center'>
						<h2 className='index-head mr-3'>Our Blog</h2>
						<SearchBar onChange={this.handleChange} />
					</div>
					<div className='d-flex justify-content-center'>
						<div className='d-flex'>
							<div className='d-flex row'>
								{articleArray.length === 0 && this.state.userInput ? (
									<p>No found articles</p>
								) : (
									articleArray.map((article) => (
										<ArticleCard key={article._id} {...article} />
									))
								)}
							</div>
						</div>
					</div>
					{Auth.isAuthenticated() && (
						<div className='buttons'>
							<button onClick={this.handleLogout}>Logout</button>
							<button onClick={this.createNewArticle}>New Article</button>
						</div>
					)}
				</div>
			</section>
		)
	}
}

export default Index
