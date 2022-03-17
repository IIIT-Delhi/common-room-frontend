import React from 'react';
import { Box, HStack, ScrollView, useTheme, VStack } from 'native-base';
import { SquircleView } from 'react-native-figma-squircle';
import RemixIcon from 'react-native-remix-icon';
import { TouchableOpacity } from 'react-native';
import { ParentScrollContainer, SquircleImage } from '../components/general';
import { Heading4 } from '../components/typography';
import { SubHeading2 } from '../components/typography/Heading';
import clubImage from '../assets/dummyClubEvents';

function EFYCard({ src = clubImage.WASD }) {
	return (
		<TouchableOpacity activeOpacity={0.8}>
			<SquircleImage height={189} width={152} src={src} />
		</TouchableOpacity>
	);
}

function EventCard({
	src = clubImage.parodyNight,
	attendingCount = 21,
	dateTime = '21 Feb, 1PM',
	eventName = 'Parody Night',
	clubName = 'Audiobytes',
}) {
	const { colors } = useTheme();
	return (
		<TouchableOpacity activeOpacity={0.8}>
			<SquircleView
				squircleParams={{
					cornerSmoothing: 1,
					cornerRadius: 10,
					fillColor: colors.bg['400'],
				}}
				style={{
					width: '100%',
					minHeight: 20,
					padding: 8,
					maxHeight: 115 + 16,
				}}
			>
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
			</SquircleView>
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
				src={clubImage.meme}
				attendingCount={25}
				dateTime="27 Feb, 5PM"
				eventName="This is a meme event to check long titles"
				clubName="DesignHub"
			/>
		</VStack>
	);
}
function EventsForYouFeed() {
	return (
		<ScrollView horizontal mt="4" showsHorizontalScrollIndicator={false}>
			<HStack space="4" pl="4">
				<EFYCard src={clubImage.valorant} />
				<EFYCard src={clubImage.alumni} />
				<EFYCard src={clubImage.byldAPI} />
				<Box />
			</HStack>
		</ScrollView>
	);
}
function FeedStream() {
	return (
		<VStack mt="8">
			{/* ====================1==================== */}
			<Heading4 ml="4">Events for you</Heading4>
			<EventsForYouFeed />
			{/* =====================2=================== */}
			<VStack mx="4">
				<Heading4 mt="8">Today</Heading4>
				<VStack mt="4" space="3">
					<TodayFeed />
				</VStack>
				{/* =====================3=================== */}
				<Heading4 mt="8">Happening This Week</Heading4>
				<VStack mt="4" space="3">
					<ThisWeekFeed />
				</VStack>
			</VStack>
		</VStack>
	);
}

export default function FeedScreen() {
	return (
		<ParentScrollContainer noHorizontalPadding>
			<Heading4 isSemiBold m="auto">
				Feed
			</Heading4>
			<FeedStream />
		</ParentScrollContainer>
	);
}
