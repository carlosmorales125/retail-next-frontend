import axios from "axios";

export const getUsers = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/users');
        if (response?.data?.users) {
            return response.data.users;
        } else {
            throw new Error('call to http://localhost:8000/api/v1/users has failed');
        }
    } catch (e) {
        console.log(e);
    }
};
