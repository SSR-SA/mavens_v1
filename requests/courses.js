import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const GetCourses = async (token, payload) => {
	try {
		const response = await axios.get(`/api/course`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};
