import { Stack, Button } from '@mui/material'
import { Form } from '../../components'
import { toast } from 'react-toastify'
import { getFormFields, validationSchema } from './form-fields'

import { useAuth } from '../../hooks/auth'

import authService from '../../services/auth-service'

import { useNavigate } from 'react-router-dom'

function LoginPage() {
	const navigate = useNavigate()

	const [, dispatch] = useAuth()

	const onSubmit = (data) => {
		authService.login(data).then((user) => {
			dispatch({
				type: 'login',
				payload: {
					username: user.username,
				},
			})

			navigate(-1, { replace: true })
		})
	}

	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Form
					heading="Acceso usuarios"
					buttonLabel="Entrar"
					formFields={getFormFields()}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				/>
			</Stack>
		</Stack>
	)
}
export default LoginPage
