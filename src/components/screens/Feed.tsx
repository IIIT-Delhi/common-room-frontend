import React from 'react';
import MaskedView from '@react-native-community/masked-view';
import {
	Box,
	Heading,
	HStack,
	Image,
	ScrollView,
	Text,
	useTheme,
	VStack,
} from 'native-base';
import { SquircleView } from 'react-native-figma-squircle';
import { ParentScrollContainer, SquircleImage } from '../general';
import { Heading4 } from '../typography';
import { TouchableOpacity } from 'react-native';

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

const EventsForYou = () => {
	return (
		<VStack mt="8">
			{/* ======================================== */}
			<Heading4 ml="4">Events for you</Heading4>
			<ScrollView horizontal mt="4" showsHorizontalScrollIndicator={false}>
				<HStack space="4" pl="4">
					<EFYCard
						src={{
							uri: 'https://i.imgur.com/6UdeTsV.png',
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
					<TodayCard
						src={{
							uri: 'https://i.imgur.com/lBEuvFL.png',
						}}
					/>
					<TodayCard
						src={{
							uri: 'https://i.imgur.com/lBEuvFL.png',
						}}
					/>
				</VStack>
			</VStack>
		</VStack>
	);
};

const EFYCard = ({
	src = {
		uri: 'https://i.imgur.com/6UdeTsV.png',
	},
}) => {
	return (
		<TouchableOpacity activeOpacity={0.8}>
			<SquircleImage height={189} width={152} src={src} />
		</TouchableOpacity>
	);
};

const TodayCard = ({
	src = {
		uri: 'https://i.imgur.com/lBEuvFL.png',
	},
}) => {
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
				}}
			>
				<HStack space="4">
					<MaskedView
						maskElement={
							<SquircleView
								style={{ width: 115, height: 115 }}
								squircleParams={{
									cornerSmoothing: 1,
									cornerRadius: 10,
								}}
							/>
						}
					>
						<Image source={src} size="xl" w="115" h="115" alt="Dummy Image" />
					</MaskedView>
					<VStack space="1">
						<Heading4>Parody Night</Heading4>
						<Text>by Audiobytes</Text>
					</VStack>
				</HStack>
			</SquircleView>
		</TouchableOpacity>
	);
};
