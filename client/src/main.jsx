import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'

import router from './router'
import theme from './theme'

import { AuthProvider } from './hooks/auth'

import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<MUIThemeProvider theme={theme}>
			<CssBaseline />

			<RouterProvider router={router} />
		</MUIThemeProvider>
	</AuthProvider>
)
