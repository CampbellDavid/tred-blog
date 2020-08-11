import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Moment from 'moment'

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
})

const ArticleCard = ({ _id, title, _url, text, image, summary, createdAt }) => {
	const classes = useStyles()
	const wordCount = text.split(' ').length
	console.log(wordCount)
	return (
		<Card
			className={classes.root}
			style={{
				color: '#F5FFF5',
				backgroundColor: '#627968',
			}}
		>
			<CardActionArea>
				<Link to={`/blog/${_id}`}>
					<CardMedia className={classes.media} image={image} title={title} />
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{title}
						</Typography>
						<Typography variant='body2' component='p'>
							{summary}
						</Typography>
					</CardContent>
				</Link>
			</CardActionArea>
			<CardActions>
				<Typography variant='body2' component='p'>
					{Moment(createdAt).format('MMM Do, YYYY')}
				</Typography>
				<Typography variant='body2' component='p'>
					{Math.round(wordCount / 250)}{' '}
					{Math.round(wordCount / 250) === 1 ? 'min' : 'mins'}
				</Typography>
			</CardActions>
		</Card>
	)
}

export default ArticleCard
