import * as Google from 'expo-auth-session/providers/google';
import { Button, Center, Image, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { Header, ParentScrollContainer } from '../components/general';
import { useAuth } from '../hooks';

export default function AccountScreen() {
	const {
		authData: { token },
		signOut,
	} = useAuth();
	const [userInfo, setUserInfo] = useState<any>();
	const getUserData = async () => {
		const userInfoResponse = await fetch(
			Google.discovery.userInfoEndpoint ||
				'https://www.googleapis.com/userinfo/v2/me',
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const userInfoJSON = await userInfoResponse.json();
		setUserInfo(userInfoJSON);
	};

	useEffect(() => {
		if (token) {
			getUserData();
		}
	}, [token]);
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
						alt="User profile image"
					/>
					<Text>{userInfo.name}</Text>
					<Text>{userInfo.email}</Text>
				</Center>
			)}
			<Button onPress={signOut}>Sign Out</Button>
		</ParentScrollContainer>
	);
}
