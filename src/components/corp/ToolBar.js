import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import SideBar from './SideBar'
import Logo from './Logo'

const useStyles = makeStyles((theme) => ({
	topBar: {
		backgroundColor: '#0C501F',
		color: '#F5FFF5',
		position: 'fixed',
	},
	leaf: {
		width: '25px',
		[theme.breakpoints.up('sm')]: {
			width: '30px',
		},
	},
	titleContainer: {
		flexGrow: 1,
	},
	titleLink: {
		display: 'flex',
		alignItems: 'center',
		color: '#F5FFF5',
		cursor: 'pointer',
		'&:hover': {
			textDecoration: 'none',
		},
	},
	link: {
		color: '#F5FFF5',
		fontSize: '20px',
		'&:hover': {
			textDecoration: 'none',
		},
	},
	buttonText: {
		fontSize: '17px',
	},
}))

export default function ToolBar() {
	const classes = useStyles()
	const [state, setState] = React.useState({
		isOpen: false,
	})

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setState({ ...state, isOpen: open })
	}

	return (
		<AppBar className={classes.topBar} position='static'>
			<Toolbar>
				<Box className={classes.titleContainer}>
					<Link
						activeClass='active'
						to='topScroll'
						spy
						smooth
						duration={500}
						offset={-100}
						className={classes.titleLink}
					>
						<Logo fontSize='50px' />
					</Link>
				</Box>
				<Hidden smDown>
					<Link
						className={classes.link}
						activeClass='active'
						to='/about'
						spy
						offset={-120}
						smooth
						duration={500}
					>
						<Button color='inherit' className={classes.buttonText}>
							ABOUT
						</Button>
					</Link>
					<Link
						className={classes.link}
						activeClass='active'
						to='/faq'
						spy
						offset={-120}
						smooth
						duration={500}
					>
						<Button color='inherit' className={classes.buttonText}>
							FAQ
						</Button>
					</Link>
					<Link
						className={classes.link}
						activeClass='active'
						to='/blog'
						spy
						smooth
						offset={-140}
						duration={500}
					>
						<Button color='inherit' className={classes.buttonText}>
							BLOG
						</Button>
					</Link>
				</Hidden>
				<Hidden mdUp>
					<IconButton
						onClick={toggleDrawer(true)}
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
			<SideBar toggleDrawer={toggleDrawer} isOpen={state.isOpen} />
		</AppBar>
	)
}
