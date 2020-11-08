import React from 'react'
import { Grid } from '@material-ui/core'
import TotalDataCard from './TotalDataCard'

const Card = (props) => {
	const {
		confirmed,
		deaths,
		recovered,
		deltaConfirmed,
		deltaDeaths,
		deltaRecovered
	} = props
	console.log(deltaConfirmed)
	return (
		<Grid container>
			<Grid item xs={12} md={4} lg={4}>
				<TotalDataCard
					title='Total Confirmed'
					delta={deltaConfirmed}
					data={confirmed}
					type='Confirmed'
				/>
			</Grid>

			<Grid item xs={12} md={4} lg={4}>
				<TotalDataCard
					title='Total Recovered'
					data={recovered}
					delta={deltaRecovered}
					type='Recovered'
				/>
			</Grid>

			<Grid item xs={12} md={4} lg={4}>
				<TotalDataCard
					title='Total Deaths'
					data={deaths}
					delta={deltaDeaths}
					type='Deaths'
				/>
			</Grid>
		</Grid>
	)
}

export default Card
