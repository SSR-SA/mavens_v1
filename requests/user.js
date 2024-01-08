import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const userLogin = async (payload) => {
	try {
		const response = await axios.post(`/api/user/login`, payload);

		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};
export const userSignUp = async (payload) => {
	try {
		const response = await axios.post('/api/user/register', payload);

		if (response.status == 201) {
			return response.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};
export const forgotpassword = async (payload) => {
	try {
		const response = await axios.post(`/api/user/forgot-password`, payload);

		if (response.status == 200) {
			return response.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};
export const resetpassword = async (payload) => {
	try {
		const response = await axios.post(`/api/user/reset-password`, payload);

		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};
