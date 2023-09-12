import axios from 'axios';

const http = (token) => {
  const headers = {
    'Api-Key' : 'X*kLJ=GDcA1q',
    'Sisco-Token' : token
  };

  return axios.create({
    headers,
    baseURL : import.meta.env.VITE_BACKEND_URL,
  });
};

export default http;