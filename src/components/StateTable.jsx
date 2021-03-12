import {
	Grid,
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableContainer
} from '@material-ui/core'
import React from 'react'
import DeltaCases from './DeltaCases'

const useStyles = makeStyles((theme) => ({
	table: {
		textAlign: 'center',
		'& th': {
			fontWeight: 'bold'
		}
	}
}))

const StateTable = ({ cases }) => {
	const totalCases = cases.allStates.splice(1)
	console.log(totalCases)
	const classes = useStyles()
	const tableHeading = ['State', 'Confirmed', 'Active', 'Recovered', 'Deaths']
	const stateTable = (
	<TableContainer>
		<Table className={classes.table}>
			<TableHead>
				<TableRow>
					{tableHeading.map((heading) => (
						<TableCell> {heading} </TableCell>
					))}
				</TableRow>
			</TableHead>

			<TableBody>
				{totalCases.map((state, index) => (
					<TableRow key={index}>
						<TableCell>{state.state}</TableCell>

						<TableCell>
							{state.deltaconfirmed > 0 ? (
								<DeltaCases delta={state.deltaconfirmed} type='Confirmed' />
							) : null}
							{state.confirmed}
						</TableCell>

						<TableCell> {state.active}</TableCell>

						<TableCell>
							{state.deltarecovered > 0 ? (
								<DeltaCases delta={state.deltarecovered} type='Recovered' />
							) : null}
							{state.recovered}
						</TableCell>

						<TableCell>
							{state.deltadeaths > 0 ? (
								<DeltaCases delta={state.deltadeaths} type='Deaths' />
							) : null}
							{state.deaths}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
		</TableContainer>
	)
	return (
		<Grid container>
			<Grid item xs={1} />
			<Grid item xs={10}>
				{stateTable}
			</Grid>

			<Grid item xs={1} />
		</Grid>
	)
}

export default StateTable
