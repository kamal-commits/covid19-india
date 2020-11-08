import React from 'react'
import { Box } from '@material-ui/core'
import Card from './Card'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '0px 20px 0px 30px'
	},
	cardStyle: {
		paddingTop: '20px',
		display: 'flex'
	}
}))

const TotalData = ({ cases }) => {
	const classes = useStyles()
	return (
		<Box className={classes.root}>
			{!cases.loading ? (
				<Box className={classes.cardStyle}>
					<Card
						active={cases.allStates[0].active}
						confirmed={cases.allStates[0].confirmed}
						deaths={cases.allStates[0].deaths}
						recovered={cases.allStates[0].recovered}
						deltaConfirmed={cases.allStates[0].deltaconfirmed}
						deltaDeaths={cases.allStates[0].deltadeaths}
						deltaRecovered={cases.allStates[0].deltarecovered}
					/>
					{console.log(cases.allStates[0].deltaconfirmed)}
				</Box>
			) : (
				<h1> Loading.........</h1>
			)}
		</Box>
	)
}

export default TotalData
