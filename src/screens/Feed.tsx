import { FlatList, HStack, Image, Text, VStack } from 'native-base';
import { ListRenderItem, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
	isToday,
	format as formatDate,
	parseISO,
	isThisWeek,
	isAfter,
} from 'date-fns';
import { partition } from 'lodash';
import {
	Header,
	Loading,
	ParentScrollContainer,
	Spacer,
	SquircleImage,
	RemixIcon,
} from '../components/general';
import { Heading4 } from '../components/typography';
import { SubHeading2 } from '../components/typography/Heading';
import clubImage from '../assets/dummyClubEvents';
import SquircleCard from '../components/general/SquircleCard';
import FeedStackParamsList from '../navigation/home/feed/types';
import {
	FeedEventsQuery,
	useFeedEventsQuery,
	useEventsForYouQuery,
} from '../generated/graphql';
import { getEventsForYouVariable } from '../api/gql/events';
import { useAuth } from '../hooks';

type EventForYouCardProps = {
	id: number;
	image: string | { uri: string };
};

function EventForYouCard({ id, image }: EventForYouCardProps) {
	const navigation =
		useNavigation<
			NativeStackNavigationProp<FeedStackParamsList, 'Event'>
		>();
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={() => navigation.navigate('Event', { id })}
		>
			<SquircleImage height={225} width={225} src={image} />
		</TouchableOpacity>
	);
}

type EventCardProps = {
	id: number;
	name: string;
	clubs: string[];
	attendingCount: number | string;
	image: string | { uri: string };
	dateTime: string | Date;
	isOldCard?: boolean;
};

function EventCard({
	id = 511,
	image = clubImage.parodyNight,
	attendingCount = 21,
	dateTime = '21 Feb, 1PM',
	name = 'Parody Night',
	clubs = ['Audiobytes'],
	isOldCard = false,
}: EventCardProps) {
	const navigation =
		useNavigation<
			NativeStackNavigationProp<FeedStackParamsList, 'Event'>
		>();
	return (
		<TouchableOpacity
			activeOpacity={isOldCard ? 0.1 : 0.8}
			style={{
				opacity: isOldCard ? 0.2 : 1,
			}}
			onPress={() => navigation.navigate('Event', { id })}
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
								{name}
							</Heading4>
							<SubHeading2 color="subtle.500">
								by {clubs.join(', ')}
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
									{attendingCount}
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
									name="calendar-fill"
								/>
								<SubHeading2 color="primary.500">
									{dateTime}
								</SubHeading2>
							</HStack>
						</HStack>
					</VStack>
				</HStack>
			</SquircleCard>
			<Image source={clubImage.parodyNight} />
		</TouchableOpacity>
	);
}

type EventListProps = { events: FeedEventsQuery['events'] };

function EventList({ events }: EventListProps) {
	const data: EventCardProps[] = events.map((event) => {
		const parsedDate = parseISO(event.eventStartDate);
		const showDate = !isToday(parsedDate);
		return {
			id: event.id,
			dateTime: formatDate(
				parseISO(event.eventStartDate),
				showDate ? 'dd MMM, h:mm a' : 'h:mm a',
			),
			image: { uri: event.image },
			name: event.name,
			clubs: event.clubEvents.map(({ club }) => club.name),
			attendingCount: event.rsvpEvent.length,
		};
	});
	const renderItem: ListRenderItem<EventCardProps> = ({ item }) => (
		<EventCard {...item} />
	);
	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			ListEmptyComponent={<Text>No events during this time 😴</Text>}
			ItemSeparatorComponent={Spacer.Vertical}
			_contentContainerStyle={{ mt: '4' }}
		/>
	);
}

function FeedbackFeed() {
	return (
		<VStack mt="4" space="3">
			<EventCard
				id={512}
				image={clubImage.micDrop}
				attendingCount={25}
				dateTime="27 Feb, 5PM"
				name="How you doin?"
				clubs={['MicDrop']}
				isOldCard
			/>
		</VStack>
	);
}

function EventsForYouFeed() {
	const { authData } = useAuth();

	const { data, isLoading } = useEventsForYouQuery(
		getEventsForYouVariable({
			email: authData.email ?? '',
		}),
		{
			retry: false,
			refetchOnMount: false,
		},
	);

	// console.log(
	// 	'EventsForYouFeed',
	// 	data,
	// 	isLoading,
	// 	JSON.stringify(error, null, 2),
	// );

	if (isLoading) return <Loading />;

	const eventData = data?.events.map((event) => ({
		id: event.id,
		image: { uri: event.image },
	}));

	const renderItem: ListRenderItem<EventForYouCardProps> = ({ item }) => (
		<EventForYouCard id={item.id} image={item.image} />
	);

	return (
		<FlatList
			data={eventData}
			renderItem={renderItem}
			keyExtractor={(item) => item.id.toString()}
			ItemSeparatorComponent={Spacer.Horizontal}
			horizontal
			showsHorizontalScrollIndicator={false}
			mt="4"
			_contentContainerStyle={{ px: '4' }}
			ListEmptyComponent={
				<Text>
					No events for you right now 😓{'\n'}
					Try adding more interests ✨
				</Text>
			}
		/>
	);
}
function FeedStream() {
	const { data, isLoading, error, refetch } = useFeedEventsQuery();
	useFocusEffect(() => {
		refetch();
	});

	if (isLoading) return <Loading />;

	const { events } = data || {};

	const [todayEvents, otherEvents] = partition(events, (event) =>
		isToday(parseISO(event.eventStartDate)),
	);

	const thisWeekEvents = otherEvents.filter((event) => {
		const eventStartDate = parseISO(event.eventStartDate);
		return (
			isThisWeek(eventStartDate) && isAfter(eventStartDate, new Date())
		);
	});

	return (
		<VStack mt="6">
			{/* ====================1==================== */}
			<Heading4 ml="4">Events for you &nbsp;⭐</Heading4>
			{/* <EventsForYouFeed /> */}
			{/* =====================2=================== */}
			<VStack mx="4">
				<Heading4 mt="8">Today 💃</Heading4>
				<EventList events={todayEvents} />
				{/* =====================3=================== */}
				<Heading4 mt="8">Happening This Week &nbsp;&nbsp;📅</Heading4>
				<EventList events={thisWeekEvents} />
				{/* =====================4=================== */}
				{/* <Heading4 mt="8">Leave Feedback &nbsp;&nbsp;💬</Heading4>
				<FeedbackFeed />
				<SubHeading2 mt="6" color="body.500" m="auto">
					older events
				</SubHeading2> */}
			</VStack>
		</VStack>
	);
}

function FeedScreen() {
	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Feed" />
			<FeedStream />
		</ParentScrollContainer>
	);
}

export default FeedScreen;
export { EventList, EventListProps };
