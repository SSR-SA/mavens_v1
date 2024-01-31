import axios from "axios";

axios.defaults.baseURL = "http://192.168.147.105:8000";

export const sendReview = async (token, id, payload) => {
  try {
    console.log("");
    console.log(id);
    console.log(payload);
    const response = await axios.post(`/api/course/rate/${id}`, payload, {
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
