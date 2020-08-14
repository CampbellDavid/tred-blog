import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import Form from './Form'

class EditArticle extends React.Component {
	state = {
		data: {
			title: '',
			text: '',
			author: '',
			image: '',
			summary: '',
		},
		errors: {},
	}

	async componentDidMount() {
		const articleId = this.props.match.params.slug
		try {
			const { data } = await axios.get(`/api/articles/${articleId}`)
			console.log(data)
			this.setState({ data })
		} catch (err) {
			console.log(err)
		}
	}

	handleChange = (event) => {
		const data = { ...this.state.data, [event.target.name]: event.target.value }
		const errors = { ...this.state.errors, [event.target.name]: '' }
		this.setState({ data, errors })
	}

	handleSubmit = async (event) => {
		event.preventDefault()
		const articleId = this.props.match.params.slug
		try {
			const res = await axios.put(
				`/api/articles/${articleId}`,
				this.state.data,
				{
					headers: { Authorization: `Bearer ${Auth.getToken()}` },
				}
			)
			this.props.history.push(`/blog/${res.data.slug}`)
		} catch (errors) {
			this.setState({ errors: errors.response.data.errors })
		}
	}

	render() {
		return (
			<section className='section'>
				<div className='container'>
					<Form
						data={this.state.data}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						errors={this.state.errors}
					/>
				</div>
			</section>
		)
	}
}

export default EditArticle
