import { HStack, IconButton, Image, View, VStack } from 'native-base';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import clubImage from '../assets/dummyClubEvents';
import {
	ParentScrollContainer,
	RemixIcon,
	SquircleCard,
} from '../components/general';
import {
	Body2,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	SubHeading1,
} from '../components/typography';
import FeedStackParamsList from '../navigation/home/feed/types';
import { EventCard } from './Feed';

function ThisWeek() {
	return (
		<VStack space="4">
			<Heading4>Happening This Week</Heading4>
			<VStack space="3">
				<EventCard />
				<EventCard />
			</VStack>
		</VStack>
	);
}

function Coordinators() {
	const coordinators = [
		{ name: 'Abhimanyu Jha', email: 'abhimanyu17126@iiitd.ac.in' },
		{ name: 'Abhimanyu Jha', email: 'abhimanyu17126@iiitd.ac.in' },
		{ name: 'Abhimanyu Jha', email: 'abhimanyu17126@iiitd.ac.in' },
		{ name: 'Abhimanyu Jha', email: 'abhimanyu17126@iiitd.ac.in' },
	];
	return (
		<VStack space="4">
			<Heading4>Club Coordinators</Heading4>
			<VStack space="2">
				{coordinators.map((coordinator, index) => (
					<SquircleCard>
						<HStack
							flexDir="row-reverse"
							justifyContent="space-between"
						>
							<Image
								source={clubImage.valorant}
								alt="coordinator-image"
								h="12"
								w="12"
								borderRadius="6"
							/>
							<VStack space="1">
								<SubHeading1>{coordinator.name}</SubHeading1>
								<Body2>{coordinator.email}</Body2>
							</VStack>
						</HStack>
					</SquircleCard>
				))}
			</VStack>
		</VStack>
	);
}

function AboutClub({ clubName }: any) {
	return (
		<VStack space="4">
			<Heading4>About {clubName}</Heading4>
			<Body2>
				Audiobytes is the music society of IIIT Delhi. We seek to
				increase the music culture among the students at our college by
				organizing vocal and instrumental events, and encourage the
				music enthusiasts to take part in inter-college competitions for
				the betterment of the individuals as musicians.
			</Body2>
		</VStack>
	);
}

export default function ClubScreen({
	navigation,
}: // route,
NativeStackScreenProps<FeedStackParamsList, 'Event'>) {
	const windowWidth = Dimensions.get('window').width;
	const [isFollowing, setIsFollowing] = useState(false);
	// const { id } = route.params;
	const clubName = 'Audiobytes';
	const popularity = 9.7;
	const following = 210;
	return (
		<View height="100%">
			<IconButton
				icon={<RemixIcon name="arrow-left-line" />}
				zIndex={1}
				onPress={() => navigation.goBack()}
				variant="solid"
				position="absolute"
				top="10"
				left="4"
				_icon={{ color: 'white', size: 7 }}
				colorScheme="bg"
				backgroundColor="#00000066"
			/>

			<ParentScrollContainer contentUnderStatusBar noHorizontalPadding>
				<Image
					source={clubImage.commonRoom}
					size={windowWidth}
					alt="event image"
				/>
				<VStack px="4" mt="6" space="4">
					<VStack space="2">
						<HStack
							space="3"
							justifyContent="space-between"
							alignItems="center"
						>
							<Heading2>{clubName}</Heading2>
							<IconButton
								icon={
									<RemixIcon
										name={
											isFollowing
												? 'heart-fill'
												: 'heart-line'
										}
										color="primary.500"
									/>
								}
								zIndex={1}
								onPress={() => setIsFollowing(!isFollowing)}
								variant="ghost"
								color="primary.500"
							/>
						</HStack>
					</VStack>
					<VStack space="3">
						<HStack p="2" space="1" bg="bg.400" borderRadius="xl">
							{!isFollowing ? (
								<SubHeading1>You don&apos;t follow</SubHeading1>
							) : (
								<SubHeading1>You follow</SubHeading1>
							)}
							<SubHeading1 color="primary.500">
								{clubName}
							</SubHeading1>
							{isFollowing && <SubHeading1>🙌</SubHeading1>}
						</HStack>

						<HStack space="3" justifyContent="space-between">
							<VStack
								p="4"
								justifyContent="space-between"
								bg="bg.400"
								borderRadius="xl"
								space="2"
								w="48%"
							>
								<Heading3 color="primary.500">
									{following}
								</Heading3>
								<Heading5>Followers</Heading5>
							</VStack>
							<VStack
								p="4"
								justifyContent="space-between"
								bg="bg.400"
								borderRadius="xl"
								space="2"
								w="48%"
							>
								<Heading3 color="primary.500">
									{popularity}
								</Heading3>
								<Heading5>Popularity</Heading5>
							</VStack>
						</HStack>
					</VStack>
				</VStack>

				<VStack px="4" mt="6" space="6" pb="24">
					<ThisWeek />
					<Coordinators />
					<AboutClub clubName={clubName} />
				</VStack>
			</ParentScrollContainer>
		</View>
	);
}
