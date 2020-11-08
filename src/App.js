import React, { useState, useEffect } from 'react'
import StateTable from './components/StateTable'
import Axios from 'axios'
import { Box, makeStyles, Typography } from '@material-ui/core'
import TotalData from './components/TotalData'

const useStyles = makeStyles((theme) => ({
	typographyStyle: {
		textAlign: 'center',
		marginTop: '20px',
		fontSize: '23px',
		fontWeight: 'bold',
		[theme.breakpoints.up('md')]: {
			fontSize: '42px'
		}
	}
}))
const App = () => {
	const [data, setData] = useState({
		allStates: [],
		loading: true
	})
	const classes = useStyles()
	useEffect(() => {
		try {
			Axios({
				method: 'GET',
				url: 'https://api.covid19india.org/data.json'
			})
				.then((response) => {
					setData({ ...data, allStates: response.data.statewise, loading: false })
				})
				.catch((error) => {
					console.log(error)
				})
		} catch (error) {
			console.log(error)
		}
	}, [data])

	return (
		<Box>
			<Typography className={classes.typographyStyle}> COVID-19 : INDIA </Typography>
			<TotalData cases={data} />
			<StateTable cases={data} />
		</Box>
	)
}

export default App
