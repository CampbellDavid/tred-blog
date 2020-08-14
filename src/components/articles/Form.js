import React from 'react'

const Form = ({ data, handleChange, handleSubmit, errors }) => (
	<div>
		<form onSubmit={handleSubmit}>
			<div>
				<label className='label'>Title</label>
				<div>
					<input
						className={`input ${errors.type ? 'text-danger' : ''}`}
						placeholder='Title'
						name='title'
						onChange={handleChange}
						value={data.title}
					/>
				</div>
				{errors.type && <small className='text-danger'>{errors.title}</small>}
			</div>

			<div>
				<label className='label'>Text</label>
				<div>
					<input
						className={`input ${errors.text ? 'text-danger' : ''}`}
						placeholder='Text'
						name='text'
						onChange={handleChange}
						value={data.text}
					/>
				</div>
				{errors.text && <small className='text-danger'>{errors.text}</small>}
			</div>

			<div>
				<label className='label'>Author</label>
				<div>
					<input
						className={`input ${errors.author ? 'text-danger' : ''}`}
						placeholder='Author'
						name='author'
						onChange={handleChange}
						value={data.author}
					/>
				</div>
				{errors.author && (
					<small className='text-danger'>{errors.author}</small>
				)}
			</div>

			<div>
				<label className='label'>Image</label>
				<div>
					<input
						className={`input ${errors.image ? 'text-danger' : ''}`}
						placeholder='Image'
						name='image'
						onChange={handleChange}
						value={data.image}
					/>
				</div>
				{errors.image && <small className='text-danger'>{errors.image}</small>}
			</div>

			<div>
				<label className='label'>Summary</label>
				<div>
					<input
						className={`input ${errors.summary ? 'text-danger' : ''}`}
						placeholder='Summary'
						name='summary'
						onChange={handleChange}
						value={data.summary}
					/>
				</div>
				{errors.summary && (
					<small className='text-danger'>{errors.summary}</small>
				)}
			</div>

			<div>
				<div>
					<button type='submit' className='text-success'>
						Submit
					</button>
				</div>
			</div>
		</form>
	</div>
)

export default Form
