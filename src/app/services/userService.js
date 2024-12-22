import axios from 'axios';

const BASE_URL = 'http://localhost:8080/users';

export const getAllUsers = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const createUser = async (user) => {
    const response = await axios.post(BASE_URL, user);
    return response.data;
};

export const getUserById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};
