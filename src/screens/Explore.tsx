import { Box, HStack, IconButton, Input, VStack } from 'native-base';
import {
	Header,
	ParentScrollContainer,
	RemixIcon,
	SquircleCard,
	SquircleImage,
} from '../components/general';
import { Heading4, SubHeading2 } from '../components/typography';
import clubImage from '../assets/dummyClubEvents';
import { TouchableOpacity } from 'react-native';

function ClubCard({ image }: any) {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			// style={{
			// 	opacity: isOldCard ? 0.2 : 1,
			// }}
			onPress={() => alert('Hello')}
		>
			<SquircleCard>
				<HStack space="4">
					<SquircleImage
						height={115}
						width={115}
						src={image}
						flex="1"
					/>
					<VStack space="3" flex="9">
						<VStack space="1">
							<Heading4 numberOfLines={2} ellipsizeMode="tail">
								Audiobytes
							</Heading4>
							<SubHeading2 color="subtle.500">
								Music, Lifestyle
							</SubHeading2>
						</VStack>
						<HStack space="3">
							<HStack
								space="1"
								justifyContent="center"
								alignItems="center"
							>
								<RemixIcon
									size={5}
									color="primary.500"
									name="account-circle-fill"
								/>
								<SubHeading2 color="primary.500">
									210
								</SubHeading2>
							</HStack>
							<HStack
								space="1"
								justifyContent="center"
								alignItems="center"
							>
								<RemixIcon
									size={5}
									color="primary.500"
									name="star-fill"
								/>
								<SubHeading2 color="primary.500">
									9.7
								</SubHeading2>
							</HStack>
						</HStack>
					</VStack>
				</HStack>
			</SquircleCard>
		</TouchableOpacity>
	);
}
export default function ExploreScreen() {
	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0, 1]}>
			<Header title="Explore" />
			<VStack px="4" mt="6" space="8">
				<Input
					borderColor="bg.500"
					bg="bg.400"
					borderRadius="xl"
					// change background color
					placeholder="Search"
					// backgroundColor="bg.500"
					InputLeftElement={
						<Box pl="2">
							<RemixIcon
								name="ri-search-line"
								size={6}
								color="body.500"
							/>
						</Box>
					}
					style={{
						backgroundColor: 'blue',
					}}
					InputRightElement={
						<IconButton
							pr="2"
							icon={
								<RemixIcon
									name="close-line"
									size={6}
									color="body.500"
								/>
							}
							colorScheme="bg"
							onPress={() => alert('clear')}
						/>
					}
				/>
			</VStack>
			<VStack px="4" mt="6" space="8">
				<VStack space="3">
					<ClubCard image={clubImage.WASD} />
					<ClubCard image={clubImage.audiobytes} />
					<ClubCard image={clubImage.commonRoom} />
					<ClubCard image={clubImage.byld} />
					<ClubCard image={clubImage.byld} />
					<ClubCard image={clubImage.byld} />
					<ClubCard image={clubImage.byld} />
				</VStack>
			</VStack>
		</ParentScrollContainer>
	);
}
