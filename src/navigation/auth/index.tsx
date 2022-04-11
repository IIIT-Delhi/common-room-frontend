import { Button } from 'native-base';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useMutation } from 'urql';
import { Header, ParentScrollContainer } from '../../components/general';
import { LoginDocument } from '../../generated/graphql';
import { useAuth } from '../../hooks';
import { GoogleFirebase, getUserIdToken } from './firebase';

export default function LoginScreen() {
	const { signIn } = useAuth();
	const [request, response, promptAsync] = GoogleFirebase();
	const [{ data, fetching, error }, getJWTToken] = useMutation(LoginDocument);

	useEffect(() => {
		if (data) {
			signIn(data.login.user.jwtToken ?? '');
		}
		if (error) {
			Alert.alert(
				'Error ❌',
				`There was an error while logging in. ${error.message}`,
			);
		}
	}, [data, error]);

	useEffect(() => {
		const googleSignIn = async () => {
			if (response?.type === 'success') {
				const { id_token: idToken } = response.params;
				const userToken = await getUserIdToken(idToken);
				getJWTToken({ token: userToken });
			} else Alert.alert('Error ❌', 'No access token');
		};
		googleSignIn();
	}, [response]);

	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Sign In" />
			<Button
				disabled={!request}
				onPress={() => promptAsync()}
				isLoading={fetching}
			>
				Log In
			</Button>
		</ParentScrollContainer>
	);
}
