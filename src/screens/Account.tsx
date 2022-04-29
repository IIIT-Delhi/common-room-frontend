import { Button, Center, HStack, Image, Text, VStack } from 'native-base';
import { useQuery } from 'urql';
import Constants from 'expo-constants';
import {
	Header,
	Loading,
	ParentScrollContainer,
	SquircleCard,
} from '../components/general';
import { UserDetailsDocument } from '../generated/graphql';
import { useAuth } from '../hooks';
import { Body1, Body2, SubHeading1 } from '../components/typography';

export default function AccountScreen() {
	const { signOut } = useAuth();
	const [{ data, fetching }] = useQuery({
		query: UserDetailsDocument,
	});
	const userInfo = data?.me;

	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Account" />
			<VStack justifyContent="space-between" minH="500">
				{fetching ? (
					<Loading />
				) : (
					userInfo && (
						<Center m={5}>
							<Image
								source={{ uri: userInfo.picture }}
								key={`${userInfo.picture}-image`}
								size={128}
								resizeMode="contain"
								borderRadius={100}
								mb={5}
								alt="User profile image"
							/>
							<SquircleCard>
								<VStack space="2" p="2">
									<HStack
										justifyContent="space-between"
										w="100%"
									>
										<SubHeading1 color="white">
											Name
										</SubHeading1>
										<SubHeading1 color="primary.500">
											{userInfo.name}
										</SubHeading1>
									</HStack>
									<HStack
										justifyContent="space-between"
										w="100%"
									>
										<SubHeading1 color="white">
											Email
										</SubHeading1>
										<SubHeading1 color="primary.500">
											{userInfo.email}
										</SubHeading1>
									</HStack>
								</VStack>
							</SquircleCard>
						</Center>
					)
				)}
				<VStack space="4">
					<Body2
						color="subtle.500"
						mt="2"
						w="90%"
						mx="auto"
						textAlign="center"
					>
						Common Room v{Constants.manifest?.version}
					</Body2>
					<Button
						onPress={signOut}
						colorScheme="alert"
						bg="#560C27"
						color="alert.500"
						m="auto"
						w="90%"
						height="12"
					>
						<Body1 color="alert.500">Logout</Body1>
					</Button>
				</VStack>
			</VStack>
		</ParentScrollContainer>
	);
}
