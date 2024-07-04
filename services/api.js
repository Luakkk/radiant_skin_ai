import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/apppp/api';

export const uploadImage = (image) => {
    const formData = new FormData();
    formData.append('image', image);

    return axios.post(`${API_BASE_URL}/upload/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const getImageDetails = (id) => {
    return axios.get(`${API_BASE_URL}/image/${id}/`);
};
