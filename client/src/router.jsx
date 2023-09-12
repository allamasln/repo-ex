import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import ErrorPage from './pages/ErrorPage'

import ProtectedRoute from './utils/ProtectedRoute'

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <h1>Hello trollolo</h1>,
			},
		],
	},
])

export default router
