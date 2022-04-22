import { Button } from 'native-base';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { Header, ParentScrollContainer } from '../../components/general';
import { useLoginMutation } from '../../generated/graphql';
import { useAuth } from '../../hooks';
import { GoogleFirebase, getUserIdToken } from './firebase';

export default function LoginScreen() {
	const { signIn } = useAuth();
	const [request, response, promptAsync] = GoogleFirebase();

	const { isLoading, mutate: generateJWTToken } = useLoginMutation({
		onSuccess: ({ login }) => {
			const authData = login.user;
			if (!authData.jwtToken) {
				Alert.alert('Error ❌', 'No JWT token found');
			} else {
				signIn({
					token: authData.jwtToken,
					email: authData.email,
					name: authData.name,
				});
			}
		},
		onError: (error: Error) => {
			Alert.alert(
				'Error ❌',
				`There was an error while logging in. ${error.message}`,
			);
		},
	});

	useEffect(() => {
		const googleSignIn = async () => {
			if (!response) return;
			if (response?.type === 'success') {
				const { id_token: idToken } = response.params;
				const userToken = await getUserIdToken(idToken);
				generateJWTToken({ token: userToken });
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
				isLoading={isLoading}
			>
				Log In
			</Button>
		</ParentScrollContainer>
	);
}
