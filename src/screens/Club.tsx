import { HStack, IconButton, Image, View, VStack } from 'native-base';
import { Dimensions } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { startOfWeek } from 'date-fns';
import { find, orderBy } from 'lodash';
import { useQueryClient } from 'react-query';
import {
	Loading,
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
	SubHeading2,
} from '../components/typography';
import FeedStackParamsList from '../navigation/home/feed/types';
import { EventList, EventListProps } from './Feed';
import {
	useClubQuery,
	useSubscribeClubMutation,
	useUnsubscribeClubMutation,
} from '../generated/graphql';
import { useAuthData } from '../hooks/auth';

function ThisWeek({ events }: EventListProps) {
	return (
		<VStack space="4">
			<Heading4>Happening This Week 📅</Heading4>
			<EventList events={events} />
		</VStack>
	);
}

type Coordinator = {
	name: string;
	email: string;
	picture: string;
};

type CoordinatorsProps = {
	coordinators: Array<Coordinator> | undefined;
};

function Coordinators({ coordinators }: CoordinatorsProps) {
	return (
		<VStack space="4">
			<Heading4>Club Coordinators 👑</Heading4>
			<VStack space="2">
				{coordinators?.map((coordinator) => (
					<SquircleCard key={`coordinator${coordinator.email}`}>
						<HStack
							flexDir="row-reverse"
							justifyContent="space-between"
						>
							<Image
								source={{ uri: coordinator.picture }}
								alt={`${coordinator.name}-image`}
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

type AboutClubProps = {
	name: string | undefined;
	description: string | undefined;
};

function AboutClub({ name, description }: AboutClubProps) {
	return (
		<VStack space="4">
			<Heading4>About {name} 💭</Heading4>
			<Body2>{description}</Body2>
		</VStack>
	);
}

export default function ClubScreen({
	navigation,
	route,
}: NativeStackScreenProps<FeedStackParamsList, 'Club'>) {
	const windowWidth = Dimensions.get('window').width;

	const { id } = route.params;
	const authData = useAuthData();
	const queryClient = useQueryClient();

	const startDate = startOfWeek(new Date());
	const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);

	const { data, isLoading } = useClubQuery({
		whereClub: { id },
		whereEvent: {
			event: { is: { eventStartDate: { gte: startDate, lt: endDate } } },
		},
	});

	const subscribeClub = useSubscribeClubMutation({
		onSuccess: () => {
			queryClient.invalidateQueries(['club']);
		},
	});

	const unsubscribeClub = useUnsubscribeClubMutation({
		onSuccess: () => {
			queryClient.invalidateQueries(['club']);
		},
	});

	if (isLoading) return <Loading />;

	const {
		name,
		image,
		description,
		clubCoordinator,
		clubEvents,
		subscription,
	} = data?.club || {};

	const userSubscription =
		find(subscription, { userId: authData.id }) ?? null;
	const isFollowing = !!userSubscription?.id;

	const weekEvents = clubEvents?.map((event) => event.event);
	const coordinators = orderBy(
		clubCoordinator?.map((coordinator) => coordinator.user),
		['name'],
		['asc'],
	);

	const toggleSubscription = () => {
		if (isFollowing) {
			unsubscribeClub.mutate({
				where: { id: userSubscription?.id },
			});
		} else {
			subscribeClub.mutate({
				data: {
					club: { connect: { id } },
					user: { connect: { id: authData.id } },
				},
			});
		}
	};

	const popularity = 9.7;
	const following = subscription?.length || 0;
	const links = [];
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
					source={{ uri: image }}
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
							<Heading2>{name}</Heading2>
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
								onPress={toggleSubscription}
								variant="ghost"
								color="primary.500"
								isDisabled={
									subscribeClub.isLoading ||
									unsubscribeClub.isLoading
								}
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
								{name}
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
					{weekEvents && <ThisWeek events={weekEvents} />}
					<Coordinators coordinators={coordinators} />
					<AboutClub name={name} description={description} />
					<VStack space="3">
						<SubHeading1 color="primary.500">Links</SubHeading1>
						{links.length > 0 ? (
							<HStack space="4">
								<SubHeading2>Dummy</SubHeading2>
							</HStack>
						) : (
							<Body2>No links here right now</Body2>
						)}
					</VStack>
				</VStack>
			</ParentScrollContainer>
		</View>
	);
}
