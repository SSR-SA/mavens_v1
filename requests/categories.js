import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.11:8000";

export const GetCategories = async (token) => {
  try {
    const response = await axios.get(`/api/category`, {
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
