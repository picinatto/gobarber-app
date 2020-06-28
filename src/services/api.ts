import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1000.2.2',
});

export default api;
