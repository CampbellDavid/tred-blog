import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { Link } from 'react-scroll'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: '50%',
		[theme.breakpoints.up('sm')]: {
			width: '33%',
		},
	},
}))

export default function SideBar(props) {
	const classes = useStyles()
	const { isOpen, toggleDrawer } = props

	return (
		<Drawer
			className={classes.drawer}
			anchor='right'
			open={isOpen}
			onClose={toggleDrawer(false)}
		>
			<List className={classes.list}>
				<Link
					className={classes.link}
					onClick={toggleDrawer(false)}
					activeClass='active'
					to='productScroll'
					spy
					smooth
					offset={-100}
					duration={500}
				>
					<ListItem button>
						<ListItemText primary='Our product' />
					</ListItem>
				</Link>
				<Divider />
				<Link
					className={classes.link}
					onClick={toggleDrawer(false)}
					activeClass='active'
					to='whyScroll'
					spy
					offset={-80}
					smooth
					duration={500}
				>
					<ListItem button>
						<ListItemText primary='Why' />
					</ListItem>
				</Link>
				<Divider />
				<Link
					className={classes.link}
					onClick={toggleDrawer(false)}
					activeClass='active'
					to='peopleScroll'
					spy
					offset={-80}
					smooth
					duration={500}
				>
					<ListItem button>
						<ListItemText primary='Who' />
					</ListItem>
				</Link>
			</List>
		</Drawer>
	)
}
