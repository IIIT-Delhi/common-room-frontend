import { Alert } from 'react-native';
import {
	useQuery,
	useMutation,
	QueryKey,
	UseQueryOptions,
	UseMutationOptions,
} from 'react-query';
import axios from '../../api';

function useGetData(
	key: QueryKey,
	gql: string,
	config: UseQueryOptions = {
		onError: (error: any) => {
			Alert.alert(
				'❌ Error',
				`There was an error fetching data: ${error.message}`,
			);
			console.log(error);
		},
	},
) {
	return useQuery<any, any, any>(
		key,
		async () => {
			const { data } = await axios.post('/graphql', { query: gql });
			return data;
		},
		config,
	);
}

function usePostData(gql: string, config: UseMutationOptions = {}) {
	const mutationFn = (variables: any) =>
		axios
			.post('/graphql', {
				query: gql,
				variables,
			})
			.then((res) => res.data);
	return useMutation<any, any, any>(mutationFn, config);
}

export { useGetData, usePostData };
