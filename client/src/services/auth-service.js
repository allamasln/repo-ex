import jwt_decode from 'jwt-decode'

import apiClient from './api-client'
import { setToken } from './api-client'

const getEndpoint = (slug) => '/users' + slug

const tokenKey = 'token'

setToken(getToken())

const login = async (user) => {
	const endpoint = getEndpoint('/signin')
	const response = await apiClient.post(endpoint, user)

	const token = response.headers['x-auth-token']

	localStorage.setItem(tokenKey, token)

	setToken(token)

	return jwt_decode(token)
}

const getCurrentUser = () => {
	const token = localStorage.getItem(tokenKey)

	if (!token) return null

	return jwt_decode(token)
}

function getToken() {
	const token = localStorage.getItem(tokenKey)

	return token
}

const authService = {
	login,
	getCurrentUser,
}

export default authService
