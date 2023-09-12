import { useAuth } from '../hooks/auth'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ page, role }) {
	const [user] = useAuth()
	const Page = page
	if (user[role]) return <Page />
	if (role !== 'anonymous') return <Navigate to="/" replace />

	if (role === 'anonymous' && !user.auth) return <Page />

	return <Navigate to="/board" replace />
}
export default ProtectedRoute
