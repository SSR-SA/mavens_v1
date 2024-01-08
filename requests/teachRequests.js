import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const GetLatestRequest = async (token) => {
	try {
		console.log(token);
		const response = await axios.get(`/api/teach-request/latest`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log('response data:', response.data);
		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};

export const GetTeachRequests = async (token) => {
	try {
		console.log(token);
		const response = await axios.get(`/api/teach-request`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log('response data:', response.data);
		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};

export const PostTeachRequest = async (token, payload) => {
	try {
		const response = await axios.post('/api/teach-request', payload, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});

		if (response.status === 200 || response.status === 201) {
			return response.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};
