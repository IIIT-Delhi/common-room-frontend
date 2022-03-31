import {
	useQuery,
	useMutation,
	QueryKey,
	UseQueryOptions,
	UseMutationOptions,
} from 'react-query';
import axios from '../../api';

function useGetData(key: QueryKey, gql: string, config: UseQueryOptions) {
	return useQuery(
		key,
		async () => {
			const { data } = await axios.post('/graphql', { query: gql });
			return data;
		},
		config,
	);
}

function usePostData(key: QueryKey, gql: string, config: UseMutationOptions) {
	return useMutation(
		key,
		async (variables: any) => {
			const { data } = await axios.post('/graphql', {
				query: gql,
				variables,
			});
			return data;
		},
		config,
	);
}

export { useGetData, usePostData };
