import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { Box, makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: '13px',
		fontWeight: 'bold'
	},
	info: {
		color: theme.palette.info.main
	},
	red: {
		color: theme.palette.error.main
	},
	success: {
		color: theme.palette.success.main
	}
}))

const DeltaCases = ({ delta, type }) => {
	const classes = useStyles()
	const checkDelta =
		type === 'Confirmed'
			? classes.info
			: type === 'Deaths'
			? classes.red
			: type === 'Recovered'
			? classes.success
			: null

	return (
		<Box
			display='flex'
			justifyContent='center'
			className={`${classes.root}  ${checkDelta}`}
		>
			(
			<ArrowUpwardIcon style={{ width: '18px', height: '18px' }} />
			{delta})
		</Box>
	)
}

export default DeltaCases
