import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	logo: {
		color: '#F5FFF5',
		fontWeight: 800,
		letterSpacing: '-1px',
		marginLeft: '10px',
		marginRight: '20px',
		fontFamily: 'Abril Fatface',
		display: 'inline',
	},
}))

export default function Logo(props) {
	const classes = useStyles()
	const { fontSize } = props

	return (
		<Typography className={classes.logo} style={{ fontSize }}>
			tred
		</Typography>
	)
}
