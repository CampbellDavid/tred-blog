import React from 'react'
import axios from 'axios'
import ArticleCard from './ArticleCard'
import SearchBar from '../common/SearchBar'

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
					<div className='columns is-mobile is-multiline'>
						{articleArray.length === 0 && this.state.userInput ? (
							<p>No found articles</p>
						) : (
							articleArray.map((article) => (
								<ArticleCard key={article._id} {...article} />
							))
						)}
					</div>
				</div>
			</section>
		)
	}
}

export default Index
