import ax from 'axios';

const apiUrl = () => {
  const BASE_URL = 'http://localhost:3000/api/v1';
  return {
    BASE_URL,
    EMAILS: "/emails"
  };
};

export const api = apiUrl();
export const axios = ax.create({
  baseURL: api.BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  responseType: 'json',
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
