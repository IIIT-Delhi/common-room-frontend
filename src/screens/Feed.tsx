import { Box, FlatList, HStack, useTheme, VStack } from 'native-base';
import RemixIcon from 'react-native-remix-icon';
import { ListRenderItem, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
	Header,
	ParentScrollContainer,
	SquircleImage,
} from '../components/general';
import { Heading4 } from '../components/typography';
import { SubHeading2 } from '../components/typography/Heading';
import clubImage from '../assets/dummyClubEvents';
import SquircleCard from '../components/general/SquircleCard';
import FeedStackParamsList from '../navigation/home/feed/types';

function EFYCard({ src = clubImage.WASD }) {
	return (
		<TouchableOpacity activeOpacity={0.8}>
			<SquircleImage height={225} width={225} src={src} />
		</TouchableOpacity>
	);
}

function EventCard({
	src = clubImage.parodyNight,
	attendingCount = 21,
	dateTime = '21 Feb, 1PM',
	eventName = 'Parody Night',
	clubName = 'Audiobytes',
	isOldCard = false,
}) {
	const { colors } = useTheme();
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
			onPress={() => navigation.navigate('Event', { id: '1' })}
		>
			<SquircleCard>
				<HStack space="4">
					<SquircleImage
						height={115}
						width={115}
						src={src}
						flex="1"
					/>
					<VStack space="3" flex="9">
						<VStack space="1">
							<Heading4 numberOfLines={2} ellipsizeMode="tail">
								{eventName}
							</Heading4>
							<SubHeading2 color="subtle.500">
								by {clubName}
							</SubHeading2>
						</VStack>
						<HStack space="3">
							<HStack
								space="1"
								justifyContent="center"
								alignItems="center"
							>
								<RemixIcon
									size={16}
									name="ri-account-circle-fill"
									color={colors.primary['500']}
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
									size={16}
									name="ri-calendar-fill"
									color={colors.primary['500']}
								/>
								<SubHeading2 color="primary.500">
									{dateTime}
								</SubHeading2>
							</HStack>
						</HStack>
					</VStack>
				</HStack>
			</SquircleCard>
		</TouchableOpacity>
	);
}
function TodayFeed() {
	return (
		<VStack mt="4" space="3">
			<EventCard src={clubImage.parodyNight} />
			<EventCard
				src={clubImage.WASD}
				attendingCount={25}
				dateTime="21 Feb, 5PM"
				eventName="W.A.S.D Elements Game Jam"
				clubName="DesignHub"
			/>
		</VStack>
	);
}
function ThisWeekFeed() {
	return (
		<VStack mt="4" space="3">
			<EventCard
				src={clubImage.placementPrep}
				attendingCount={25}
				dateTime="27 Feb, 5PM"
				eventName="Placement Preparation Checker"
				clubName="Biobytes"
			/>

			<EventCard
				src={clubImage.micDrop}
				attendingCount={25}
				dateTime="27 Feb, 5PM"
				eventName="How you doin?"
				clubName="MicDrop"
			/>
		</VStack>
	);
}
function FeedbackFeed() {
	return (
		<VStack mt="4" space="3">
			<EventCard
				src={clubImage.roboMaze}
				attendingCount={25}
				dateTime="27 Feb, 5PM"
				eventName="Maze Coverage and Basics of Graphs"
				clubName="Cyborg"
				isOldCard
			/>

			<EventCard
				src={clubImage.meme}
				attendingCount={25}
				dateTime="27 Feb, 5PM"
				eventName="This is a meme event to check long titles"
				clubName="DesignHub"
				isOldCard
			/>
		</VStack>
	);
}

function Seperator() {
	return <Box />;
}

function EventsForYouFeed() {
	type EventDataType = { id: string; image: any };
	const events: EventDataType[] = [
		{ id: '1', image: clubImage.valorant },
		{ id: '2', image: clubImage.alumni },
		{ id: '3', image: clubImage.byldAPI },
	];
	const renderItem: ListRenderItem<EventDataType> = ({ item }) => (
		<EFYCard src={item.image} />
	);

	return (
		<FlatList
			data={events}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={Seperator}
			horizontal
			showsHorizontalScrollIndicator={false}
			mt="4"
			_contentContainerStyle={{ pl: '4' }}
		/>
	);
}
function FeedStream() {
	return (
		<VStack mt="6">
			{/* ====================1==================== */}
			<Heading4 ml="4">Events for you &nbsp;⭐</Heading4>
			<EventsForYouFeed />
			{/* =====================2=================== */}
			<VStack mx="4">
				<Heading4 mt="8">Today 💃</Heading4>
				<TodayFeed />
				{/* =====================3=================== */}
				<Heading4 mt="8">Happening This Week &nbsp;&nbsp;📅</Heading4>
				<ThisWeekFeed />
				{/* =====================4=================== */}
				<Heading4 mt="8">Leave Feedback &nbsp;&nbsp;💬</Heading4>
				<FeedbackFeed />
				<SubHeading2 mt="6" color="body.500" m="auto">
					older events
				</SubHeading2>
			</VStack>
		</VStack>
	);
}

export default function FeedScreen() {
	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Feed" />
			<FeedStream />
		</ParentScrollContainer>
	);
}
