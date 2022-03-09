import axios from 'axios';

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3834'
    : 'https://api.bvof.com.br';

const api = axios.create({ baseURL: url });

export default api;
