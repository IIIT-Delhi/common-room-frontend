import { LOGIN } from '../api/gql';
import { usePostData } from '../hooks';

function login(token: string) {
	const mutation = usePostData(LOGIN, {
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (error) => {
			console.log(error);
		},
	});
	return mutation.mutate({ token });
}

export default login;
