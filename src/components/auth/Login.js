import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import notification from '../../lib/notification'

class Login extends React.Component {
	state = {
		data: {
			email: '',
			password: '',
		},
		error: '',
	}

	handleChange = ({ target: { name, value } }) => {
		const data = { ...this.state.data, [name]: value }
		this.setState({ data, error: '' })
	}

	handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const res = await axios.post('/api/login', this.state.data)
			Auth.setToken(res.data.token)
			notification(res.data.message)
			this.props.history.push('/blog')
		} catch (err) {
			this.setState({ error: 'Wrong Username/Password Combination' })
		}
	}

	render() {
		return (
			<section className='section'>
				<div className='container'>
					<div className='columns'>
						<form
							onSubmit={this.handleSubmit}
							className='column is-half is-offset-one-quarter card'
						>
							<h2 className='title'>Login</h2>
							<div className='field'>
								<label className='label'>Email</label>
								<div className='control'>
									<input
										className={`input ${this.state.error} ? : 'text-danger' : '' `}
										name='email'
										placeholder='Email'
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className='field'>
								<label className='label'>Password</label>
								<div className='control'>
									<input
										className={`input ${this.state.error} ? : 'text-danger' : '' `}
										type='password'
										name='password'
										placeholder='Password'
										onChange={this.handleChange}
									/>
								</div>
								{this.state.error && (
									<small className='text-danger'>{this.state.error}</small>
								)}
							</div>
							<button type='submit' className='text-success'>
								Login
							</button>
						</form>
					</div>
				</div>
			</section>
		)
	}
}

export default Login
