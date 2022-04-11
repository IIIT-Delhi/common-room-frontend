import {
	createClient,
	makeOperation,
	Provider,
	cacheExchange,
	fetchExchange,
	dedupExchange,
} from 'urql';
import { authExchange } from '@urql/exchange-auth';
import { BASE_URL, clearToken, getToken } from '../utils';

const client = createClient({
	url: `${BASE_URL}/graphql`,
	exchanges: [
		dedupExchange,
		cacheExchange,
		authExchange<{ token: string }>({
			getAuth: async ({ authState }) => {
				if (!authState) {
					const token = await getToken();
					if (token) return { token };
					return null;
				}
				await clearToken();
				return null;
			},
			addAuthToOperation: ({ authState, operation }) => {
				if (!authState) return operation;
				if (!authState.token) return operation;
				const fetchOptions =
					typeof operation.context.fetchOptions === 'function'
						? operation.context.fetchOptions()
						: operation.context.fetchOptions || {};

				return makeOperation(operation.kind, operation, {
					...operation.context,
					fetchOptions: {
						...fetchOptions,
						headers: {
							...fetchOptions.headers,
							Authorization: authState.token,
						},
					},
				});
			},
		}),
		fetchExchange,
	],
});

export default function UrqlProvider({ children }: any) {
	return <Provider value={client}>{children}</Provider>;
}
