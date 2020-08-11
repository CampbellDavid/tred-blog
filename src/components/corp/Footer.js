import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { Facebook, Instagram, LinkedIn, MailOutline } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	company: {
		color: '#F5FFF5',
		fontWeight: 200,
		fontSize: '12px',
		textAlign: 'center',
	},
	footer: {
		backgroundColor: '#0C501F',
		paddingTop: '40px',
		paddingBottom: '40px',
	},
	footerIcon: {
		color: '#F5FFF5',
		[theme.breakpoints.up('sm')]: {
			width: '80px',
		},
	},
	link: {
		color: 'white',
		margin: '0 20px',
	},
	icons: {
		marginBottom: '40px',
		textAlign: 'center',
	},
}))

export default function Footer() {
	const classes = useStyles()

	return (
		<Box className={classes.footer}>
			<Container maxWidth='sm'>
				<Box className={classes.icons}>
					<Link
						className={classes.link}
						href='https://www.facebook.com/tredearth/'
						target='_blank'
					>
						<Facebook className={classes.footerIcon} />
					</Link>

					<Link
						className={classes.link}
						href='https://www.instagram.com/tred_earth/'
						target='_blank'
					>
						<Instagram className={classes.footerIcon} />
					</Link>

					<Link
						className={classes.link}
						href='https://www.linkedin.com/company/tred-earth'
						target='_blank'
					>
						<LinkedIn className={classes.footerIcon} />
					</Link>

					<Link
						className={classes.link}
						href='mailto:hello@tred.earth?subject=Hello%20Tred&body=Please%20keep%20me%20up%20to%20date.%20🌲'
					>
						<MailOutline className={classes.footerIcon} />
					</Link>
				</Box>
				<Box className={classes.company} item xs={4}>
					Tred Earth Limited (Company No. 12348719)
				</Box>
			</Container>
		</Box>
	)
}
