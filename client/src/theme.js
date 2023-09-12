import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#073b4c',
		},
		secondary: {
			main: '#118ab2',
		},
		error: {
			main: '#ef476f',
		},
		warning: {
			main: '#ffd166',
		},
		success: {
			main: '#06d6a0',
		},
	},
})

export default theme
