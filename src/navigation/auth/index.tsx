import { Box, Button, Center, HStack, Image, VStack } from 'native-base';
import { useEffect } from 'react';
import { Alert, Dimensions } from 'react-native';
import { commonRoomLogo, google } from '../../assets';
import { ParentScrollContainer } from '../../components/general';
import { Body1, Heading1, Heading5 } from '../../components/typography';
import { useLoginMutation } from '../../generated/graphql';
import { useAuth } from '../../hooks';
import { GoogleFirebase, getUserIdToken } from './firebase';

export default function LoginScreen() {
	const { signIn } = useAuth();
	const [request, response, promptAsync] = GoogleFirebase();
	const windowHeight = Dimensions.get('window').height;
	const { isLoading, mutate: generateJWTToken } = useLoginMutation({
		onSuccess: ({ login }) => {
			const { token, user } = login;
			if (!token) {
				Alert.alert('Error ❌', 'No JWT token found');
			} else {
				signIn({
					token,
					id: user.id,
					email: user.email,
					name: user.name,
					isOnBoarded: user.isOnBoarded,
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
		<Box h="100%">
			<Box w="100%" px="4" position="absolute" bottom="10">
				<Button
					w="100%"
					disabled={!request}
					onPress={() => promptAsync()}
					isLoading={isLoading}
					bg="white"
					zIndex={2}
					h="12"
					_pressed={{
						bg: '#dcdcdc',
					}}
				>
					<HStack space="4">
						<Image source={google} h="5" w="5" alt="common-room" />
						<Body1 color="#757575" fontWeight="medium">
							{' '}
							Sign In with Google
						</Body1>
					</HStack>
				</Button>
			</Box>

			<ParentScrollContainer
				noHorizontalPadding
				stickyHeaderIndices={[0]}
			>
				<Center p="4" h={windowHeight - 100}>
					<Image
						source={commonRoomLogo}
						h="32"
						w="32"
						alt="common-room"
					/>
					<VStack space="4" textAlign="center">
						<Heading1 textAlign="center">Hi there!</Heading1>
						<Heading5 textAlign="center" color="subtle.500">
							Please log in with your IIITD Google account to
							continue
						</Heading5>
					</VStack>
				</Center>
			</ParentScrollContainer>
		</Box>
	);
}
