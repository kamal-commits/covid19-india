import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DeltaCases from './DeltaCases'
const useStyles = makeStyles((theme) => ({
	cardStyle: {
		width: '100%',
		height: '100%',
		marginTop: '10px',
		[theme.breakpoints.up('md')]: {
			width: '75%',
			height: '150px'
		}
	},
	cardHeading: {
		backgroundColor: '#74B9FF',
		color: '#ffffff',
		textAlign: 'center',
		padding: '5px',
		fontWeight: 'bold',
		fontSize: '13px',
		[theme.breakpoints.up('md')]: {
			fontSize: '20px'
		}
	},
	cardContent: {
		border: '1px solid #8B78E6',
		// color: '#ffffff',
		textAlign: 'center',
		padding: '5px',
		fontWeight: 'bold',
		fontSize: '13px',
		[theme.breakpoints.up('md')]: {
			fontSize: '20px'
		}
	}
}))

const TotalDataCard = (props) => {
	const { title, data, delta, type } = props
	console.log(delta)
	const classes = useStyles()
	return (
		<div className={classes.cardStyle}>
			<Box className={classes.cardHeading}> {title} </Box>
			<Box className={classes.cardContent}>
				{delta > 0 ? <DeltaCases delta={delta} type={type} /> : null}
				{data}
			</Box>
		</div>
	)
}

export default TotalDataCard
