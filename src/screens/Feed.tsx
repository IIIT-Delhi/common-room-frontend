import React from 'react';
import { Box, HStack, ScrollView, useTheme, VStack } from 'native-base';
import { SquircleView } from 'react-native-figma-squircle';
import RemixIcon from 'react-native-remix-icon';
import { TouchableOpacity } from 'react-native';
import { ParentScrollContainer, SquircleImage } from '../components/general';
import { Heading4 } from '../components/typography';
import { SubHeading2 } from '../components/typography/Heading';

function EFYCard({
	src = {
		uri: 'https://i.imgur.com/6UdeTsV.png',
	},
}) {
	return (
		<TouchableOpacity activeOpacity={0.8}>
			<SquircleImage height={189} width={152} src={src} />
		</TouchableOpacity>
	);
}

function EventCard({
	src = {
		uri: 'https://i.imgur.com/lBEuvFL.png',
	},
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
					<SquircleImage height={115} width={115} src={src} flex="1" />
					<VStack space="3" flex="9">
						<VStack space="1">
							<Heading4 numberOfLines={2} ellipsizeMode="tail">
								{eventName}
							</Heading4>
							<SubHeading2 color="subtle.500">by {clubName}</SubHeading2>
						</VStack>
						<HStack space="3">
							<HStack space="1" justifyContent="center" alignItems="center">
								<RemixIcon
									size={16}
									name="ri-account-circle-fill"
									color={colors.primary['500']}
								/>
								<SubHeading2 color="primary.500">{attendingCount}</SubHeading2>
							</HStack>
							<HStack space="1" justifyContent="center" alignItems="center">
								<RemixIcon
									size={16}
									name="ri-calendar-fill"
									color={colors.primary['500']}
								/>
								<SubHeading2 color="primary.500">{dateTime}</SubHeading2>
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
			<EventCard
				src={{
					uri: 'https://i.imgur.com/lBEuvFL.png',
				}}
			/>
			<EventCard
				src={{
					uri: 'https://i.imgur.com/6UdeTsV.png',
				}}
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
				src={{
					uri: 'https://i.imgur.com/gVB6nNA.jpg',
				}}
				attendingCount={25}
				dateTime="27 Feb, 5PM"
				eventName="Placement Preparation Checker"
				clubName="Biobytes"
			/>

			<EventCard
				src={{
					uri: 'https://i.imgur.com/2HlPf0M.jpeg',
				}}
				attendingCount={25}
				dateTime="27 Feb, 5PM"
				eventName="This is a meme event to check long titles"
				clubName="DesignHub"
			/>
		</VStack>
	);
}

function EventsForYou() {
	return (
		<VStack mt="8">
			{/* ======================================== */}
			<Heading4 ml="4">Events for you</Heading4>
			<ScrollView horizontal mt="4" showsHorizontalScrollIndicator={false}>
				<HStack space="4" pl="4">
					<EFYCard
						src={{
							uri: 'https://i.imgur.com/qUGBWT1.png',
						}}
					/>
					<EFYCard
						src={{
							uri: 'https://i.imgur.com/wirtZl3.png',
						}}
					/>
					<EFYCard
						src={{
							uri: 'https://i.imgur.com/v2JMO5K.png',
						}}
					/>
					<Box />
				</HStack>
			</ScrollView>
			{/* ======================================== */}
			<VStack mx="4">
				<Heading4 mt="8">Today</Heading4>
				<VStack mt="4" space="3">
					<TodayFeed />
				</VStack>
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
			<EventsForYou />
		</ParentScrollContainer>
	);
}