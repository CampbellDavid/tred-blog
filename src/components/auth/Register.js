import React from 'react'
import axios from 'axios'

class Register extends React.Component {
	state = {
		data: {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
		},
		error: '',
	}

	handleChange = ({ target: { name, value } }) => {
		const data = { ...this.state.data, [name]: value }
		const error = { ...this.state.error, [name]: '' }
		this.setState({ data, error })
	}

	handleSubmit = async (e) => {
		e.preventDefault()

		try {
			await axios.post('/api/register', this.state.data)
			this.props.history.push('/login')
		} catch (err) {
			this.setState({ error: err.response.data.errors })
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
							<h2 className='title'>Register</h2>
							<div className='field'>
								<label className='label'>Username</label>
								<div className='control'>
									<input
										className={`input ${this.state.error.username} ? : 'text-danger' : '' `}
										name='username'
										placeholder='Username'
										onChange={this.handleChange}
									/>
								</div>
								{this.state.error.username && (
									<small className='text-danger'>
										{this.state.error.username}
									</small>
								)}
							</div>
							<div className='field'>
								<label className='label'>Email</label>
								<div className='control'>
									<input
										className={`input ${this.state.error.email} ? : 'text-danger' : '' `}
										name='email'
										placeholder='Email'
										onChange={this.handleChange}
									/>
								</div>
								{this.state.error.email && (
									<small className='text-danger'>
										{this.state.error.email}
									</small>
								)}
							</div>
							<div className='field'>
								<label className='label'>Password</label>
								<div className='control'>
									<input
										className={`input ${this.state.error.password} ? : 'text-danger' : '' `}
										name='password'
										type='password'
										placeholder='Password'
										onChange={this.handleChange}
									/>
								</div>
								{this.state.error.password && (
									<small className='text-danger'>
										{this.state.error.password}
									</small>
								)}
							</div>
							<div className='field'>
								<label className='label'>Password Confirmation</label>
								<div className='control'>
									<input
										className={`input ${this.state.error.passwordConfirmation} ? : 'text-danger' : '' `}
										name='passwordConfirmation'
										type='password'
										placeholder='Password Confirmation'
										onChange={this.handleChange}
									/>
								</div>
								{this.state.error.passwordConfirmation && (
									<small className='text-danger'>
										{this.state.error.passwordConfirmation}
									</small>
								)}
							</div>
							<div className='field'>
								<div className='control'>
									<button type='submit' className='text-success'>
										Register
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		)
	}
}

export default Register
