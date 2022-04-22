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

export function useAxios<TData, TVariables>(
	query: string,
	variables?: TVariables,
): () => Promise<TData> {
	return async () => {
		const res = await instance('graphql', {
			method: 'POST',
			data: JSON.stringify({ query, variables }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const json = res.data;

		if (json.errors) {
			const { message } = json.errors[0];

			throw new Error(message);
		}

		return json.data as TData;
	};
}
