import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

instance.interceptors.request.use(
  (config) => {
    const { url } = config;

    if (url.startsWith(import.meta.env.VITE_API_BASE_URL)) {
      config.url = url.replace(import.meta.env.VITE_API_BASE_URL, '');
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
