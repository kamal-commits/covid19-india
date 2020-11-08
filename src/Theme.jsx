import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

let Theme = createMuiTheme({
	palette: {
		primary: {
			main: '#004a92',
			light: '#182b3b'
		},
		secondary: {
			main: '#232323',
			dark: '#282828'
		},
		info: {
			main: '#004a92',
			light: '#fffced'
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 320,
			md: 749,
			lg: 1025,
			xl: 1200
		}
	},
	typography: {
		fontFamily: 'Josefin Sans'
	}
})
Theme = responsiveFontSizes(Theme)

export default Theme
