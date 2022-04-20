import {
	createClient,
	makeOperation,
	Provider,
	fetchExchange,
	dedupExchange,
} from 'urql';
import { devtoolsExchange } from '@urql/devtools';
import { authExchange } from '@urql/exchange-auth';
import { cacheExchange } from '@urql/exchange-graphcache';
import { Alert } from 'react-native';
import { BASE_URL, getToken } from '../utils';
import { useAuth } from '../hooks';

export default function UrqlProvider({ children }: any) {
	const { signOut } = useAuth();
	const client = createClient({
		url: `${BASE_URL}/graphql`,
		exchanges: [
			devtoolsExchange,
			dedupExchange,
			cacheExchange({
				keys: {
					User: ({ email }) => (email as string) ?? null,
					RSVPEvent: ({ eventId }) => (eventId as string) ?? null,
				},
			}),
			authExchange<{ token: string }>({
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
				getAuth: async ({ authState }) => {
					if (!authState) {
						const token = await getToken();
						if (token) return { token };
						return null;
					}
					// await clearToken();
					Alert.alert('Error', 'Please authenticate again');
					await signOut();
					return null;
				},
				// eslint-disable-next-line arrow-body-style
				didAuthError: ({ error }) => {
					return error.graphQLErrors.some(
						(e) => !!e.extensions?.code,
					);
				},
			}),
			fetchExchange,
		],
	});
	return <Provider value={client}>{children}</Provider>;
}
