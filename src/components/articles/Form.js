import React from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview'
import ImgUpload from './ImgUpload'

// import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'

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
						maxLength='150'
						required
					/>
				</div>
				{errors.type && <small className='text-danger'>{errors.title}</small>}
			</div>

			<div>
				<label className='label'>Text</label>
				<div>
					<textarea
						className={`input ${errors.text ? 'text-danger' : ''}`}
						placeholder='Text'
						name='text'
						onChange={handleChange}
						value={data.text}
						rows='10'
						cols='70'
						required
					/>
				</div>
				{errors.text && <small className='text-danger'>{errors.text}</small>}
			</div>

			<MarkdownPreview source={data.text} />

			<div>
				<label className='label'>Author</label>
				<div>
					<input
						className={`input ${errors.author ? 'text-danger' : ''}`}
						placeholder='Author'
						name='author'
						onChange={handleChange}
						value={data.author}
						required
					/>
				</div>
				{errors.author && (
					<small className='text-danger'>{errors.author}</small>
				)}
			</div>

			<div>
				<ImgUpload handleChange={handleChange} fieldName='image' required />
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
						maxLength='75'
						required
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
