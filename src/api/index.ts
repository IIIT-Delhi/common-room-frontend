import axios from 'axios';
import Constants from 'expo-constants';
import { getToken } from '../utils';

const baseURL = Constants?.manifest?.extra?.API_URL;
const instance = axios.create({ baseURL });

instance.interceptors.request.use(
	async (config) => {
		const token = await getToken();
		if (token) {
			// eslint-disable-next-line no-param-reassign
			config.headers = {
				...config.headers,
				Authorization: `${token}`,
			};
		}
		return config;
	},
	(error) => Promise.reject(error),
);

export default instance;
