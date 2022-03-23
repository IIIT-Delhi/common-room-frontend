import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'native-base';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { Header, ParentScrollContainer } from '../../components/general';
import { useAuth } from '../../hooks';

export default function AccountScreen() {
	const { signIn } = useAuth();
	const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId:
			'34680095709-j58gd0gjvfc43dakfp3e677u6b319q7h.apps.googleusercontent.com',
		androidClientId:
			'34680095709-7n87bn7q6sr5ce1jjc02eko1jfu30a49.apps.googleusercontent.com',
	});

	useEffect(() => {
		if (response?.type === 'success') {
			const { authentication } = response;
			if (authentication?.accessToken)
				signIn(authentication?.accessToken);
			else Alert.alert('Error', 'No access token');
		}
	}, [response]);
	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Sign In" />
			<Button disabled={!request} onPress={() => promptAsync()}>
				Log In
			</Button>
		</ParentScrollContainer>
	);
}
