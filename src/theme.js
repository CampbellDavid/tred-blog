import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
	shadows: ['none'],
	typography: {
		fontFamily: 'roboto, Arial',
		fontWeight: 200,
	},
	titleBig: '35px',
	titleSmall: '35px',
	textBig: '20px',
	textSmall: '16px',
	palette: {
		primary: {
			main: '#8AC7BD',
		},
		secondary: {
			main: '#19857b',
		},
		textPrimary: {
			main: '#3B454E',
		},
		textSecondary: {
			main: '#fff',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
		icon: {
			main: '#fff',
		},
		lightGreen: '#EDFFF4',
		midGreen: '#93C6C1',
		charcoal: '#3B454E',
		lightGrey: '#D8D8D8',
		beige: '#FFF',
	},
})

export default theme
