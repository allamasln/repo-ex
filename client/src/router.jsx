import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'

import ProtectedRoute from './utils/ProtectedRoute'

const BoardPageTest = () => <h1>board</h1>

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <ProtectedRoute page={LoginPage} role="anonymous" />,
			},

			{
				path: 'board',
				element: <ProtectedRoute page={BoardPageTest} role="auth" />,
			},
		],
	},
])

export default router
