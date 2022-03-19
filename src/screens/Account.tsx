import * as Google from 'expo-auth-session/providers/google';
import { Button, Center, Image, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { Header, ParentScrollContainer } from '../components/general';

export default function AccountScreen() {
	const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId:
			'34680095709-j58gd0gjvfc43dakfp3e677u6b319q7h.apps.googleusercontent.com',
	});
	const [accessToken, setAccessToken] = useState<string>();
	const [userInfo, setUserInfo] = useState<any>();
	const getUserData = async () => {
		const userInfoResponse = await fetch(
			Google.discovery.userInfoEndpoint ||
				'https://www.googleapis.com/userinfo/v2/me',
			{
				headers: { Authorization: `Bearer ${accessToken}` },
			},
		);
		const userInfoJSON = await userInfoResponse.json();
		setUserInfo(userInfoJSON);
	};
	useEffect(() => {
		if (response?.type === 'success') {
			const { authentication } = response;
			setAccessToken(authentication?.accessToken);
		}
	}, [response]);
	useEffect(() => {
		if (accessToken) {
			getUserData();
		}
	}, [accessToken]);
	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Account" />
			{userInfo && (
				<Center m={5}>
					<Image
						source={{ uri: userInfo.picture }}
						key={`${userInfo.picture}-image`}
						size={100}
						resizeMode="contain"
						borderRadius={100}
						mb={5}
					/>
					<Text>{userInfo.name}</Text>
					<Text>{userInfo.email}</Text>
				</Center>
			)}
			<Button disabled={!request} onPress={() => promptAsync()}>
				Log In
			</Button>
		</ParentScrollContainer>
	);
}
