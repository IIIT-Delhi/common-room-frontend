import { Button, Center, Image, Text } from 'native-base';
import { useQuery } from 'urql';
import Constants from 'expo-constants';
import { Header, Loading, ParentScrollContainer } from '../components/general';
import { UserDetailsDocument } from '../generated/graphql';
import { useAuth } from '../hooks';

export default function AccountScreen() {
	const { signOut } = useAuth();
	const [{ data, fetching }] = useQuery({
		query: UserDetailsDocument,
	});
	const userInfo = data?.me;

	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Account" />
			{fetching ? (
				<Loading />
			) : (
				userInfo && (
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
				)
			)}
			<Button onPress={signOut}>Sign Out</Button>

			<Text mt="2">v {Constants.manifest?.version}</Text>
		</ParentScrollContainer>
	);
}
