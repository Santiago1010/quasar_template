import axios from 'axios';

const instance = axios.create({
	baseURL: import.meta.env.VITE_JWT_ISSUER,
	headers: {
		common: {
			'Content-Type': 'application/json',
		},
	},
});

instance.interceptors.request.use(
	(config) => {
		const { url } = config;

		if (url.startsWith(import.meta.env.VITE_JWT_ISSUER)) {
			config.url = url.replace(import.meta.env.VITE_JWT_ISSUER, '');
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default instance;
