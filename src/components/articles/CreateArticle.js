import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import noticiation from '../../lib/notification'
import Form from './Form'

class CreateArticle extends React.Component {
	state = {
		data: {
			title: '',
			_url: '',
			text: '',
			author: '',
			image: '',
			summary: '',
		},
		errors: {},
	}

	handleChange = (event) => {
		const data = { ...this.state.data, [event.target.name]: event.target.value }
		const errors = { ...this.state.errors, [event.target.name]: '' }
		this.setState({ data, errors })
	}

	handleSubmit = async (event) => {
		event.preventDefault()

		try {
			const { data } = await axios.post('/api/articles', this.state.data, {
				headers: { Authorization: `Bearer ${Auth.getToken()}` },
			})
			noticiation('Added Article')
			this.props.history.push(`/blog/${data._id}`)
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

export default CreateArticle
