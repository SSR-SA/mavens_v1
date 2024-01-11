import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const GetChat = async (token) => {
	try {
		const response = await axios.get(`/api/chat`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.status === 201 || response.status === 200) {
			return response.data.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};
