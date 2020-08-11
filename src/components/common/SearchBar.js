import React from 'react'

const SearchBar = ({ onChange }) => (
	<div>
		<div>
			<input
				type='search'
				results='0'
				className='input search-bar'
				placeholder='Search by blog name...'
				onChange={(e) => {
					const userInput = e.target.value
					onChange(userInput)
				}}
			/>
		</div>
	</div>
)

export default SearchBar
